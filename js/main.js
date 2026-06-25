/* ============================================================
   Hamys Reinigung – Interaktivität
   ============================================================ */
(function () {
  "use strict";

  /* ---- Aktuelles Jahr im Footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile Navigation ---- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  function closeNav() {
    if (!nav || !navToggle) return;
    nav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Menü öffnen");
  }

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
    });

    // Menü schließen, wenn ein Link geklickt wird
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    // Schließen bei Klick außerhalb
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("open") &&
          !nav.contains(e.target) &&
          !navToggle.contains(e.target)) {
        closeNav();
      }
    });
  }

  /* ---- Schatten am Header beim Scrollen ---- */
  var header = document.getElementById("header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal-Animationen beim Scrollen ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback: alles sofort anzeigen
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Kontaktformular (clientseitige Validierung + Demo-Bestätigung) ---- */
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!name || !emailOk || !message) {
        showNote("Bitte füllen Sie Name, eine gültige E-Mail und Ihre Nachricht aus.", "err");
        return;
      }

      // Hinweis: Dies ist eine Demo. Zum echten Versand bitte ein Backend
      // oder einen Formular-Dienst (z. B. Formspree) anbinden.
      showNote("Vielen Dank, " + name + "! Ihre Anfrage wurde erfasst – wir melden uns in Kürze.", "ok");
      form.reset();
    });
  }

  function showNote(text, type) {
    if (!note) return;
    note.textContent = text;
    note.className = "form-note " + (type || "");
  }
})();
