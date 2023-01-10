import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import sponsors from "./Sponsors.json";
export const Sponsors = () => {
  const [infoSponsors, setInfoSponsors] = useState([]);

  useEffect(() => {
    setInfoSponsors(sponsors);
  }, []);

  return (
    <div className="sponsors">
      <div className="sponsors_container">
        <div className="logo">
          <img src="/assets/etapa4/logodesktop.png" alt="" />
        </div>

        <div className="content_info containerAll">
          <h1>SPONSORS</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore
          </p>
        </div>

        <div className="content_banner">
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

          <div className="suelo"></div>
        </div>

        <div className="content_cards">
          {infoSponsors.map((item, i) => (
            <div key={i} className="card">
              <img src={item.logo} alt="logo" />
              <p>{item.info}</p>
              <a href={item.link}>VER MÁS</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
