import React from "react";

export const Alcancias = ({ idioma }) => {
  return (
    <div className="alcancias">
      <div className="containerAll">
        <div className="titulo">
          {idioma === "ESP" ? <h2>ALCANCÍAS</h2> : <h2>PIGGY BANKS</h2>}
        </div>

        {idioma === "ESP" ? (
          <p>
            Inicia tu Alcancía FEP, abona a tu ritmo y asegura tu entrada para
            Un Mundo Distinto.
          </p>
        ) : (
          <p>
            Start your FEP piggy bank, pay at your own pace and secure your
            ticket to A Different World.
          </p>
        )}

        <a
          target="_blank"
          href="https://alcancias.armatuvaca.com/fep2023"
          className="principalButtom"
        >
          {idioma === "ESP" ? <> IR A ALCANCÍAS</> : <>GO TO PIGGY BANKS</>}
        </a>
      </div>

      <div className="alcalcias_imagenes-bottom">
        <div className="suelo"></div>

        <img className="sol" src="/assets/etapa4/sol.png" alt="sol" />

        <img
          className="vaca"
          src="/assets/etapa4/alcancias/vaca.png"
          alt="vaca"
        />
        <img
          className="arbustos1"
          src="/assets/etapa4/alcancias/arbustos1.png"
          alt="arbustos1"
        />
        <img
          className="arbustos2"
          src="/assets/etapa4/alcancias/arbustos2.png"
          alt="arbustos2"
        />
        <img
          className="flor1"
          src="/assets/etapa4/alcancias/flor1.png"
          alt="flor1"
        />
        <img
          className="miniplantas"
          src="/assets/etapa4/alcancias/miniplantas.png"
          alt="miniplantas"
        />
      </div>
    </div>
  );
};
