import React from "react";

export const SponsorsBanner = ({sponsors_INFO, isLoading}) => {
  return (
    <div className="sponsors_banner">
      <div className="logo">
        <img src="/assets/etapa4/logodesktop.png" alt="" />
      </div>

      <div className="content_info containerAll">
        <h1>SPONSORS</h1>

        {!isLoading && <p>{sponsors_INFO}</p>}
      </div>

      <div className="content_banner">
        <div className="suelo"></div>
        <img
          className="montana"
          src="/assets/etapa4/montanas_rosadas.png"
          alt="Montaña"
        />

        <img
          className="flor"
          src="/assets/etapa4/inicio/flor1.png"
          alt="flor"
        />

        <img className="hulk" src="/assets/etapa5/sponsors.png" alt="señor" />
      </div>
    </div>
  );
};
