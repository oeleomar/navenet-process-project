import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./templates/Home";
import { MenuComponent } from "./components/MenuComponent";
import { ShowProcess } from "./templates/ShowProcess";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suporte" element={<ShowProcess />} />
        <Route path="/suporte2" element={<ShowProcess />} />
        <Route path="/financeiro" element={<ShowProcess />} />
        <Route path="/comercial" element={<ShowProcess />} />
        <Route path="/posvendas" element={<ShowProcess />} />
        <Route path="/qualidade" element={<ShowProcess />} />
        <Route path="/noc" element={<ShowProcess />} />
        <Route path="/recursoshumanos" element={<ShowProcess />} />
        <Route path="/almoxerifado" element={<ShowProcess />} />
        <Route path="/tecnico" element={<ShowProcess />} />
        <Route path="/cancelamento" element={<ShowProcess />} />
        <Route path="/cancelamento" element={<ShowProcess />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
