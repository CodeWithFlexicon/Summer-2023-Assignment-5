import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App, { Title } from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Title />
    <App />
  </StrictMode>
);
