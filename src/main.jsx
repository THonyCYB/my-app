import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Importiamo il componente App
import "./index.css";  // Importiamo il CSS globale

// Creiamo il root e montiamo l'app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

