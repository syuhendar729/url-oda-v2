const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pathurl = require("./pathurl");
const { renderHomePage } = require("./render");

// Root endpoint: tampilkan info tentang aplikasi
app.get("/", (req, res) => {
  res.send(renderHomePage(pathurl));
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
