import React from "react";
import { Link } from "react-scroll";

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_logo">
        {window.innerWidth > 999 ? (
          <img
            className="logo_banner"
            src="/assets/etapa4/jd_desktop.png"
            alt="logo"
          />
        ) : (
          <img
            className="logo_banner"
            src="/assets/etapa4/jd_movil.png"
            alt="logo"
          />
        )}
      </div>
      {/* NUBES */}
      <img className="nube nube1" src="/assets/etapa4/nube1.png" alt="nube" />
      <img className="nube nube2" src="/assets/etapa4/nube2.png" alt="nube" />
      {/* PLANTAS */}
      <img
        className="planta planta1"
        src="/assets/etapa4/plantas.png"
        alt="nube"
      />
      <img
        className="planta planta2"
        src="/assets/etapa4/plantas.png"
        alt="nube"
      />
      {/* <a
        className="principalButtom banner_boton banner_boton_entrada ga4-call_to_action-entradas-banner_home"
        target="_blank"
        href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
      >
        ENTRADAS
      </a> */}
      <Link
        className="principalButtom banner_boton banner_boton_lineup ga4-call_to_action-ver_lineup-banner_home"
        activeClass="active"
        to="lineup"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        LINEUP
        <img
          className="flecha flechalineupnegra"
          src="/assets/etapa4/flblanca.png"
          alt="flechalineupnegra"
        />
        <img
          className="flecha flechalineuproja"
          src="/assets/etapa4/flmorada.png"
          alt="flechalineuproja"
        />
      </Link>
      <img
        className="montañaprincipal"
        src="/assets/etapa4/inicio/montainsprincipal.png"
        alt="icono"
      />
      <img
        className="ellas"
        src="/assets/etapa4/inicio/ellas.png"
        alt="icono"
      />
      <img
        className="flor1"
        src="/assets/etapa4/inicio/flor1.png"
        alt="icono"
      />
      {/* <img
        className=""
        src="/assets/etapa4/inicio/montañaprincipal.png"
        alt="icono"
      /> */}
      <div className="suelo"></div>
    </div>
  );
};
