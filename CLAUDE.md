# martin_web — Claude Configuration

## Tech Stack

- **Framework:** Astro 6
- **Paketmanager:** pnpm
- **Linter/Formatter:** Biome
- **Search:** Pagefind (postbuild)
- **Deployment:** Nginx static auf phoenyx02 (`martin-ehrentraut-de/`)

## Projektstruktur

```
src/
├── assets/       ← Bilder (nicht im Git — sync via rsync)
├── components/   ← Astro-Komponenten
├── content/      ← Blog-Posts, Seiten (Markdown/MDX)
├── layouts/      ← Seitenlayouts
├── pages/        ← Routen
├── scripts/      ← Client-seitige JS-Skripte
└── styles/       ← CSS
public/           ← Statische Assets
```

## Befehle

```bash
pnpm dev          # Entwicklungsserver
pnpm build        # Produktions-Build (inkl. Pagefind-Index)
pnpm preview      # Build-Vorschau
pnpm lint         # Biome-Check
pnpm lint:fix     # Biome auto-fix
```

## Deployment

```bash
make deploy       # build + rsync assets + git push
make sync-images  # nur Bilder nach phoenyx02 synchronisieren
```

Bilder in `src/content/assets/` sind nicht im Git — werden per rsync auf phoenyx02 übertragen.

## Regeln

- Kein direktes `npm` oder `yarn` — immer `pnpm`
- Vor Commit: `pnpm lint` muss sauber durchlaufen
- `node_modules/`, `dist/` und `src/content/assets/` niemals committen

## Superpowers

Plans: `~/workspace/obsidian/plans/`
Projektnotizen: `~/workspace/obsidian/projects/martin_web/`
