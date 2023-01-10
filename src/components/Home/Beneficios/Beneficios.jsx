import React from "react";
import { BeneficiosDesktop } from "./BeneficiosDesktop";
import { BeneficiosMovil } from "./BeneficiosMovil";

export const Beneficios = ({ idioma }) => {
  return (
    <div className="beneficios">
      <div className="containerAll">
        <p className="titulo_principal">
          {idioma === "ESP" ? <> BENEFICIOS VIP</> : <>VIP BENEFITS </>}
        </p>

        {window.innerWidth > 999 ? (
          <BeneficiosDesktop idioma={idioma} />
        ) : (
          <BeneficiosMovil idioma={idioma} />
        )}

        <a
          className="principalButtom ga4-call_to_action-entradas-seccion_home"
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
        >
          {idioma === "ESP" ? <> COMPRAR ENTRADAS</> : <>BUY TICKETS </>}
        </a>
      </div>
    </div>
  );
};
