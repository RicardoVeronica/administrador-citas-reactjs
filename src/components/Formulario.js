import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Formulario() {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, setError] = useState(false);
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const handleClick = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    cita.id = uuidv4();
    console.log(cita);
  };

  const handleInput = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Crear cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onInput={handleInput}
        />

        <label>Nombre del propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
          onInput={handleInput}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onInput={handleInput}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onInput={handleInput}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onInput={handleInput}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
          onClick={handleClick}
        >
          Agregar cita
        </button>
      </form>
    </>
  );
}

export default Formulario;
