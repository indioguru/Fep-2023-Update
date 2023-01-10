import React from "react";

export const Beneficio = ({ number, imagen, titulo }) => {
  return (
    <div className="beneficio">
      <img src={`/assets/etapa4/beneficios/${imagen}`} alt="imagen" />
      {window.innerWidth < 999 && <span className="number"> {number} / 4</span>}
      <p className="beneficio_titulo">{titulo} </p>
    </div>
  );
};
