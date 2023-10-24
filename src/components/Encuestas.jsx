import React, { useState } from "react";
import encuestas from './../encuestas';

function Encuesta() {
  const [encuestasData, setEncuestasData] = useState(encuestas);

  const handleSeleccion = (encuestaId, opcion) => {
    const updatedEncuestas = encuestasData.map((encuesta) => {
      if (encuesta.id === encuestaId) {
        return { ...encuesta, seleccion: opcion };
      }
      return encuesta;
    });
    setEncuestasData(updatedEncuestas);
  };

  return (
    <div>
      <h2>Lista de Encuestas</h2>
      {encuestasData.map((encuesta) => (
        <div key={encuesta.id}>
          <h3>{encuesta.pregunta}</h3>
          {encuesta.opciones.map((opcion) => (
            <label key={opcion}>
              <input
                type="radio"
                name={`encuesta-${encuesta.id}`}
                value={opcion}
                checked={encuesta.seleccion === opcion}
                onChange={() => handleSeleccion(encuesta.id, opcion)}
              />
              {opcion}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Encuesta;
