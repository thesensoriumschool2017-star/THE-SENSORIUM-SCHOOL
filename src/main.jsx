import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

if (
  typeof window !== "undefined" &&
  (window.location.hash.startsWith("#invite_token=") ||
    window.location.hash.startsWith("#recovery_token=")) &&
  !window.location.pathname.startsWith("/admin")
) {
  window.location.replace(`/admin/${window.location.hash}`);
}

if (typeof window !== "undefined" && window.netlifyIdentity) {
  window.netlifyIdentity.on("login", () => {
    window.location.href = "/admin/";
  });
  window.netlifyIdentity.init();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
