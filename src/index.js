import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// all global
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// after bootstrap css

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
