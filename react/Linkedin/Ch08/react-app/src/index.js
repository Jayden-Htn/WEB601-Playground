import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import pages
import { App, About, Contact, History } from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// each route (page) is stored in routes, inside the BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}>
        // nested route
        <Route path="history" element={<History />} />
        // e.g. site/about/history
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
