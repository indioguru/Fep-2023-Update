import React from "react";
import { HotelesSlider } from "./HotelesSlider";

export const Hoteles = ({ titulo, descripcion, galeria }) => {
  return (
    <div className="guia-viajero_hoteles">
      <img
        className="imagen_decoration"
        src="/assets/viajero/planta_verde.png"
        alt="planta_verde"
      />

      {window.innerWidth > 999 ? (
        <div className="containerAll">
          <div className="descripciones">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
          <div className="slider">
            <HotelesSlider galeria={galeria} />
          </div>
        </div>
      ) : (
        <div className="containerAll">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <HotelesSlider galeria={galeria} />
        </div>
      )}
    </div>
  );
};
