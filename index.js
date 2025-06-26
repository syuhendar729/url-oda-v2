const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Daftar path dan url untuk redirect universal
const pathurl = [
  { path: "/video1", url: "https://youtu.be/VcwN0nms30I" },
  { path: "/gh1", url: "https://github.com/syuhendar729/yt-oda" },
  { path: "/gh2", url: "https://github.com/syuhendar729/url-oda" },
  { path: "/video2", url: "https://youtu.be/kNPEGMhlRUg" },
  // tambahkan path lainnya di sini
];

// Root endpoint: tampilkan info tentang aplikasi
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Shortener & Redirect URL</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f7f7f7; color: #222; max-width: 600px; margin: 40px auto; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px #ddd; }
          h1 { color: #2d6cdf; }
          ul { background: #fff; padding: 16px 24px; border-radius: 8px; }
          a { color: #2d6cdf; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>Shortener & Redirect URL</h1>
        <p>
          Website ini dibuat untuk memudahkan Anda membuat short link (URL pendek) atau redirect ke berbagai link tujuan seperti YouTube, GitHub, dan lainnya. 
          Cukup gunakan path yang tersedia untuk langsung diarahkan ke URL tujuan.
        </p>
        <h2>Contoh Short Link yang Tersedia:</h2>
        <ul>
          ${pathurl.map(item => `<li><a href="${item.path}">${item.path}</a> &rarr; <span>${item.url}</span></li>`).join("")}
        </ul>
        <p>
          <b>Cara pakai:</b> akses path (misal <code>/video1</code>) pada domain ini untuk redirect otomatis ke link tujuan.
        </p>
        <hr />
        <small>
          Dibuat oleh <a href="https://github.com/syuhendar729" target="_blank">syuhendar729</a>
        </small>
      </body>
    </html>
  `);
});

// Buat endpoint redirect untuk setiap path
pathurl.forEach(({ path, url }) => {
  app.get(path, (req, res) => {
    res.redirect(url);
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
