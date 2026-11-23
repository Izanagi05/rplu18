# Product Requirements Document (PRD) — Classporto (XII RPL U Angkatan 18)

## 1. Ringkasan Produk (Product Overview)

| Atribut | Detail |
| --- | --- |
| **Nama Produk** | Classporto — XII RPL U Angkatan 18 |
| **Kategori** | Digital Yearbook / Class Portfolio Website |
| **Institusi** | SMKN 2 Kota Bekasi — Jurusan Rekayasa Perangkat Lunak (XII RPL U / 12 RPL U / RPL Unggulan / RPL Industri) |
| **Periode Angkatan** | Angkatan 18 (2021 – 2024) |
| **Pembuat** | Izanagi Faris Aslam ([izanagifaris.my.id](https://www.izanagifaris.my.id/) • `@zaa.frsslm` • `@Izanagi05`) |
| **Tech Stack** | Nuxt.js 2 (`2.15.8`), Vue 2 (`2.7.10`), Vuex, Tailwind CSS 3 (`3.4.1`), DaisyUI 4 (`4.7.3`), `@nuxtjs/axios`, Vercel |
| **URL Produksi** | `https://rplu18.vercel.app/` |

### 1.1 Latar Belakang & Visi
**Classporto** adalah situs web buku tahunan digital (*digital yearbook*) dan portofolio kenangan kelas **XII RPL U Angkatan 18** (SMKN 2 Kota Bekasi). Aplikasi ini dirancang dengan estetika editorial/scrapbook gelap (`#1E1E1E`) berpadu dengan galeri album interaktif bergaya Spotify *Now Playing* untuk mengabadikan perjalanan 3 tahun sekolah (2021–2024) dalam format yang mudah diakses dan dibagikan.

### 1.2 Tujuan Produk
1. **Menyimpan & Menampilkan Kenangan Kelas**: Menyajikan dokumentasi foto kelas dalam pengalaman visual yang estetik, nostalgia, dan interaktif (efek kartu 3D, kolase foto, Polaroid, dan galeri album).
2. **Pengalaman Multi-Perangkat (Mobile-First ke Desktop)**: Tetap terasa natural dan nyaman di layar ponsel (*mobile-first*), sekaligus tampil proporsional, seimbang, dan modern di tablet maupun desktop lebar.
3. **Arsitektur Kode Modular & Mudah Dirawat**: Memisahkan data, komponen UI reusable, layout, dan state management agar bebas duplikasi, mudah diperbarui (misalnya menambah album/foto baru), dan minim bug.

---

## 2. Target Pengguna & Persona

1. **Siswa & Alumni XII RPL U (Pengguna Utama)**
   - **Kebutuhan**: Membuka kembali kenangan masa sekolah (LDKPD, PJBL, Teacher's Day, Graduation), melihat foto resolusi penuh, dan membagikan tautan album ke media sosial.
   - **Perangkat**: Dominan smartphone, namun juga membuka di laptop/PC saat bernostalgia atau presentasi.
2. **Guru, Wali Kelas & Keluarga**
   - **Kebutuhan**: Navigasi yang jelas dan tidak membingungkan untuk melihat foto kelas dan pesan perpisahan.
   - **Perangkat**: Campuran mobile dan desktop.
3. **Pengunjung Umum / Rekruter Portofolio Pembuat**
   - **Kebutuhan**: Melihat kualitas desain visual, animasi CSS/interaksi, struktur proyek Nuxt, serta tautan kontak pembuat (GitHub, LinkedIn, Instagram).
   - **Perangkat**: Dominan desktop/laptop.

---

## 3. Arsitektur Informasi & Alur Pengguna (User Flow)

### 3.1 Peta Situs (Sitemap)
- `/` — **Halaman Utama (Landing Page)**
  - Navigasi Global (`AppNavbar`)
  - Section 1: Hero Banner (`HomeHero`)
  - Section 2: Kolase Yearbook 3D (`YearbookShowcase`)
  - Section 3: Pesan "SEE YOU", Grid Foto Interaktif, Tipografi Outline & Photo Marquee (`MemoriesShowcase`)
  - Section 4: Cerita Penutup `#THE END`, Editorial Polaroid & Footer (`ClosingStorySection` + `SiteFooter`)
- `/galery` — Redirect otomatis ke `/galery/1` (mencegah 404 saat diakses langsung).
- `/galery/:ide` — **Halaman Galeri Album Bergaya Spotify**
  - Album `1`: **LDKPD CORE** — *"Awal dari sepatu hitam yang berpasangan"* (12 foto)
  - Album `2`: **PJBL Core** — *"Melangkah bersama dalam setiap kesempatan"* (15 foto)
  - Album `3`: **Teacher's Day** — *"Berkat guru tulus dan sabar tanpa batasan"* (14 foto)
  - Album `4`: **Graduation Core** — *"Dan ditutup dengan jas hitam demi masa depan"* (25 foto)
  - **Total Dokumentasi**: 4 Album / 66 Foto.

### 3.2 User Flow Utama
1. Pengguna membuka `/` → disambut Hero Banner penuh layar (`WELCOME / XII RPL U`).
2. Pengguna dapat langsung menuju Galeri via **Navbar**, tombol CTA di Hero, atau menggulir ke bawah menyusuri cerita kelas.
3. Di section **Yearbook 3D**, pengguna mengarahkan kursor (desktop) atau mengetuk (mobile) pada 3 kartu foto berbingkai kertas untuk melihat efek perspektif 3D & karakter *pop-out*, lalu menekan CTA **Kaset Retro / Open Class Gallery** untuk masuk ke `/galery/1`.
4. Di section **Memories**, pengguna berinteraksi dengan grid foto melingkar 2×2 (*hover-reveal*), membuka/menutup kolase foto 3×3 (*expandable grid*), dan melihat marquee foto berjalan.
5. Di halaman **Galeri (`/galery/:ide`)**, pengguna berpindah album menggunakan tombol *Previous / Next / Shuffle* atau daftar album, mengaktifkan mode *Play* untuk slideshow otomatis, menyalin tautan via *Share*, serta mengklik foto mana pun di panel masonry untuk membukanya dalam **Photo Lightbox** layar penuh.

---

## 4. Spesifikasi Fitur (Functional Requirements)

### F1. Layout & Navigasi Global (`layouts/default.vue`, `AppNavbar.vue`)
- Menggunakan konvensi folder `layouts/default.vue` yang valid di Nuxt 2 (memperbaiki bug lama folder singular `layout/`).
- Navbar lengket (*sticky/fixed*) dengan efek *glassmorphism* gelap yang muncul halus saat scroll.
- **Mobile**: Logo `XII RPL U 18`, tombol pintas `Gallery`, dan menu hamburger responsif.
- **Desktop**: Tautan navigasi langsung ke setiap section (`Home`, `Yearbook`, `Memories`, `The End`) serta tombol CTA `Our Gallery`.

### F2. Hero Section (`HomeHero.vue`)
- Foto kelas (`bgawal.jpg`) dengan overlay gradien radial emas-amber dan transisi bawah menyatu ke warna latar gelap `#1E1E1E`.
- Tipografi responsif (proporsional dari mobile hingga layar desktop lebar) beserta subtitle angkatan, tombol CTA menuju Galeri, dan indikator scroll.

### F3. Kolase Yearbook 3D Interaktif (`YearbookShowcase.vue`, `YearbookCard3D.vue`)
- Menampilkan 3 foto utama kelas (`p1` siswa putra, `p2` siswi putri, `p3` seluruh kelas) dalam komponen modular `YearbookCard3D`.
- Efek perspektif 3D tilt + karakter *cutout* (`p1nobg`, `p2nobg`, `p3nobg`) muncul ke atas saat *hover* (desktop) maupun *tap/toggle* (mobile).
- Elemen dekoratif scrapbook (filmstrip `pjg2.png`, stiker kamera, clapperboard, film reel, pesawat kertas, kursor piksel) tertata responsif tanpa menutupi konten utama.
- Kaset retro (`iconybk/5.png`) dan panah lengkung (`iconybk/7.png`) berperan sebagai tombol aksesibel menuju `/galery/1`.

### F4. Section Perpisahan & Showcase Foto Interaktif (`MemoriesShowcase.vue`)
- **Vertical "SEE YOU" & Farewell Message**: Blok vertikal `S E E Y O U` berlatar putih kontras disertai paragraf perpisahan.
- **Interactive Photo Quad (`InteractivePhotoQuad.vue`)**: Grid foto 2×2 grayscale dengan *circular clip-path*; saat disentuh/hover, foto melebar 200% menjadi berwarna penuh.
- **Expandable Photo Grid (`ExpandablePhotoGrid.vue`)**: Kolase 3×3 yang dapat dibuka/tutup dengan tombol interaktif di dalam kontainer yang terukur (tidak lagi `position: absolute` yang menabrak teks).
- **Layered Stroke Heading (`StrokeHeading.vue`)**: Tipografi outline berlapis `"EXCELLENCE CLASS"` dengan tinggi kontainer terukur dan skala font responsif.
- **Infinite Photo Marquee (`PhotoMarquee.vue`)**: Carousel foto berjalan mulus tanpa putus dengan *edge fade mask* dan fitur *pause on hover*.

### F5. Cerita Penutup `#THE END` & Footer (`ClosingStorySection.vue`, `PolaroidCard.vue`, `SiteFooter.vue`)
- Transisi batas kertas sobek (`end3.png`, `end2.png`) yang skalabel di layar lebar.
- Header editorial (`Great Story`, tanggal `18 Maret`, kredit `Made with Nuxt` & `Made with Tailwind`).
- Tajuk utama `ANGKATAN 18 / #THE END / GOOD BYE AND SEE YOU LATER XII RPL U`.
- 3 foto bergaya Polaroid menggunakan komponen reusable `PolaroidCard`, dipadukan dengan narasi perpisahan dan tipografi vertikal `Memories / Our Memories` (menggunakan CSS `writing-mode` yang rapi tanpa overflow).
- Footer responsif menampilkan identitas kelas (`XII RPL U / RPL Unggulan / RPL Industri — SMKN 2 Kota Bekasi`), tautan navigasi, kredit pembuat (`Izanagi Faris Aslam` — `https://www.izanagifaris.my.id/`), serta tautan sosial terbaru (Portfolio, GitHub, LinkedIn, Instagram `@zaa.frsslm`).

### F6. Galeri Album Bergaya Spotify (`pages/galery/_ide.vue`, `store/mystore.js`)
- **Manajemen Data & State**:
  - Data album dimuat dari `/static/datajson/image.json` dan di-cache di Vuex (`store/mystore.js`) agar perpindahan antar album instan tanpa fetch berulang.
  - `state` menggunakan *factory function* `() => ({ ... })` sesuai standar SSR Nuxt 2.
  - Sinkronisasi dua arah antara URL parameter `:ide` (1–4) dan Vuex store, termasuk validasi/fallback jika parameter tidak valid atau saat pengguna menekan tombol Back/Forward browser.
- **Komponen Modular Galeri**:
  - `GalleryHeader.vue`: Tombol kembali ke Home, judul `"Our Gallery"`, indikator nomor album.
  - `GalleryPlayer.vue`: Cover album, judul & subjudul, tombol favorit (tersimpan di `localStorage`), bar progres `20.21 — 20.24`, tombol kontrol lengkap (**Shuffle** album acak, **Prev**, **Play/Pause** slideshow otomatis, **Next**, **Share** salin tautan + toast), serta daftar *quick-switch* seluruh album.
  - `GalleryMasonry.vue`: Kartu `"Lirik — Putih abu kala itu"` berisi grid masonry responsif (2–4 kolom) dengan `loading="lazy"`.
  - `PhotoLightbox.vue`: Modal pratinjau foto layar penuh dengan tombol Prev/Next, penghitung urutan foto, dan navigasi keyboard (`ArrowLeft`, `ArrowRight`, `Escape`).
  - `BaseIcon.vue`: Komponen ikon SVG tunggal yang menggantikan seluruh inline SVG duplikat.

---

## 5. Kebutuhan Non-Fungsional (Non-Functional Requirements)

### 5.1 Desain Responsif (Mobile-First → Tablet → Desktop)
| Breakpoint | Target Perangkat | Perilaku Layout |
| --- | --- | --- |
| `< 640px` (Default) | Smartphone | Tata letak vertikal ringkas (*mobile-first*), scrapbook 1 kolom, galeri Spotify bertumpuk (cover → kontrol → lirik/masonry 2–3 kolom). |
| `640px – 1023px` (`sm`, `md`) | Tablet | Container terpusat dengan padding lega, Yearbook mulai berjajar 3 kolom, editorial `#THE END` 2 kolom, masonry 3 kolom. |
| `≥ 1024px` (`lg`, `xl`) | Desktop & Widescreen | Container `max-w-5xl` / `max-w-6xl` / `max-w-7xl` terpusat, Hero megah, Yearbook 3 kolom simetris, Memories 2 kolom seimbang, Galeri bergaya **Spotify Desktop Split View** (panel pemutar *sticky* di kiri + dinding foto masonry 3–4 kolom di kanan). |

### 5.2 Maintainability, Aksesibilitas & SEO
- **Tanpa Duplikasi**: Data statis dikonsolidasi ke `data/siteMeta.js` dan `data/homeContent.js`; komponen UI berulang diekstrak ke `components/common/`, `components/home/`, `components/gallery/`, dan `components/layout/`.
- **Pembersihan Kode Mati**: Menghapus file boilerplate/eksperimen (`NuxtLogo.vue`, `Tutorial.vue`, `pages/tess.vue`) serta seluruh `console.log` debug.
- **Aksesibilitas**: Seluruh elemen yang dapat diklik memakai tag semantik `<button>` / `<nuxt-link>` dengan `aria-label`, kontras teks terjaga, dan navigasi keyboard pada modal Lightbox.
- **SEO & Metadata**: Meta tags lengkap (`robots`, `googlebot`, `canonical`, `theme-color`, OpenGraph, Twitter Card) dengan dukungan dinamis per halaman/album, Schema.org `@graph` JSON-LD (`WebSite`, `EducationalOrganization`, `Person` terhubung ke `https://www.izanagifaris.my.id/`, `ImageGallery`, `BreadcrumbList`), serta file statis `static/robots.txt`, `static/sitemap.xml`, `static/site.webmanifest`, dan `static/og-image.jpg`.

---

## 6. Audit Masalah Lama & Solusi Refactoring

| Area | Temuan Sebelumnya | Solusi yang Diterapkan |
| --- | --- | --- |
| **Layout** | Folder bernama `layout/` (singular), sehingga tidak dimuat oleh Nuxt maupun Tailwind. | Dipindahkan ke `layouts/default.vue` + ditambahkan `AppNavbar`. |
| **Duplikasi Kode** | 3 kartu 3D copy-paste di `book2.vue`; 3 Polaroid copy-paste di `sectionBawah.vue`; 13+ inline SVG Spotify (3x SVG share identik) di `_ide.vue`; 18 objek `{ img: "bgawal.jpg" }` berulang di `index.vue`; CSS `.stroketext` & `.end1bg/.end2bg` duplikat. | Diekstrak menjadi `YearbookCard3D`, `PolaroidCard`, `BaseIcon`, `StrokeHeading`, `data/homeContent.js`, `data/siteMeta.js`, serta utilitas CSS terpadu. |
| **Bug Store & Routing** | `store/mystore.js` memakai `state: {}` (bukan function); navigasi prev/next desync saat direct URL `/galery/3`; tidak ada watcher `$route`; fetch ulang JSON tiap klik; ada `console.log` debug tak pantas; atribut HTML rusak `cl`. | `state: () => ({})`, cache `allData`, sinkronisasi `setActiveAlbumById` dengan `$route.params.ide`, fallback index valid, hapus semua debug log, tambah `/galery/index.vue` redirect. |
| **Responsivitas Desktop** | `book2.vue` memakai koordinat `absolute` hardcoded untuk layar HP; `imgcard3` `absolute` menabrak teks; `.gallery` lebar tetap `380px`; `_ide.vue` gambar cover melar selebar layar desktop; teks `sectionBawah` melar tanpa `max-width` dan `-rotate-90` overflow. | Refactor penuh menggunakan Tailwind CSS Grid/Flexbox responsif, container `max-w-*`, CSS `writing-mode` untuk teks vertikal, dan Spotify Desktop 2-column split layout di halaman galeri. |
| **Tautan & Konten** | Tautan LinkedIn di footer mengarah ke GitHub; typo `"Excelence Class"`, `"Our Galery"`, `"Make with"`; kontrol Play/Shuffle/Share hanya hiasan tanpa aksi. | Perbaikan semua tautan sosial & typo; implementasi fungsi nyata untuk Play/Pause slideshow, Shuffle, Share copy-link, Favorite, dan Photo Lightbox. |

---

## 7. Catatan Pengembangan Lanjutan (Roadmap v2 — Opsional)

1. **Kustomisasi Foto Showcase Home**: Seluruh daftar gambar pada `InteractivePhotoQuad`, `ExpandablePhotoGrid`, `PhotoMarquee`, dan `PolaroidCard` kini terpusat di `data/homeContent.js`, sehingga sangat mudah diganti dari foto default (`bgawal.jpg`) menjadi foto-foto pilihan spesifik dari tiap album.
2. **Direktori Profil Siswa (Class Members)**: Penambahan halaman daftar anggota kelas XII RPL U (foto profil, nama, kutipan, tautan media sosial).
3. **Musik Latar Opsional**: Integrasi audio player nyata (MP3 kenangan kelas) pada pemutar galeri bergaya Spotify.
4. **Migrasi Nuxt 3 / Nuxt 4**: Di masa mendatang, struktur modular ini memudahkan migrasi dari Nuxt 2 (End-of-Life) ke Nuxt 3+ dengan Vue 3 Composition API & `@nuxt/image`.
