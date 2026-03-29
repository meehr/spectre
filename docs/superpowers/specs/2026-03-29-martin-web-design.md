# Design Spec: martin_web — Astro Portfolio & Blog

**Datum:** 2026-03-29
**Status:** Draft

---

## Überblick

Lokale Entwicklungsumgebung für eine technische Portfolio-/Blog-Seite auf Basis des Astro-Themes **Spectre** (Fork: `meehr/spectre`). Zielgruppe: technisch versierte Leser. Inhalte: Artikel zu umgesetzten Projekten. Deployment-Ziel (später): Docker auf phoenyx02.

---

## Tech Stack

| Komponente | Wahl | Begründung |
|---|---|---|
| Framework | Astro 6.0.0 | Static-first, Content Collections, starke DX |
| Theme | Spectre (Fork) | Terminal-inspiriert, dunkel, Lighthouse 100, a11y-ready |
| Sprache | TypeScript | Bereits im Theme |
| Linter/Formatter | Biome | Bereits im Theme |
| Package Manager | pnpm 10 | Schnell, effizient, vom Theme vorgegeben |
| Node.js | 22 LTS (v22.22.2) | Aktuelle LTS-Linie, gepatchte CVEs |
| CMS (lokal) | Frontmatter CMS (VSCode) | Kein Server nötig, Markdown-nativ |
| Suche | Pagefind | Build-time, kein Server |
| Code-Highlighting | Astro Expressive Code + Shiki | Im Theme integriert |
| Kommentare | Giscus | Deaktiviert (lokal), für später konfigurierbar |

---

## Projektstruktur

```
martin_web/
├── .nvmrc                    # Node 22
├── frontmatter.json          # Frontmatter CMS Konfiguration
├── astro.config.ts           # Angepasst: Site-URL, Name, kein Giscus
├── src/
│   ├── content/
│   │   ├── posts/            # Blog-Artikel (.mdx)
│   │   ├── projects/         # Portfolio-Projekte (.mdx)
│   │   ├── other/            # About-Seite etc. (.mdx)
│   │   ├── assets/           # Bilder (nicht im Git, Nextcloud-Backup)
│   │   ├── info.json         # Kurzinfos (Icons + Text)
│   │   ├── socials.json      # Social Links
│   │   ├── tags.json         # Tag-Definitionen
│   │   └── work.json         # Berufserfahrung
│   └── content.config.ts     # Astro Content Collection Schemas
├── public/                   # Statische Assets
└── package/                  # Spectre Integration (vom Theme)
```

---

## Content Collections & Frontmatter-Felder

### Posts (`src/content/posts/*.mdx`)
```yaml
title: string (required)
description: string (required)
createdAt: date (required)
updatedAt: date (optional)
image: image() (required)
tags: reference("tags")[] (required)
draft: boolean (default: true)
```

### Projects (`src/content/projects/*.mdx`)
```yaml
title: string (required)
description: string (required)
date: date (required)
image: image() (required)
link: url (optional)
info:
  - text: string
    icon: { type: lucide|simple-icons, name: string }
    link: url (optional)
```

### Daten-Collections (JSON)
- `tags.json` — Tag-IDs, in Posts referenziert
- `info.json` — Kurzinfos für die Homepage (Icon + Text)
- `socials.json` — Social Links (Icon + Text + URL)
- `work.json` — Berufserfahrung (Titel, Firma, Zeitraum, Beschreibung)

---

## Frontmatter CMS Setup

- Konfigurationsdatei: `frontmatter.json` im Projektstamm
- Automatisch erkannt beim Öffnen des Ordners in VSCode mit installierter Extension (`eliostruyf.vscode-front-matter`)
- Content-Typen: `post`, `project`, `other`
- Preview-URL: `http://localhost:4321`
- Telemetrie deaktiviert

---

## .gitignore Strategie

- Bilder in `src/content/assets/` werden **nicht** ins Git committet
- Sicherung via Nextcloud geplant
- `.frontmatter/` (CMS-Cache) ignoriert
- `.vscode/` ignoriert (persönliche Editor-Settings)

---

## Barrierefreiheit

Spectre erfüllt bereits:
- Semantisches HTML (Astro-Komponenten)
- Vollständig tastaturnavigierbar
- Lighthouse Accessibility 100
- Responsive für alle Bildschirmgrößen

Beim Anpassen beachten:
- `alt`-Texte für alle Bilder setzen (in MDX-Frontmatter)
- Kontrastverhältnis bei Farbänderungen prüfen (min. 4.5:1 für Text)
- ARIA-Attribute nicht überschreiben, die das Theme setzt

---

## Lokaler Workflow

```bash
# Node-Version aktivieren (einmalig pro Terminal)
nvm use

# Dev-Server starten
pnpm dev        # → http://localhost:4321/

# Build testen
pnpm build && pnpm preview

# Linter
pnpm lint
pnpm lint:fix
```

---

## Offene Punkte / Spätere Schritte

- [ ] Demo-Inhalte durch echte Inhalte ersetzen (info.json, socials.json, work.json, about.mdx)
- [ ] Farbanpassungen am Spectre-Theme (CSS-Variablen in `src/styles/`)
- [ ] Giscus konfigurieren (GitHub Discussions Repo einrichten)
- [ ] Docker-Setup für phoenyx02 (separater Plan)
- [ ] Gitea-Remote einrichten für Deployment-Workflow
- [ ] Bilder-Workflow: lokale Bearbeitung → `src/content/assets/` → Nextcloud-Backup
