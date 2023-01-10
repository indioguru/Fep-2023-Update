import React from "react";
import { MemoriasSlider } from "./MemoriasSlider";

export const Memorias = ({ idioma }) => {
  return (
    <div className="memorias">
      <div className="containerAll">
        {/* 
      -----------------Imagenes navideñas---------------- */}

        <div className="titulo">
          <h2>{idioma === "ESP" ? <>MEMORIAS DEL PASADO</> : <>MEMORIES</>}</h2>
          <span>
            {idioma === "ESP" ? (
              <>
                Viajemos al pasado y revivamos los momentos más memorables que
                han dado vida a Un Mundo Distinto.
              </>
            ) : (
              <>
                Let's travel back in time and revive the most memorable moments
                that have brought Festival Esteréo Picnic.
              </>
            )}
          </span>
        </div>
        <MemoriasSlider />
      </div>
    </div>
  );
};
