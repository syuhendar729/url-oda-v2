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

// Buat endpoint redirect untuk setiap path
pathurl.forEach(({ path, url }) => {
  app.get(path, (req, res) => {
    res.redirect(url);
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
