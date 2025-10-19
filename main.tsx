import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/app.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root element not found");
}

const RenderComponent = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(RenderComponent());
