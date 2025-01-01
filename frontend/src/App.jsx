import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

// Components
import NAVBAR from "../components/Navbar/Navbar.jsx";
// import FOOTER from "../components/Footer.jsx";

//Pages
import Inicio from "../pages/Inicio/Inicio.jsx";

import Ministerio from "../pages/Ministerio/Ministerio.jsx";
import Multimedia from "../pages/Multimedia/Multimedia.jsx";
import Aportaciones from "../pages/Aportaciones/Aportaciones.jsx";

import Envivo from "../pages/En_Vivo/EnVivo.jsx";

function App() {
  return (
    <Router>
      <NAVBAR>
        <Routes>
          <Route>
            <Route path="/" element={<Inicio />} />
            <Route path="/ministerio" element={<Ministerio />} />
            <Route path="/multimedia" element={<Multimedia />} />
            <Route path="/aportaciones" element={<Aportaciones />} />
            <Route path="/envivo" element={<Envivo />} />
          </Route>
        </Routes>

        {/* <FOOTER /> */}
      </NAVBAR>
    </Router>
  );
}

export default App;
