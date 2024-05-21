import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <ThemeProvider>
    <App />
    <Toaster />
  </ThemeProvider>,
  document.getElementById("root")
);
