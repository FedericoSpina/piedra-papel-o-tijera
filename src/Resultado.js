import React from "react";

const Resultado = (props) => {
  let resultadoFinal;
  if (
    props.jugador.derrota === props.maquina.eleccion &&
    props.jugador.eleccion
  ) {
    resultadoFinal = (
      <>
        <h1> Ganador : Jugador!!! ๐ง๐ง๐ง </h1>
      </>
    );
  } else if (
    props.maquina.derrota === props.jugador.eleccion &&
    props.maquina.eleccion
  ) {
    resultadoFinal = (
      <>
        <h1> Ganador : Maquina! ๐ค๐ค๐ค </h1>
        <h4> Suerte la prรณxima... ๐</h4>
      </>
    );
  } else if (
    props.maquina.eleccion === props.jugador.eleccion &&
    props.maquina.eleccion
  ) {
    resultadoFinal = (
      <>
        <h1> Empate ๐ง๐ค๐ค </h1>
      </>
    );
  }

  return <h1>{resultadoFinal}</h1>;
};

export default Resultado;
