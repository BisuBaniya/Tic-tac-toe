import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root")

const createRoot = ReactDOM.createRoot(rootElement)

createRoot.render(<App />);
