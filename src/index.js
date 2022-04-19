import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./assets/css/styles.css";
import "./assets/css/grid.css";

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
