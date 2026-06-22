/* ============================================
   TrustHome Ghana — Property details page logic
   ============================================ */

(function () {
  "use strict";

  function injectIcons(root) {
    const map = {
      "[BACK_ICON]": ICONS.back,
      "[SHARE_ICON]": ICONS.share,
      "[HEART_ICON]": ICONS.heart,
      "[PIN_ICON]": ICONS.pin,
      "[SHIELD_ICON]": ICONS.shield,
      "[PHONE_ICON]": ICONS.phone,
      "[WHATSAPP_ICON]": ICONS.whatsapp,
      "[EMPTY_ICON]": ICONS.emptyHouse,
      "[CHECK_ICON]": ICONS.check
    };
    // Walk every text node in the tree (regardless of how many siblings
    // its parent has) and replace any icon tokens found within it.
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
      // Split the text around the token and rebuild with the icon as real markup.
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

  const id = getQueryParam("id");
  const listing = getListingById(id);

  const propertyApp = document.getElementById("propertyApp");
  const notFoundApp = document.getElementById("notFoundApp");

  if (!listing) {
    propertyApp.classList.add("hidden");
    notFoundApp.classList.remove("hidden");
    injectIcons(notFoundApp);
    return;
  }

  injectIcons(propertyApp);

  const amenityIconPool = [ICONS.check, ICONS.wifi, ICONS.shield, ICONS.check, ICONS.check, ICONS.check];

  /* ---------- Gallery ---------- */
  let currentImageIndex = 0;
  const mainImage = document.getElementById("mainImage");
  const galleryCounter = document.getElementById("galleryCounter");
  const thumbRow = document.getElementById("thumbRow");

  function renderGallery() {
    mainImage.src = listing.images[currentImageIndex];
    mainImage.alt = listing.title + " photo " + (currentImageIndex + 1);
    galleryCounter.textContent = (currentImageIndex + 1) + " / " + listing.images.length;

    thumbRow.innerHTML = listing.images.map(function (src, i) {
      return '<button class="thumb' + (i === currentImageIndex ? " is-active" : "") + '" data-index="' + i + '" aria-label="View photo ' + (i + 1) + '"><img src="' + src + '" alt=""></button>';
    }).join("");
  }

  thumbRow.addEventListener("click", function (e) {
    const btn = e.target.closest(".thumb");
    if (!btn) return;
    currentImageIndex = parseInt(btn.dataset.index, 10);
    renderGallery();
  });

  mainImage.addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % listing.images.length;
    renderGallery();
  });

  renderGallery();

  /* ---------- Details text ---------- */
  document.getElementById("detailPrice").innerHTML =
    formatPrice(listing.price) + ' <span>/ ' + listing.period + '</span>';
  document.getElementById("detailTypeBadge").textContent = listing.type;
  document.getElementById("detailTitle").textContent = listing.title;
  document.getElementById("detailLocation").textContent = listing.location;
  document.getElementById("detailDescription").textContent = listing.description;

  document.title = listing.title + " — TrustHome Ghana";

  if (!listing.verified) {
    document.getElementById("verifiedBanner").classList.add("hidden");
  }

  /* ---------- Amenities ---------- */
  const amenityGrid = document.getElementById("amenityGrid");
  amenityGrid.innerHTML = listing.amenities.map(function (item, i) {
    return '<div class="amenity-item">' + (amenityIconPool[i % amenityIconPool.length]) + '<span>' + item + '</span></div>';
  }).join("");

  /* ---------- Landlord card ---------- */
  document.getElementById("landlordAvatar").textContent = listing.landlord.initials;
  document.getElementById("landlordName").textContent = listing.landlord.name;
  document.getElementById("landlordMeta").textContent = listing.landlord.since;

  const telLink = "tel:+" + listing.landlord.phone;
  document.getElementById("callBtn").href = telLink;
  document.getElementById("callBtnBottom").href = telLink;

  /* ---------- Map preview label ---------- */
  document.getElementById("mapLabel").textContent = listing.location + " — exact location shared after contact";

  /* ---------- WhatsApp pre-filled message ---------- */
  const whatsappMessage =
    "Hello " + listing.landlord.name.replace(/^(Mr\.|Madam)\s*/, "") + ", I saw your listing \"" +
    listing.title + "\" (" + formatPrice(listing.price) + "/" + listing.period +
    ") on TrustHome Ghana and I'm interested. Is it still available?";

  const whatsappBtn = document.getElementById("whatsappBtn");
  whatsappBtn.href = buildWhatsAppLink(listing.landlord.phone, whatsappMessage);

  /* ---------- Share / Save (demo-only interactions) ---------- */
  document.getElementById("shareBtn").addEventListener("click", function () {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({ title: listing.title, url: shareUrl }).catch(function () {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      this.setAttribute("data-copied", "true");
    }
  });

  document.getElementById("saveBtn").addEventListener("click", function () {
    this.classList.toggle("is-active");
    this.style.color = this.classList.contains("is-active") ? "#C2542D" : "";
  });
})();
