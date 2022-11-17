import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/global-styles";

import { Page404 } from "./templates/Page404";
import { Setor } from "./templates/Setor";
import { Header } from "./components/Header";
import { Home } from "./templates/Home";
import { Processo } from "./templates/Processo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <GlobalStyles />
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/setor/:setor" element={<Setor />} />
          <Route path="/setor/:setor/:id" element={<Processo />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();