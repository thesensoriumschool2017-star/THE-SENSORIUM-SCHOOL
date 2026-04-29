export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const baseUrl = process.env.OAUTH_BASE_URL;

  if (!clientId || !baseUrl) {
    res
      .status(500)
      .send(
        "Missing env vars: GITHUB_CLIENT_ID and/or OAUTH_BASE_URL. Set them in Vercel project settings."
      );
    return;
  }

  const redirectUri = `${baseUrl}/api/auth/callback`;

  // Decap CMS opens this endpoint in a popup window.
  const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("scope", "repo");

  res.writeHead(302, { Location: authorizeUrl.toString() });
  res.end();
}

