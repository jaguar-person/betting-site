import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layouts from "./components/Layouts";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faB,
  faCheckSquare,
  faCoffee,
  faDatabase,
  faHouseLaptop,
  faS,
  faWindowMaximize,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faB,
  faS,
  faHouseLaptop,
  faCheckSquare,
  faCoffee,
  faDatabase,
  faWindowMaximize
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Layouts>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layouts>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
