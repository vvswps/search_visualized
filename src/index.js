import { createRoot } from "react-dom/client";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <h1>Search Visualized</h1>
    <Nav />
    <Main />
    <Footer />
  </>
);
