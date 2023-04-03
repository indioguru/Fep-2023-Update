import React from "react";

export const SponsorsItem = ({ logo, info, url_VER_MAS, i }) => {
  return (
    <div key={i} className={`card card_${i + 1}`}>
      <div className="content_logo">
        <img className="imgPrueba" src={logo.url} alt="logo" />
      </div>
      <p>{info}</p>
      <a
        className="ga4-call_to_action-sponsors-ver_mas"
        target="_blank"
        href={url_VER_MAS}
      >
        VER MÁS
      </a>
    </div>
  );
};
