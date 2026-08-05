import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster
    position="top-right"
    toastOptions={{
      duration: 3000,
      style: {
        background: "#111827",
        color: "#fff",
        border: "1px solid rgba(99,102,241,.3)",
        borderRadius: "14px",
      },
    }}
  />

    <App />
  </BrowserRouter>
);