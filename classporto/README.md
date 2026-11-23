# Classporto — XII RPL U Angkatan 18

Website buku tahunan digital (*digital yearbook*) dan portofolio kenangan kelas **XII RPL U Angkatan 18 — SMKN 2 Kota Bekasi (2021–2024)** yang dibangun dengan Nuxt 2, Vue 2, Vuex, Tailwind CSS, dan DaisyUI.

Dokumentasi lengkap spesifikasi produk dan arsitektur tersedia di [PRD.md](./PRD.md).

## Struktur Proyek

```text
├── assets/
│   ├── css/main.css              # Global base styles & shared utilities
│   └── img/                      # Aset gambar hero, yearbook 3D, stiker & torn-paper
├── components/
│   ├── common/                   # Komponen reusable (BaseIcon, PolaroidCard, StrokeHeading)
│   ├── gallery/                  # Komponen galeri Spotify-style (Header, Player, Masonry, Lightbox)
│   ├── home/                     # Section halaman utama (Hero, Yearbook 3D, Memories, Closing)
│   └── layout/                   # Komponen layout global (AppNavbar, SiteFooter)
├── data/
│   ├── siteMeta.js               # Metadata SEO, navigasi & tautan sosial terpusat
│   └── homeContent.js            # Konten & daftar gambar terpusat halaman utama
├── layouts/
│   └── default.vue               # Layout utama Nuxt dengan AppNavbar
├── pages/
│   ├── index.vue                 # Halaman utama (Home)
│   └── galery/
│       ├── index.vue             # Redirect otomatis ke /galery/1
│       └── _ide.vue              # Halaman galeri interaktif per album
├── static/
│   └── datajson/                 # Data JSON & koleksi foto 4 album (66 foto)
└── store/
    └── mystore.js                # Vuex store SSR-safe & cache data galeri
```

## Menjalankan Proyek

> **Catatan Node.js**: Proyek ini menggunakan Nuxt 2 (Webpack 4). Disarankan menjalankan dengan **Node.js 16** atau **Node.js 18** dengan `NODE_OPTIONS=--openssl-legacy-provider`.

```bash
# Install dependencies
npm install

# Jalankan server development (http://localhost:8989)
npm run dev

# Build produksi & jalankan server
npm run build
npm run start

# Generate static site
npm run generate
```
