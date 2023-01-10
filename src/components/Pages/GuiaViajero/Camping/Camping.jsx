import React from "react";
import { CampingSlider } from "./CampingSlider";

export const Camping = ({ titulo, descripcion, galeria }) => {
  return (
    <div className="guia-viajero_camping">
      <img
        className="imagen_decoration"
        src="/assets/viajero/flor_moradaconrojo.png"
        alt="flor_moradaconrojo"
      />

      {window.innerWidth > 999 ? (
        <div className="containerAll">
          <div className="descripciones">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
          <div className="slider">
            <CampingSlider galeria={galeria} />
          </div>
        </div>
      ) : (
        <div className="containerAll">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <CampingSlider galeria={galeria} />
        </div>
      )}
    </div>
  );
};
