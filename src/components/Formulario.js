import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function Formulario({ crearCita }) {
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

    crearCita(cita);

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
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
          value={mascota}
        />

        <label>Nombre del propietario</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
          onInput={handleInput}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onInput={handleInput}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onInput={handleInput}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onInput={handleInput}
          value={sintomas}
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

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;
