import React from "react";
import { VuelosSlider } from "./VuelosSlider";

export const Vuelos = ({ titulo, descripcion, galeria }) => {
  return (
    <div className="guia-viajero_vuelos">
      <img
        className="imagen_decoration"
        src="/assets/viajero/mediopajaroazul.png"
        alt="mediopajaroazul"
      />

      {window.innerWidth > 999 ? (
        <div className="containerAll">
          <div className="descripciones">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
          <div className="slider">
            <VuelosSlider galeria={galeria} />
          </div>
        </div>
      ) : (
        <div className="containerAll">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <VuelosSlider galeria={galeria} />
        </div>
      )}
    </div>
  );
};
