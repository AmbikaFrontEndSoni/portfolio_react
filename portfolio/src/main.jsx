import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </ThemeProvider>
);
