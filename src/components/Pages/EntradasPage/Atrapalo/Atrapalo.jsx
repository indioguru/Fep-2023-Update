import React from "react";

export const Atrapalo = () => {
  return (
    <div className="atrapalo">
      <div className="containerAll">
        <div className="info">
          <div className="titulo">
            <h2>ATRÁPALO</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata.
          </p>

          <a className="principalButtom" href="">
            lorem ipsum
          </a>
        </div>
      </div>

      <img
        className="medio_pajaro"
        src="/assets/etapa5/mediopajaroazul.png"
        alt="medio_pajaro"
      />

      <img className="nube" src="/assets/etapa4/nube2.png" alt="nube2" />
      <img className="nube nube2" src="/assets/etapa4/nube2.png" alt="nube2" />
    </div>
  );
};
