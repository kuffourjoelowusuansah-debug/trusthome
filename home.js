/* ============================================
   TrustHome Ghana — Home page logic
   ============================================ */

(function () {
  "use strict";

  // Replace icon placeholder tokens with actual inline SVG markup.
  function injectIcons(root) {
    const map = {
      "[SEARCH_ICON]": ICONS.search,
      "[PIN_ICON]": ICONS.pin,
      "[CHEVRON_ICON]": ICONS.chevronDown,
      "[FILTER_ICON]": ICONS.filter,
      "[EMPTY_ICON]": ICONS.emptyHouse,
      "[HOME_ICON]": ICONS.home,
      "[PLUS_ICON]": ICONS.plusCircle,
      "[USER_ICON]": ICONS.user,
      "[BADGE_ICON]": ICONS.badge
    };
    root.querySelectorAll("span[aria-hidden='true']").forEach(function (el) {
      const token = el.textContent.trim();
      if (map[token]) {
        el.innerHTML = map[token];
        el.style.display = "inline-flex";
        el.style.alignItems = "center";
      }
    });
  }

  injectIcons(document);

  /* ---------- State ---------- */
  const state = {
    search: "",
    location: "",
    type: "",
    minPrice: null,
    maxPrice: null
  };

  // Draft state used while the filter sheet is open (only committed on "Show results")
  let draftLocation = "";
  let draftType = "";

  /* ---------- DOM refs ---------- */
  const grid = document.getElementById("propertyGrid");
  const emptyState = document.getElementById("emptyState");
  const resultCount = document.getElementById("resultCount");
  const searchInput = document.getElementById("searchInput");

  const sheetBackdrop = document.getElementById("sheetBackdrop");
  const filterSheet = document.getElementById("filterSheet");
  const locationOptions = document.getElementById("locationOptions");
  const typeOptions = document.getElementById("typeOptions");
  const minPriceInput = document.getElementById("minPriceInput");
  const maxPriceInput = document.getElementById("maxPriceInput");

  const chipLocationLabel = document.getElementById("chipLocationLabel");
  const chipPriceLabel = document.getElementById("chipPriceLabel");
  const chipTypeLabel = document.getElementById("chipTypeLabel");

  const typeTagSvg = {
    Shop: ICONS.shop,
    Room: ICONS.room,
    Hostel: ICONS.hostel
  };

  /* ---------- Card rendering ---------- */
  function cardTemplate(item) {
    const verifiedBadge = item.verified
      ? '<div class="card-verified">' + ICONS.badge + '<span>Verified</span></div>'
      : "";

    return (
      '<a class="property-card" href="property.html?id=' + item.id + '" data-id="' + item.id + '">' +
        '<div class="card-media">' +
          '<img src="' + item.images[0] + '" alt="' + item.title + '" loading="lazy">' +
          '<div class="card-type-tag">' + item.type + '</div>' +
          verifiedBadge +
        '</div>' +
        '<div class="card-body">' +
          '<div class="card-price">' + formatPrice(item.price) + ' <span>/ ' + item.period + '</span></div>' +
          '<div class="card-title">' + item.title + '</div>' +
          '<div class="card-location">' + ICONS.pin + '<span>' + item.location + '</span></div>' +
        '</div>' +
      '</a>'
    );
  }

  function getFilteredListings() {
    return LISTINGS.filter(function (item) {
      if (state.search) {
        const q = state.search.toLowerCase();
        const haystack = (item.title + " " + item.location).toLowerCase();
        if (haystack.indexOf(q) === -1) return false;
      }
      if (state.location && item.location.indexOf(state.location) === -1) return false;
      if (state.type && item.type !== state.type) return false;
      if (state.minPrice !== null && item.price < state.minPrice) return false;
      if (state.maxPrice !== null && item.price > state.maxPrice) return false;
      return true;
    });
  }

  function render() {
    const results = getFilteredListings();

    if (results.length === 0) {
      grid.classList.add("hidden");
      emptyState.classList.remove("hidden");
      resultCount.textContent = "0 properties available";
      return;
    }

    grid.classList.remove("hidden");
    emptyState.classList.add("hidden");
    resultCount.textContent = results.length + (results.length === 1 ? " property" : " properties") + " available";
    grid.innerHTML = results.map(cardTemplate).join("");
  }

  /* ---------- Search input ---------- */
  let searchDebounce;
  searchInput.addEventListener("input", function (e) {
    clearTimeout(searchDebounce);
    const val = e.target.value;
    searchDebounce = setTimeout(function () {
      state.search = val.trim();
      render();
    }, 150);
  });

  /* ---------- Filter sheet open/close ---------- */
  let activeSheetField = null; // "location" | "price" | "type"

  function openSheet(field) {
    activeSheetField = field;
    draftLocation = state.location;
    draftType = state.type;
    minPriceInput.value = state.minPrice !== null ? state.minPrice : "";
    maxPriceInput.value = state.maxPrice !== null ? state.maxPrice : "";
    syncOptionPills(locationOptions, draftLocation);
    syncOptionPills(typeOptions, draftType);
    sheetBackdrop.classList.add("is-open");
    filterSheet.classList.add("is-open");
  }

  function closeSheet() {
    sheetBackdrop.classList.remove("is-open");
    filterSheet.classList.remove("is-open");
    activeSheetField = null;
  }

  document.getElementById("chipLocation").addEventListener("click", function () { openSheet("location"); });
  document.getElementById("chipPrice").addEventListener("click", function () { openSheet("price"); });
  document.getElementById("chipType").addEventListener("click", function () { openSheet("type"); });
  sheetBackdrop.addEventListener("click", closeSheet);

  function syncOptionPills(container, selectedValue) {
    container.querySelectorAll(".option-pill").forEach(function (btn) {
      btn.classList.toggle("is-selected", btn.dataset.value === selectedValue);
    });
  }

  locationOptions.addEventListener("click", function (e) {
    const btn = e.target.closest(".option-pill");
    if (!btn) return;
    draftLocation = btn.dataset.value;
    syncOptionPills(locationOptions, draftLocation);
  });

  typeOptions.addEventListener("click", function (e) {
    const btn = e.target.closest(".option-pill");
    if (!btn) return;
    draftType = btn.dataset.value;
    syncOptionPills(typeOptions, draftType);
  });

  document.getElementById("resetFiltersBtn").addEventListener("click", function () {
    draftLocation = "";
    draftType = "";
    minPriceInput.value = "";
    maxPriceInput.value = "";
    syncOptionPills(locationOptions, "");
    syncOptionPills(typeOptions, "");
  });

  document.getElementById("applyFiltersBtn").addEventListener("click", function () {
    state.location = draftLocation;
    state.type = draftType;
    const minVal = parseFloat(minPriceInput.value);
    const maxVal = parseFloat(maxPriceInput.value);
    state.minPrice = isNaN(minVal) ? null : minVal;
    state.maxPrice = isNaN(maxVal) ? null : maxVal;

    chipLocationLabel.textContent = state.location || "Location";
    chipPriceLabel.textContent = (state.minPrice || state.maxPrice)
      ? (formatPrice(state.minPrice || 0) + (state.maxPrice ? "–" + formatPrice(state.maxPrice) : "+"))
      : "Price";
    chipTypeLabel.textContent = state.type || "Type";

    document.getElementById("chipLocation").classList.toggle("is-active", !!state.location);
    document.getElementById("chipPrice").classList.toggle("is-active", !!(state.minPrice || state.maxPrice));
    document.getElementById("chipType").classList.toggle("is-active", !!state.type);

    closeSheet();
    render();
  });

  document.getElementById("clearFiltersBtn").addEventListener("click", function () {
    state.search = "";
    state.location = "";
    state.type = "";
    state.minPrice = null;
    state.maxPrice = null;
    searchInput.value = "";
    chipLocationLabel.textContent = "Location";
    chipPriceLabel.textContent = "Price";
    chipTypeLabel.textContent = "Type";
    document.getElementById("chipLocation").classList.remove("is-active");
    document.getElementById("chipPrice").classList.remove("is-active");
    document.getElementById("chipType").classList.remove("is-active");
    render();
  });

  /* ---------- Initial render ---------- */
  render();
})();
