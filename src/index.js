import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";


const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
