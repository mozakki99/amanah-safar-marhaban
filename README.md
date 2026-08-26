# Amanah Safar Marhaban

Website resmi **Amanah Safar Marhaban** (PT Amanah Tangguh Mandiri) — penyelenggara perjalanan ibadah Umrah & Haji Khusus resmi Kemenag RI.

## Teknologi

- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4**
- **Framer Motion** + **Lucide** icons
- Deploy: **Cloudflare Workers** via **OpenNext** (`.open-next/`)

## Struktur

- `src/app` — halaman: beranda (`/`), katalog `/paket-umrah`, `/paket-haji`
- `src/components` — Hero, Program Spotlight, Custom Umrah Planner, Kalkulator biaya, Testimoni, FAQ, Modal booking, tombol WhatsApp melayang, dll.
- `src/data/packagesData.ts` — data paket umrah & haji (harga, hotel, maskapai, jadwal)

## Menjalankan

```bash
npm install
npm run dev        # development — http://localhost:3000
npm run build      # production build
```

## Deploy ke Cloudflare

```bash
npm run build
npx opennextjs-cloudflare build
npx wrangler deploy
```

Atau otomatis: setiap push ke branch `main` di-deploy oleh GitHub Actions
(`.github/workflows/deploy.yml`). Secret yang dibutuhkan di repo:
`CLOUDFLARE_API_TOKEN` (token dengan permission **Workers Scripts: Edit**).

## Kontak Bisnis

- WhatsApp: 0821-3232-3030
- Email: marhabanmulia@gmail.com
- PPIU: 23022300424760012 · PIHK: 23022300424760013
