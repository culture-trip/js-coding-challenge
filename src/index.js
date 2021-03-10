import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Gallery } from "./Gallery";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <header className="App-header">
        <b>Culture Trip JS Coding Challenge</b>
      </header>

      <main className="App-main">
        {window.location.pathname === "/gallery" ? <Gallery /> : null}
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
