/* ============================================
   TrustHome Ghana — Submit listing page logic
   ============================================ */

(function () {
  "use strict";

  function injectIcons(root) {
    const map = {
      "[BACK_ICON]": ICONS.back,
      "[SHOP_ICON]": ICONS.shop,
      "[ROOM_ICON]": ICONS.room,
      "[HOSTEL_ICON]": ICONS.hostel,
      "[UPLOAD_ICON]": ICONS.upload,
      "[SHIELD_ICON]": ICONS.shield,
      "[CHECK_ICON]": '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'
    };
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) {
      textNodes.push(node);
    }
    textNodes.forEach(function (textNode) {
      const text = textNode.textContent;
      const matchedToken = Object.keys(map).find(function (token) {
        return text.indexOf(token) !== -1;
      });
      if (!matchedToken) return;
      const parts = text.split(matchedToken);
      const fragment = document.createDocumentFragment();
      parts.forEach(function (part, i) {
        if (part) fragment.appendChild(document.createTextNode(part));
        if (i < parts.length - 1) {
          const wrapper = document.createElement("span");
          wrapper.style.display = "inline-flex";
          wrapper.style.verticalAlign = "middle";
          wrapper.innerHTML = map[matchedToken];
          fragment.appendChild(wrapper);
        }
      });
      textNode.replaceWith(fragment);
    });
  }

  injectIcons(document);

  /* ---------- Property type selection ---------- */
  const typeOptions = document.querySelectorAll(".type-select-option");
  typeOptions.forEach(function (label) {
    label.addEventListener("click", function () {
      typeOptions.forEach(function (l) { l.classList.remove("is-checked"); });
      label.classList.add("is-checked");
      const input = label.querySelector("input");
      input.checked = true;
      clearFieldError("fieldType");
    });
  });

  /* ---------- Photo upload + preview ---------- */
  const photoUploadZone = document.getElementById("photoUploadZone");
  const photoInput = document.getElementById("photoInput");
  const photoPreviewGrid = document.getElementById("photoPreviewGrid");
  let uploadedPhotos = []; // array of object URLs

  photoUploadZone.addEventListener("click", function () {
    photoInput.click();
  });

  photoInput.addEventListener("change", function (e) {
    const files = Array.from(e.target.files || []);
    files.forEach(function (file) {
      const url = URL.createObjectURL(file);
      uploadedPhotos.push(url);
    });
    renderPhotoPreviews();
    clearFieldError("fieldPhotos");
    photoInput.value = "";
  });

  function renderPhotoPreviews() {
    photoPreviewGrid.innerHTML = uploadedPhotos.map(function (url, i) {
      return '<div class="photo-preview-thumb"><img src="' + url + '" alt="Uploaded photo ' + (i + 1) + '">' +
        '<button type="button" class="photo-remove-btn" data-index="' + i + '" aria-label="Remove photo">&times;</button></div>';
    }).join("");
  }

  photoPreviewGrid.addEventListener("click", function (e) {
    const btn = e.target.closest(".photo-remove-btn");
    if (!btn) return;
    const index = parseInt(btn.dataset.index, 10);
    uploadedPhotos.splice(index, 1);
    renderPhotoPreviews();
  });

  /* ---------- Validation helpers ---------- */
  function setFieldError(fieldId) {
    document.getElementById(fieldId).classList.add("has-error");
  }

  function clearFieldError(fieldId) {
    document.getElementById(fieldId).classList.remove("has-error");
  }

  function isValidGhanaPhone(value) {
    const digitsOnly = value.replace(/\D/g, "");
    // Accept 9 digits (without leading 0) e.g. 241234567, or 10 digits with leading 0 e.g. 0241234567
    return /^0?\d{9}$/.test(digitsOnly) && digitsOnly.replace(/^0/, "").length === 9;
  }

  /* ---------- Live error clearing ---------- */
  document.getElementById("inputTitle").addEventListener("input", function () { clearFieldError("fieldTitle"); });
  document.getElementById("inputPrice").addEventListener("input", function () { clearFieldError("fieldPrice"); });
  document.getElementById("inputLocation").addEventListener("input", function () { clearFieldError("fieldLocation"); });
  document.getElementById("inputPhone").addEventListener("input", function () { clearFieldError("fieldPhone"); });
  document.getElementById("inputDescription").addEventListener("input", function () { clearFieldError("fieldDescription"); });

  /* ---------- Form submission ---------- */
  const form = document.getElementById("listingForm");
  const formApp = document.getElementById("formApp");
  const successApp = document.getElementById("successApp");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const title = document.getElementById("inputTitle").value.trim();
    if (!title) { setFieldError("fieldTitle"); isValid = false; } else { clearFieldError("fieldTitle"); }

    const selectedType = form.querySelector("input[name='propertyType']:checked");
    if (!selectedType) { setFieldError("fieldType"); isValid = false; } else { clearFieldError("fieldType"); }

    const price = document.getElementById("inputPrice").value;
    if (!price || parseFloat(price) <= 0) { setFieldError("fieldPrice"); isValid = false; } else { clearFieldError("fieldPrice"); }

    const location = document.getElementById("inputLocation").value.trim();
    if (!location) { setFieldError("fieldLocation"); isValid = false; } else { clearFieldError("fieldLocation"); }

    const phone = document.getElementById("inputPhone").value.trim();
    if (!phone || !isValidGhanaPhone(phone)) { setFieldError("fieldPhone"); isValid = false; } else { clearFieldError("fieldPhone"); }

    const description = document.getElementById("inputDescription").value.trim();
    if (!description) { setFieldError("fieldDescription"); isValid = false; } else { clearFieldError("fieldDescription"); }

    if (uploadedPhotos.length === 0) { setFieldError("fieldPhotos"); isValid = false; } else { clearFieldError("fieldPhotos"); }

    if (!isValid) {
      const firstError = form.querySelector(".has-error");
      if (firstError) firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    // Build the listing object — in production this would POST to your backend/API.
    const newListing = {
      title: title,
      type: selectedType.value,
      price: parseFloat(price),
      period: document.getElementById("inputPeriod").value,
      location: location,
      phone: "233" + phone.replace(/\D/g, "").replace(/^0/, ""),
      description: description,
      photoCount: uploadedPhotos.length
    };

    console.log("New listing submitted:", newListing);

    // Show success state
    formApp.classList.add("hidden");
    successApp.classList.remove("hidden");
    window.scrollTo(0, 0);
  });
})();
