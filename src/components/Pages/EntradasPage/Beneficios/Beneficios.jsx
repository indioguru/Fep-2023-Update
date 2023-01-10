import React from "react";
import { BeneficiosDesktop } from "./BeneficiosDesktop";
import { BeneficiosMovil } from "./BeneficiosMovil";

export const Beneficios = ({ idioma }) => {
  return (
    <div className="beneficios">
      <div className="containerAll">
        {idioma === "ESP" ? (
          <p className="titulo_principal">BENEFICIOS VIP</p>
        ) : (
          <p className="titulo_principal">VIP BENEFITS</p>
        )}

        {window.innerWidth > 999 ? <BeneficiosDesktop /> : <BeneficiosMovil />}
      </div>
    </div>
  );
};
