// src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import GymStation from "./components/GymStation";
import "./index.css"; // ← Tailwind import

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <GymStation />
  </React.StrictMode>,
);
