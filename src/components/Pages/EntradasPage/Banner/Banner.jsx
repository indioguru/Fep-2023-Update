import React from "react";

export const Banner = ({ idioma }) => {
  return (
    <div className="entradasPage_banner">
      <img
        className="logo"
        src="/assets/etapa4/logodesktop.png"
        alt="logodesktop"
      />

      {idioma === "ESP" ? <h1>ENTRADAS</h1> : <h1>TICKETS</h1>}
      <img
        className="montanaconsueloe"
        src="/assets/etapa5/entradas/montanaconsueloe.png"
        alt="montanaconsueloe"
      />

      <img
        className="todos_banner"
        src="/assets/etapa5/entradas/todos_banner.png"
        alt="todos_banner"
      />

      <img
        className="flor_banner"
        src="/assets/etapa5/entradas/flor_banner.png"
        alt="flor_banner"
      />
    </div>
  );
};
