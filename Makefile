.PHONY: dev build preview sync-images deploy

# Lokale Entwicklung
dev:
	pnpm dev

build:
	pnpm build

preview: build
	pnpm preview

# Bilder auf phoenyx02 synchronisieren (nicht im Git)
sync-images:
	rsync -avz --progress \
		src/content/assets/ \
		phoenyx02:/opt/containers/martin-ehrentraut-de/assets/

# Build + Bilder sync + git push
deploy: build sync-images
	git push
