import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "../components/Footer/Footer.jsx";

import NAVBAR from "../components/Navbar/Navbar.jsx";
import Inicio from "../pages/Inicio/Inicio.jsx";
import Registro from "../pages/Inicio/Formularios/Registro.jsx";
import Orar from "../pages/Inicio/Formularios/Orar.jsx";
import Contactar from "../pages/Inicio/Formularios/Contactanos.jsx";
import Ministerio from "../pages/Ministerio/Ministerio.jsx";
import Multimedia from "../pages/Multimedia/Multimedia.jsx";
import Aportaciones from "../pages/Aportaciones/Aportaciones.jsx";
import Envivo from "../pages/En_Vivo/EnVivo.jsx";

import Devarea from "../pages/Devarea/Devarea.jsx";

function App() {
  return (
    <Router>
      <NAVBAR>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/ministerio" element={<Ministerio />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/aportaciones" element={<Aportaciones />} />
          <Route path="/orar" element={<Orar />} />
          <Route path="/contacto" element={<Contactar />} />
          <Route path="/envivo" element={<Envivo />} />
          <Route path="/devarea" element={<Devarea />} />
          {/* <Route path="*" element={<Inicio />} /> */}
        </Routes>
      </NAVBAR>
      <Footer />
    </Router>
  );
}

export default App;
