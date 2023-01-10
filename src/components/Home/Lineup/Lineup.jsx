import React from "react";

export const Lineup = ({ idioma, home }) => {
  return (
    <div className="lineup">
      <div className="titulo">
        <h2>LINEUP</h2>
      </div>

      <img
        className="montanas_rosadas"
        src="/assets/etapa4/montanas_rosadas.png"
        alt="montanas_rosadas"
      />

      {/* 
      -------------------plantas navideñas--------------- */}

      <img
        className="planta"
        src="/assets/etapa4/enrredadera.png"
        alt="planta_navideña"
      />

      <div className="containerAll">
        {window.innerWidth > 999 ? (
          <>
            {idioma === "ESP" ? (
              <img
                className="lineup_img"
                src={home.lineup_DESKTOP.url}
                alt="fep_web"
              />
            ) : (
              <img
                className="lineup_img"
                src={home.lineup_DESKTOP_INGLES.url}
                alt="fep_web"
              />
            )}
          </>
        ) : (
          <>
            {idioma === "ESP" ? (
              <img
                className="lineup_img"
                src={home.lineup_MOVIL.url}
                alt="movil"
              />
            ) : (
              <img
                className="lineup_img"
                src={home.lineup_MOVIL_INGLES.url}
                alt="fep_web"
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
