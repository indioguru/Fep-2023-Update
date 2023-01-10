import React from "react";

export const GaleriaBanner = ({ idioma }) => {
  return (
    <div className="page-galeria_banner">
      <div className="containerAll">
        {idioma === "ESP" ? (
          <>
            <h2>GALERÍA</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </p>
          </>
        ) : (
          <>
            {" "}
            <h2>GALLERY</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </p>
          </>
        )}
      </div>
      <img
        src="/assets/galeria/personajesgaleria.png"
        alt="personajesgaleria"
      />
    </div>
  );
};
