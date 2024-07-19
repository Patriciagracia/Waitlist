import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Footer from "./footer.jsx";
import "./App.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <div className="container animation">
        <p class="badge text-bg-secondary">🏷️ New Feature</p>
        <h1> Coming soon! </h1>
        <div className="card">
          <h2> Join The Waitlist </h2>
          <p>
            Be the first to experience the future! Sign up now to secure your
            spot and get early access to exciting updates. Don’t miss out—space
            is limited!
          </p>
          <App />
        </div>
        <Footer />
      </div>
    </React.StrictMode>
  </>
);
