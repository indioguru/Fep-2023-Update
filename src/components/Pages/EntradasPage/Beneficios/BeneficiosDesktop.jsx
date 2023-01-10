import React from "react";
import { Beneficio } from "./Beneficio";
import beneficios from "./beneficios.json";

export const BeneficiosDesktop = () => {
  return (
    <div className="beneficiosDesktop">
      {beneficios.map((item, i) => (
        <Beneficio number={i + 1} imagen={item.imagen} titulo={item.titulo} />
      ))}
    </div>
  );
};
