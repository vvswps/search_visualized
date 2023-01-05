import { createRoot } from "react-dom/client";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Nav />
    <Main />
  </BrowserRouter>
);
