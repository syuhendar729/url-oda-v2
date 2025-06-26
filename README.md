# Short Universal Redirector

Aplikasi Node.js sederhana menggunakan Express untuk membuat short link/redirect ke berbagai URL (YouTube, GitHub, dll) melalui endpoint custom.  
Cocok untuk kebutuhan personal, portofolio, atau berbagi link dengan path singkat.

## Cara Kerja

- Setiap path (misal: `/video1`, `/gh1`, dll) akan otomatis mengarah (redirect) ke URL yang sudah ditentukan.
- Link redirect bisa berupa YouTube, GitHub, atau situs lainnya.

## Cara Pakai

### 1. Clone dan Install Dependensi

```bash
git clone https://github.com/username/namarepo.git
cd namarepo
npm install
```

### 2. Edit Daftar Path & URL

Buka file `index.js`, ubah variabel `pathurl` sesuai kebutuhan.  
Contoh:

```javascript
const pathurl = [
  { path: "/video1", url: "https://youtu.be/VcwN0nms30I" },
  { path: "/gh1", url: "https://github.com/syuhendar729/url-oda-v2" },
  // Tambahkan path lainnya di sini
];
```
- **`path`**: endpoint yang ingin kamu buat (harus diawali dengan `/`)
- **`url`**: link tujuan untuk redirect

### 3. Jalankan Server

```bash
node index.js
```

Server akan berjalan di `http://localhost:3000` (atau port lain sesuai pengaturan).

### 4. Akses Short Link

Buka browser dan akses sesuai path yang kamu buat, misal:
- [http://localhost:3000/video1](http://localhost:3000/video1) akan redirect ke YouTube
- [http://localhost:3000/gh1](http://localhost:3000/gh1) akan redirect ke GitHub

## Tips

- Tambahkan/ubah path sesuai kebutuhan, tidak ada batasan jumlah.
- Bisa di-deploy di layanan seperti Vercel, Render, Railway, Cyclic, dll.

## Catatan

- Tidak ada database, semua setting ada di file `index.js`.
- Tidak ada fitur logging, hanya redirect sederhana.

---

**Silakan modifikasi dan gunakan sesuai kebutuhan!**
