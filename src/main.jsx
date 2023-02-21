import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { NavigationProvider } from "./context/NavigationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);
