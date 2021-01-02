import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [arregloCitas, setArregloCitas] = useState(citasIniciales);

  // Use effect es similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Use effect = window.onload
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(arregloCitas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [arregloCitas]); // Array de dependencias

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
