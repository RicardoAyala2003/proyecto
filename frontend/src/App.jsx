import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAVBAR from "../components/Navbar/Navbar.jsx";
import Inicio from "../pages/Inicio/Inicio.jsx";
import Registro from "../pages/Inicio/Formularios/Registro.jsx";
import Ministerio from "../pages/Ministerio/Ministerio.jsx";
import Multimedia from "../pages/Multimedia/Multimedia.jsx";
import Aportaciones from "../pages/Aportaciones/Aportaciones.jsx";
import Envivo from "../pages/En_Vivo/EnVivo.jsx";

function App() {
  return (
    <Router>
      <NAVBAR />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/ministerio" element={<Ministerio />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/aportaciones" element={<Aportaciones />} />
        <Route path="/envivo" element={<Envivo />} />
      </Routes>
    </Router>
  );
}

export default App;
