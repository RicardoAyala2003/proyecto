// App.jsx
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "../components/Footer/Footer.jsx";
import NAVBAR from "../components/Navbar/Navbar.jsx";
import Spinner from "../components/Spinner/Spinner.jsx";

const Inicio = React.lazy(() => import("../pages/Inicio/Inicio.jsx"));
const Registro = React.lazy(() => import("../pages/Inicio/Formularios/Registro.jsx"));
const Orar = React.lazy(() => import("../pages/Inicio/Formularios/Orar.jsx"));
const Contactar = React.lazy(() => import("../pages/Inicio/Formularios/Contactanos.jsx"));
const Ministerio = React.lazy(() => import("../pages/Ministerio/Ministerio.jsx"));
const Multimedia = React.lazy(() => import("../pages/Multimedia/Multimedia.jsx"));
const Aportaciones = React.lazy(() => import("../pages/Aportaciones/Aportaciones.jsx"));
const Envivo = React.lazy(() => import("../pages/En_Vivo/EnVivo.jsx"));
const Devarea = React.lazy(() => import("../pages/Devarea/Devarea.jsx"));

function App() {
  return (
    <Router>
      <NAVBAR>
        <Suspense fallback={<Spinner />}>
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
            <Route path="*" element={<Inicio />} />
          </Routes>
        </Suspense>
      </NAVBAR>
      <Footer />
    </Router>
  );
}

export default App;
