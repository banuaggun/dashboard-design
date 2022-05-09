import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./assets/scss/_styles.scss";
import "./assets/scss/styles.css";
import "./assets/scss/grid.css";

//import Layout from "./Components/Layouts/Layout";
import App from "./App";

document.title = "Dashboard Design";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
