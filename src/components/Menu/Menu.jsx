import React from "react";
import { Link } from "react-router-dom";

export const Menu = ({ setIdioma, toggleMenu, idioma }) => {
  const changeLanguaje = (languaje) => {
    setIdioma(languaje);
    localStorage.setItem("idioma", languaje);
  };

  return (
    <div className="menu">
      <div className="menu_container">
        <div className="close" onClick={toggleMenu}>
          <img src="/assets/etapa5/menu/close.png" alt="close" />
        </div>

        <div className="idiomas">
          {idioma === "ESP" ? (
            <p
              onClick={() => {
                changeLanguaje("ING");
                toggleMenu();
              }}
            >
              ENG
            </p>
          ) : (
            <p
              onClick={() => {
                changeLanguaje("ESP");
                toggleMenu();
              }}
            >
              ESP
            </p>
          )}
        </div>

        {/* NUBES */}
        <div className="nubes">
          <img
            className="nube nube1"
            src="/assets/etapa4/nube2.png"
            alt="varias_plantas"
          />
          <img
            className="nube nube2"
            src="/assets/etapa4/nube2.png"
            alt="varias_plantas"
          />
        </div>

        {/* LINES */}
        <div className="links">
          <Link onClick={toggleMenu} to="/">
            {idioma === "ESP" ? <>Home</> : <>Home</>}
          </Link>
          <Link onClick={toggleMenu} to="/artistas">
            {idioma === "ESP" ? <>Artistas</> : <>Artists</>}
          </Link>
          <Link
            onClick={() => {
              toggleMenu();
            }}
            to="/entradas"
          >
            {idioma === "ESP" ? <>Entradas</> : <>Tickets</>}
          </Link>

          <Link
            onClick={() => {
              toggleMenu();
            }}
            to="/memorias"
          >
            {idioma === "ESP" ? (
              <>Memorias del pasado</>
            ) : (
              <>Memories of the past </>
            )}
          </Link>

          <Link
            onClick={() => {
              toggleMenu();
            }}
            to="/prensa"
          >
            {idioma === "ESP" ? <>Prensa</> : <>News</>}
          </Link>

          <Link
            onClick={() => {
              toggleMenu();
            }}
            to="/como-llegar"
          >
            {idioma === "ESP" ? <>Como llegar</> : <>How to arrive</>}
          </Link>

          <Link
            onClick={() => {
              toggleMenu();
            }}
            to="/sponsors"
          >
            {idioma === "ESP" ? <>Sponsors</> : <>Sponsors</>}
          </Link>
        </div>

        {window.innerWidth > 999 && (
          <img className="umd" src="/assets/etapa5/menu/umd.png" alt="umd" />
        )}

        {/* REDES */}
        <div className="redes">
          <a
            target="_blank"
            className="ga4-call_to_action-rrss-menu"
            href="https://www.instagram.com/festereopicnic/?hl=en"
          >
            <img src="/assets/etapa5/menu/ninstagram.png" alt="red social" />
          </a>
          <a
            target="_blank"
            className="ga4-call_to_action-rrss-menu"
            href="https://www.facebook.com/festivalestereopicnic/"
          >
            <img src="/assets/etapa5/menu/nfacebook.png" alt="red social" />
          </a>
          <a
            target="_blank"
            className="ga4-call_to_action-rrss-menu"
            href="https://mobile.twitter.com/festereopicnic_"
          >
            <img src="/assets/etapa5/menu/ntwitter.png" alt="red social" />
          </a>
          <a
            target="_blank"
            className="ga4-call_to_action-rrss-menu"
            href="https://open.spotify.com/playlist/37i9dQZF1DWUfEH87eTMRz"
          >
            <img src="/assets/etapa5/menu/nspotify.png" alt="red social" />
          </a>
          <a target="_blank" className="ga4-call_to_action-rrss-menu" href="">
            <img src="/assets/etapa5/menu/ntiktok.png" alt="red social" />
          </a>
        </div>
      </div>

      {/* PLANTAS */}
      <div className="varias_plantas">
        <img
          src="/assets/etapa5/menu/varias_plantas.png"
          alt="varias_plantas"
        />
      </div>
    </div>
  );
};
