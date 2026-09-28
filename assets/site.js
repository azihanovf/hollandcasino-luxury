"use strict";

// Content and navigation remain available when JavaScript is disabled.
const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (toggle && navigation) {
  const closeMenu = (returnFocus = false) => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    if (returnFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    document.body.classList.toggle("menu-open", !expanded);
    toggle.setAttribute("aria-expanded", String(!expanded));
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu(true);
    }
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });

  window
    .matchMedia("(min-width: 701px)")
    .addEventListener("change", () => closeMenu());
}
