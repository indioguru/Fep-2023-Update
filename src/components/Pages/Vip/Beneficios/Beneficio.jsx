import React from "react";
import { BeneficioSlider } from "./BeneficioSlider";

export const Beneficio = ({
  beneficioClass,
  titulo,
  descripcion,
  galeria,
  imagen,
}) => {
  return (
    <div className={`vip_beneficio ${beneficioClass}`}>
      <img className="imagen_decoration" src={imagen} alt="imagen" />

      {window.innerWidth > 999 ? (
        <div className="containerAll">
          <div className="descripciones">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
          </div>
          <div className="slider">
            <BeneficioSlider galeria={galeria} />
          </div>
        </div>
      ) : (
        <div className="containerAll">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <BeneficioSlider galeria={galeria} />
        </div>
      )}
    </div>
  );
};
