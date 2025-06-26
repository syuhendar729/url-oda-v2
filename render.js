function renderHomePage(pathurl) {
  return `
    <html>
      <head>
        <title>Shortener & Redirect URL</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f7f7f7; color: #222; max-width: 600px; margin: 40px auto; padding: 20px; border-radius: 10px; box-shadow: 0 2px 8px #ddd; }
          h1 { color: #2d6cdf; }
          ul { background: #fff; padding: 16px 24px; border-radius: 8px; }
          a { color: #2d6cdf; text-decoration: none; }
          .notice { background: #fffbe6; border: 1px solid #ffe58f; padding: 12px 18px; margin-bottom: 14px; border-radius: 8px; }
        </style>
      </head>
      <body>
        <h1>Shortener & Redirect URL</h1>
        <p>
          This website is a simple web application for creating and managing short links (URL shortener) that redirect users to various destinations, such as YouTube, GitHub, or any other website.<br>
          You can easily access a specific path (e.g., <code>/video1</code>, <code>/gh1</code>, etc.) on this domain to be automatically redirected to the target URL.<br>
          <br>
          <b>Currently, if you want to add a new short link, you can:</b>
          <ul>
            <li>Create an <b>issue</b> in the <a href="https://github.com/syuhendar729/url-oda-v2/issues" target="_blank">GitHub repository</a></li>
            <li>Or submit a <b>pull request</b> by editing the <code>pathurl.js</code> file in the <a href="https://github.com/syuhendar729/url-oda-v2" target="_blank">repository</a> and adding your desired URL to the <code>pathurl</code> variable</li>
          </ul>
          In the future, a feature will be provided so users can add their own URLs through a form on this website.
        </p>
        <div class="notice">
          <b>Info:</b> For now, to add a URL, please open an issue or submit a pull request as described above.
        </div>
        <h2>Available Short Links:</h2>
        <ul>
          ${pathurl.map(item => `<li><a href="${item.path}">${item.path}</a> &rarr; <span>${item.url}</span></li>`).join("")}
        </ul>
        <p>
          <b>How to use:</b> Access the path (e.g., <code>/video1</code>) on this domain to be automatically redirected to the target URL.
        </p>
        <hr />
        <small>
          Created by <a href="https://github.com/syuhendar729" target="_blank">syuhendar729</a>
        </small>
      </body>
    </html>
  `;
}

module.exports = { renderHomePage };
