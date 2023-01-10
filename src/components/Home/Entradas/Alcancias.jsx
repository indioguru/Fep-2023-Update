import React from "react";

export const Alcancias = ({ idioma }) => {
  return (
    <div className="alcancias">
      <div className="containerAll">
        <div className="titulo">
          <h2>{idioma === "ESP" ? <>ALCANCÍAS</> : <>PIGGY BANKS</>}</h2>
        </div>

        <p>
          {idioma === "ESP" ? (
            <>
              Inicia tu Alcancía FEP, abona a tu ritmo y asegura tu entrada para
              Un Mundo Distinto. Próximamente más información.
            </>
          ) : (
            <>
              Start your Piggy Bank, pay at your own pace and secure your
              ticket. More information coming soon.
            </>
          )}
        </p>

        <a
          target="_blank"
          href="https://alcancias.armatuvaca.com/fep2023"
          className="principalButtom"
        >
          {idioma === "ESP" ? <>IR A ALCANCÍAS</> : <>GO TO PIGGY BANKS</>}
        </a>
      </div>

      <div className="alcalcias_imagenes-bottom">
        <div className="suelo"></div>

        {/* ------------------ luna navideña----------- */}

        <img className="sol" src="/assets/navidad/luna.png" alt="sol" />

        {/* ------------------ sol normal----------- */}

        {/* <img className="sol" src="/assets/etapa4/sol.png" alt="sol" /> */}

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

        {/* ------------------ flor navidad----------- */}
        <img className="flor1" src="/assets/navidad/velas.png" alt="flor1" />

        {/* --------------------flor normal ----------------- */}

        {/* <img
          className="flor1"
          src="/assets/etapa4/alcancias/flor1.png"
          alt="flor1"
        /> */}
        <img
          className="miniplantas"
          src="/assets/etapa4/alcancias/miniplantas.png"
          alt="miniplantas"
        />
      </div>
    </div>
  );
};
