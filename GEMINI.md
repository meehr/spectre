# Projekt-Leitfaden: martin_web (Astro Website)

Persönliche Website `martin-ehrentraut.de`.

## 🚀 Tech-Stack
- **Framework:** Astro 6
- **Paketmanager:** `pnpm`
- **Linter/Formatter:** Biome
- **Search:** Pagefind
- **Hosting:** Nginx static auf Phoenyx02

## 📁 Projektstruktur
- `src/assets/`: Bilder (nicht im Git! Sync via `rsync`)
- `src/content/`: Blog-Posts & Seiten (Markdown/MDX)
- `src/components/`: Astro-Komponenten

## 🛠️ Befehle

| Befehl | Aktion |
|--------|--------|
| `pnpm dev` | Lokaler Dev-Server |
| `pnpm build` | Produktions-Build inkl. Suche |
| `pnpm lint` | Biome Check |
| `make deploy` | Build + Sync Assets + Git Push |
| `make sync-images` | Nur Bilder zu Phoenyx02 übertragen |

## ❗ Wichtige Regeln
- **Kein npm/yarn:** Immer `pnpm` nutzen.
- **Linting:** Vor jedem Commit muss `pnpm lint` sauber sein.
- **Assets:** `src/content/assets/` niemals committen (wird via Makefile synchronisiert).
- **Obsidian:** Pläne unter `~/workspace/obsidian/plans/martin_web/`.
