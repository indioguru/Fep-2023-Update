import React from "react";
import { Beneficio } from "./Beneficio";
import beneficios from "./beneficios.json";

export const BeneficiosDesktop = ({ idioma }) => {
  return (
    <div className="beneficiosDesktop">
      {beneficios.map((item, i) => (
        <Beneficio
          idioma={idioma}
          number={i + 1}
          imagen={item.imagen}
          titulo={item.titulo}
          titulo_ingles={item.titulo_ingles}
        />
      ))}
    </div>
  );
};
