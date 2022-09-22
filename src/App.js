import React, { useState } from "react";
import Opcion from "./Opcion";
import Resultado from "./Resultado";
import "./styles.css";

export default function App() {
  const [eleccionJugador, setEleccionJugador] = useState({});
  const [eleccionMaquina, setEleccionMaquina] = useState({});

  const opciones = [
    {
      eleccion: "piedra",
      derrota: "tijera"
    },
    {
      eleccion: "papel",
      derrota: "piedra"
    },
    {
      eleccion: "tijera",
      derrota: "papel"
    }
  ];
  const elegirOpcion = (event) => {
    const jugador = opciones.find(
      (e) => e.eleccion === event.target.textContent
    );
    setEleccionJugador(jugador);
    eleccionRival();
  };
  const eleccionRival = () => {
    const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionMaquina(eleccion);
  };

  return (
    <div className="App">
      <Resultado jugador={eleccionJugador} maquina={eleccionMaquina} />
      <main>
        <section>
          <div className="jugador">🧑 El Jugador a elegido:</div>
          <div className="eleccion">{eleccionJugador.eleccion}</div>
        </section>
        <section>
          <div className="maquina">🤖 La Maquina a elegido:</div>
          <div className="eleccion">{eleccionMaquina.eleccion}</div>
        </section>
      </main>

      <div className="opciones">
        {opciones.map((e, index) => (
          <Opcion elegir={elegirOpcion} valor={opciones[index]} />
        ))}
      </div>

      <div className="abajito">
        Hecho por Federico con -> <span>🤎 </span>
      </div>
    </div>
  );
}
