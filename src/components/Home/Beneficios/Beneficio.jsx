import React from "react";

export const Beneficio = ({idioma, number, imagen, titulo, titulo_ingles }) => {
  return (
    <div className="beneficio">
      <img src={`/assets/etapa4/beneficios/${imagen}`} alt="imagen" />
      {window.innerWidth < 999 && <span className="number"> {number} / 4</span>}
      <p className="beneficio_titulo">
      {idioma === "ESP" ? <> {titulo} </> : <> {titulo_ingles} </>}
         </p>
    </div>
  );
};
