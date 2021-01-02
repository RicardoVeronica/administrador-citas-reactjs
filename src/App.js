import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  const [arregloCitas, setArregloCitas] = useState([]);

  const crearCita = (citaNueva) => {
    // Toma las citas actuales y agrega la nueva
    setArregloCitas([...arregloCitas, citaNueva]);
  };

  const eliminarCita = (id) => {
    // Elimina cita por id
    const nuevasCitas = arregloCitas.filter((cita) => cita.id !== id);
    setArregloCitas(nuevasCitas);
  };

  const title =
    arregloCitas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {arregloCitas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
