# Hamys Reinigung – Website

Moderne, responsive One-Page-Website für das Reinigungsunternehmen **Hamys Reinigung**.

## Leistungen auf der Seite

- **Gebäudereinigung** – Unterhalts- & Grundreinigung, Fenster, Treppenhaus
- **Autoreinigung** – Innen- & Außenreinigung, Polster-/Lederpflege, Aufbereitung
- **Hochdruckreinigung** – Einfahrten, Terrassen, Fassaden, Industrieflächen

## Aufbau

```
.
├── index.html        # Seitenstruktur (Hero, Leistungen, Ablauf, Über uns, Kontakt)
├── css/
│   └── styles.css    # Styling, responsives Layout, Animationen
└── js/
    └── main.js       # Navigation, Scroll-Effekte, Formular-Validierung
```

## Lokal ansehen

Da es sich um eine statische Seite handelt, reicht ein einfacher Webserver:

```bash
# mit Python
python3 -m http.server 8000
# danach im Browser öffnen: http://localhost:8000
```

Alternativ `index.html` direkt im Browser öffnen.

## Anpassen

- **Kontaktdaten:** Telefon, E-Mail und Adresse in `index.html` im Abschnitt `#kontakt` aktualisieren.
- **Texte/Farben:** Inhalte in `index.html`, Farben über die CSS-Variablen am Anfang von `css/styles.css` (`--blue`, `--green`, …).
- **Kontaktformular:** Aktuell als Demo umgesetzt (clientseitige Bestätigung). Für echten E-Mail-Versand ein Backend oder einen Dienst wie [Formspree](https://formspree.io/) anbinden – im `submit`-Handler in `js/main.js`.

## Technik

Reines HTML, CSS und Vanilla JavaScript – kein Build-Schritt, keine Abhängigkeiten. Kann direkt über GitHub Pages, Netlify, Vercel oder jeden Webhoster veröffentlicht werden.
