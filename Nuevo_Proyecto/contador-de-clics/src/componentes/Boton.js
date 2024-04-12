import React from "react";
import '../hojas-de-estilo/Boton.css'

function Boton({ texto, esBotonDeClic, manejarCLic }) {
  return (
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarCLic} // Este onClick debe estar dentro del tag button
    >
      {texto}
    </button>
  );
}

export default Boton;