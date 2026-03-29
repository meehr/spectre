# martin_web Personalisierung — Implementierungsplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Demo-Inhalte des Spectre-Themes durch echte Inhalte von Martin Ehrentraut ersetzen und die Primärfarbe anpassen, sodass die Seite lokal produktionsreif evaluiert werden kann.

**Architecture:** Alle Änderungen betreffen ausschließlich `src/content/` (JSON-Daten + MDX-Seiten) und `src/styles/globals.css` (CSS-Variablen). Kein TypeScript, keine Komponenten, kein Framework-Code wird angefasst. Jeder Task ist eigenständig commitfähig und sofort im Dev-Server sichtbar.

**Tech Stack:** Astro 6, TypeScript, pnpm, Frontmatter CMS (VSCode), Biome Linter

---

## Dateien-Übersicht

| Datei | Aktion | Zweck |
|---|---|---|
| `src/content/info.json` | Modify | Homepage-Kurzinfos (Alter → Standort, Skills) |
| `src/content/socials.json` | Modify | Social Links (GitHub, LinkedIn etc.) |
| `src/content/work.json` | Modify | Berufserfahrung |
| `src/content/other/about.mdx` | Modify | About-Text auf der Homepage |
| `src/content/tags.json` | Modify | Blog-Tags hinzufügen |
| `src/content/posts/getting-started.mdx` | Delete | Demo-Post entfernen |
| `src/content/projects/spectre.mdx` | Delete | Demo-Projekt entfernen |
| `src/styles/globals.css` | Modify | Primärfarbe anpassen |
| `astro.config.ts` | Already done | Site-URL + Name bereits gesetzt |

---

## Task 1: Kurzinfos personalisieren (info.json)

**Files:**
- Modify: `src/content/info.json`

Diese Datei befüllt die Icon-Liste auf der Homepage (z.B. Standort, Haupttechnologien).
Verfügbare Icons: [Lucide](https://lucide.dev/icons/) und [Simple Icons](https://simpleicons.org/).

- [ ] **Schritt 1: Dev-Server starten**

```bash
nvm use
pnpm dev
```
Browser öffnen: `http://localhost:4321/` — Kurzinfos sind auf der Homepage sichtbar.

- [ ] **Schritt 2: info.json ersetzen**

`src/content/info.json` mit eigenen Daten befüllen. Beispielstruktur:

```json
[
  {
    "id": 1,
    "icon": {
      "type": "lucide",
      "name": "map-pin"
    },
    "text": "Deutschland"
  },
  {
    "id": 2,
    "icon": {
      "type": "simple-icons",
      "name": "linux"
    },
    "text": "Linux / Homelab"
  },
  {
    "id": 3,
    "icon": {
      "type": "simple-icons",
      "name": "docker"
    },
    "text": "Docker / DevOps"
  }
]
```

Icon-Name-Suche: Lucide → `lucide.dev/icons`, Simple Icons → `simpleicons.org` (Name in Kleinbuchstaben, Leerzeichen durch `-`).

- [ ] **Schritt 3: Im Browser prüfen**

Homepage neu laden → Kurzinfos zeigen die eigenen Einträge.

- [ ] **Schritt 4: Committen**

```bash
git add src/content/info.json
git commit -m "Update info.json with personal quick info"
```

---

## Task 2: Social Links setzen (socials.json)

**Files:**
- Modify: `src/content/socials.json`

- [ ] **Schritt 1: socials.json ersetzen**

```json
[
  {
    "id": 1,
    "icon": {
      "type": "simple-icons",
      "name": "github"
    },
    "text": "GitHub",
    "link": "https://github.com/meehr"
  },
  {
    "id": 2,
    "icon": {
      "type": "simple-icons",
      "name": "linkedin"
    },
    "text": "LinkedIn",
    "link": "https://linkedin.com/in/DEIN-PROFIL"
  }
]
```

Weitere Icons: `gitea` (Simple Icons), `mastodon`, `rss` (Lucide) etc.

- [ ] **Schritt 2: Im Browser prüfen**

Homepage → Social-Links-Bereich zeigt die eigenen Links und Icons.

- [ ] **Schritt 3: Committen**

```bash
git add src/content/socials.json
git commit -m "Update socials.json with personal links"
```

---

## Task 3: Berufserfahrung eintragen (work.json)

**Files:**
- Modify: `src/content/work.json`

- [ ] **Schritt 1: work.json befüllen**

```json
[
  {
    "id": 1,
    "duration": "2020 - heute",
    "company": "DEIN UNTERNEHMEN",
    "title": "DEINE ROLLE",
    "description": "Kurze Beschreibung der Tätigkeiten und Verantwortlichkeiten."
  }
]
```

Mehrere Einträge möglich — chronologisch absteigend, aktuellster zuerst.

- [ ] **Schritt 2: Im Browser prüfen**

Homepage → Work/Experience-Bereich zeigt die eigenen Einträge.

- [ ] **Schritt 3: Committen**

```bash
git add src/content/work.json
git commit -m "Update work.json with personal work experience"
```

---

## Task 4: About-Text schreiben (about.mdx)

**Files:**
- Modify: `src/content/other/about.mdx`

- [ ] **Schritt 1: about.mdx ersetzen**

Vollständigen Inhalt ersetzen — Markdown und MDX-Komponenten sind erlaubt:

```mdx
Ich bin Martin Ehrentraut — Entwickler, Homelab-Enthusiast und Infrastruktur-Tüftler aus Deutschland.

Auf dieser Seite dokumentiere ich technische Projekte: von selbst gehostetem Infrastructure-as-Code über Docker-Deployments bis hin zu Automatisierungslösungen.

Die Artikel richten sich an technisch versierte Leser — keine Einführungskurse, sondern konkrete Umsetzungen mit ehrlichem Einblick in Probleme und Lösungen.
```

- [ ] **Schritt 2: Im Browser prüfen**

Homepage → About-Bereich zeigt den eigenen Text.

- [ ] **Schritt 3: Committen**

```bash
git add src/content/other/about.mdx
git commit -m "Update about.mdx with personal description"
```

---

## Task 5: Tags definieren (tags.json)

**Files:**
- Modify: `src/content/tags.json`

Tags müssen hier definiert sein, bevor sie in Posts referenziert werden können.

- [ ] **Schritt 1: tags.json befüllen**

```json
[
  { "id": "homelab" },
  { "id": "docker" },
  { "id": "linux" },
  { "id": "astro" },
  { "id": "security" },
  { "id": "networking" },
  { "id": "automation" },
  { "id": "selfhosted" }
]
```

Weitere Tags können jederzeit ergänzt werden.

- [ ] **Schritt 2: Committen**

```bash
git add src/content/tags.json
git commit -m "Define initial blog tags"
```

---

## Task 6: Demo-Inhalte entfernen

**Files:**
- Delete: `src/content/posts/getting-started.mdx`
- Delete: `src/content/projects/spectre.mdx`

- [ ] **Schritt 1: Demo-Post löschen**

```bash
rm src/content/posts/getting-started.mdx
```

- [ ] **Schritt 2: Demo-Projekt löschen**

```bash
rm src/content/projects/spectre.mdx
```

- [ ] **Schritt 3: Build-Check — sicherstellen dass keine Fehler entstehen**

```bash
pnpm build 2>&1 | tail -20
```

Erwartete Ausgabe: Build abgeschlossen ohne Fehler. Leere Collections sind erlaubt.

- [ ] **Schritt 4: Im Browser prüfen**

`http://localhost:4321/blog` → leer (kein Fehler)
`http://localhost:4321/projects` → leer (kein Fehler)

- [ ] **Schritt 5: Committen**

```bash
git add -A
git commit -m "Remove demo content (getting-started post and spectre project)"
```

---

## Task 7: Ersten echten Blog-Post anlegen

**Files:**
- Create: `src/content/posts/SLUG.mdx` (Dateiname = URL-Slug)
- Require: mindestens ein Bild in `src/content/assets/` (lokal, nicht im Git)

Ein Platzhalter-Post zum Testen des Workflows — kann später überarbeitet werden.

- [ ] **Schritt 1: Bild in assets legen**

Ein Beitragsbild (JPG/PNG/WebP) kopieren nach:
```
src/content/assets/BILDNAME.jpg
```

Mindestgröße empfohlen: 1200×630px (OpenGraph). Bilder werden von Astro automatisch optimiert.

- [ ] **Schritt 2: Post-Datei anlegen**

Datei `src/content/posts/erster-post.mdx` erstellen:

```mdx
---
title: "Erster Post — Titel hier"
description: "Kurze Beschreibung des Artikels für SEO und Vorschau."
image: "../assets/BILDNAME.jpg"
createdAt: 2026-03-29
draft: true
tags:
  - homelab
---

Inhalt des ersten Posts. Markdown und MDX-Komponenten sind erlaubt.

## Abschnitt

Text hier.
```

`draft: true` hält den Post unsichtbar in der öffentlichen Listenansicht.

- [ ] **Schritt 3: Im Browser prüfen**

`http://localhost:4321/blog` → Post erscheint (Drafts sind im Dev-Server sichtbar)
Post öffnen → Layout, Bild, Tags korrekt

- [ ] **Schritt 4: Committen (nur MDX, nicht das Bild)**

```bash
git add src/content/posts/erster-post.mdx
git commit -m "Add first draft blog post"
```

---

## Task 8: Erstes Projekt anlegen

**Files:**
- Create: `src/content/projects/SLUG.mdx`
- Require: Bild in `src/content/assets/`

- [ ] **Schritt 1: Projekt-Datei anlegen**

Datei `src/content/projects/martin-web.mdx` erstellen:

```mdx
---
title: "martin-web"
description: "Portfolio & Blog auf Basis von Astro und dem Spectre-Theme."
date: 2026-03-29
image: "../assets/BILDNAME.jpg"
link: "https://martin-ehrentraut.de"
info:
  - text: "Astro 6"
    icon:
      type: "simple-icons"
      name: "astro"
  - text: "GitHub"
    icon:
      type: "simple-icons"
      name: "github"
    link: "https://github.com/meehr/spectre"
---

Beschreibung des Projekts.
```

- [ ] **Schritt 2: Im Browser prüfen**

`http://localhost:4321/projects` → Projekt erscheint mit Bild und Info-Leiste

- [ ] **Schritt 3: Committen**

```bash
git add src/content/projects/martin-web.mdx
git commit -m "Add martin-web as first project entry"
```

---

## Task 9: Primärfarbe anpassen (CSS-Variablen)

**Files:**
- Modify: `src/styles/globals.css`

Das aktuelle Lila (`#8c5cf5`) kann durch jede andere Farbe ersetzt werden. Die Farbe wird für Links, Hover-Effekte, Glows und Akzente verwendet.

- [ ] **Schritt 1: Wunschfarbe bestimmen**

Werkzeug zum Konvertieren: `oklch.com` oder `convertacolor.com`
Du brauchst: einen Hex-Wert (`#RRGGBB`) und dessen RGB-Werte (`R, G, B`).

Beispiele für gut lesbare dunkle Akzentfarben:
- Cyan: `#06b6d4` → RGB: `6, 182, 212`
- Grün: `#22c55e` → RGB: `34, 197, 94`
- Orange: `#f97316` → RGB: `249, 115, 22`
- Beibehaltung Lila: `#8c5cf5` → RGB: `140, 92, 245`

- [ ] **Schritt 2: CSS-Variablen in globals.css aktualisieren**

In `src/styles/globals.css` die ersten 4 Zeilen ersetzen:

```css
:root {
  --primary: #DEINE-FARBE;
  /* Needed for some hover effects. This is just the R, G and B values of the hex color above */
  --primary-rgb: R, G, B;
  /* Used for links */
  --primary-light: #HELLERE-VARIANTE;
  --primary-lightest: #HELLSTE-VARIANTE;
}
```

Hellere Varianten: Sättigung und Helligkeit leicht erhöhen. Bei Cyan z.B.:
```css
:root {
  --primary: #06b6d4;
  --primary-rgb: 6, 182, 212;
  --primary-light: #22d3ee;
  --primary-lightest: #67e8f9;
}
```

- [ ] **Schritt 3: Kontrast prüfen**

Browser-DevTools öffnen → Accessibility-Tab → Links auf Kontrastverhältnis prüfen.
Mindest-Anforderung: **4.5:1** für normalen Text, **3:1** für große Texte (WCAG AA).

- [ ] **Schritt 4: Im Browser prüfen**

Dev-Server neu laden → Akzentfarbe ist überall aktualisiert (Links, Hover, Glows, aktive Navigation).

- [ ] **Schritt 5: Committen**

```bash
git add src/styles/globals.css
git commit -m "Update primary color to personal brand color"
```

---

## Task 10: Finaler Build-Check

- [ ] **Schritt 1: Vollständigen Build ausführen**

```bash
pnpm build 2>&1
```

Erwartete Ausgabe: Kein Fehler, alle Seiten gerendert, Pagefind-Index erstellt.

- [ ] **Schritt 2: Preview starten und prüfen**

```bash
pnpm preview
```

Browser: `http://localhost:4321/` — Seite wie im Build (kein Hot-Reload).
Prüfen: Homepage, Blog-Liste, Post, Projekte, Navigation, Suche.

- [ ] **Schritt 3: Linter ausführen**

```bash
pnpm lint
```

Bei Fehlern: `pnpm lint:fix` und Ergebnis committen.

- [ ] **Schritt 4: Abschluss-Commit falls nötig**

```bash
git add -A
git commit -m "Fix lint issues after initial personalization"
```

---

## Nächste Schritte (nicht Teil dieses Plans)

- Giscus einrichten (GitHub Discussions Repo anlegen, `.env` befüllen)
- Docker-Setup für phoenyx02
- Gitea-Remote für Deployment-Workflow
- Bilder-Backup-Workflow via Nextcloud
