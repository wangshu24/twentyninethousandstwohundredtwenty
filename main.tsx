import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/app.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root element not found");
}

const RenderComponent = () => (
  <React.StrictMode>
    <div
      style={{
        minWidth: "200px",
        maxWidth: "800px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <App />
    </div>
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(RenderComponent());
