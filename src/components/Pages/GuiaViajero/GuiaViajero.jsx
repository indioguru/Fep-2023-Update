import React, { useEffect, useState } from "react";
import { getViajero } from "../../api/api";
import { Camping } from "./Camping/Camping";
import { Hoteles } from "./Hoteles/Hoteles";
import { Vuelos } from "./Vuelos/Vuelos";

export const GuiaViajero = () => {
  const [viajero, setViajero] = useState({});

  useEffect(() => {
    getViajero().then((data) => setViajero(data.data));
  }, []);



  return (
    <div className="guia-viajero">
      <div className="guia-viajero_banner">
        <div className="containerAll">
          <h2>LA GUÍA DEL VIAJERO INTERNACIONAL</h2>
          <img
            className="personajerosada"
            src="/assets/viajero/personajerosada.png"
            alt="personajerosada"
          />

          <img className="nube1" src="/assets/etapa4/nube1.png" alt="nube1" />
        </div>
          <img className="nube2" src="/assets/etapa4/nube2.png" alt="nube" />
        <img
          className="hojasverdes"
          src="/assets/viajero/hojasverdes.png"
          alt="hojasverdes"
        />

        <div className="suelo"></div>
      </div>

      {Object.keys(viajero).length > 0 && (
        <>
          <Vuelos
            titulo={viajero.vuelos_TITULO}
            descripcion={viajero.vuelos_DESCRIPCION}
            galeria={viajero.vuelos_GALERIA}
          />

          <Hoteles
            titulo={viajero.hoteles_TITULO}
            descripcion={viajero.hoteles_DESCRIPCION}
            galeria={viajero.hoteles_GALERIA}
          />

          <Camping
            titulo={viajero.camping_TITULO}
            descripcion={viajero.camping_DESCRIPCION}
            galeria={viajero.camping_GALERIA}
          />
        </>
      )}
    </div>
  );
};
