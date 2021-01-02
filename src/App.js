import React, { useState } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [arregloCitas, setArregloCitas] = useState([]);

  const crearCita = (citaNueva) => {
    // Toma las citas actuales y agrega la nueva
    setArregloCitas([...arregloCitas, citaNueva]);
  };

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">columna 2</div>
        </div>
      </div>
    </>
  );
}

export default App;
