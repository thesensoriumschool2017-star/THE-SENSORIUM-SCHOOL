async function exchangeCodeForToken({ clientId, clientSecret, code }) {
  const resp = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
    }),
  });

  if (!resp.ok) {
    throw new Error(`GitHub token exchange failed: ${resp.status}`);
  }
  return resp.json();
}

export default async function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const baseUrl = process.env.OAUTH_BASE_URL;

  if (!clientId || !clientSecret || !baseUrl) {
    res
      .status(500)
      .send(
        "Missing env vars: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, OAUTH_BASE_URL."
      );
    return;
  }

  const { code } = req.query || {};
  if (!code) {
    res.status(400).send("Missing ?code= from GitHub callback.");
    return;
  }

  try {
    const tokenData = await exchangeCodeForToken({
      clientId,
      clientSecret,
      code,
    });

    if (!tokenData.access_token) {
      res.status(400).send(`No access_token returned: ${JSON.stringify(tokenData)}`);
      return;
    }

    // Decap CMS expects a postMessage back to the opener window.
    const payload = JSON.stringify({ token: tokenData.access_token });
    const html = `<!doctype html>
<html>
  <head><meta charset="utf-8" /></head>
  <body>
    <script>
      (function () {
        var msg = 'authorization:github:success:' + ${JSON.stringify(payload)};
        window.opener && window.opener.postMessage(msg, ${JSON.stringify(baseUrl)});
        window.close();
      })();
    </script>
  </body>
</html>`;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send(String(err?.message || err));
  }
}

