import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import Header from "./Header";
import AboutUs from "./AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="AboutUs" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
