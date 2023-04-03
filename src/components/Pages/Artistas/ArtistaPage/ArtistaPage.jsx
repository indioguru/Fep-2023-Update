import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../../Common/Loader";
import { useFetch, useFindByName } from "../../../hooks";
import { ArtistaPageMore } from "./ArtistaPageMore";

export const ArtistaPage = ({ idioma }) => {
  const { slug } = useParams();

  const { data: artistasAll, isLoading } = useFetch("/artistas", []);
  const { state: artista } = useFindByName(slug, artistasAll);

  useEffect(() => {
    if (Object.keys(artista).length > 0) {
      document.title = artista.nombre;
    }
  }, [artista]);

  return (
    <div className="artista-page">
      {isLoading && <Loader />}

      <div className="banner-desktop">
        <div className="artista-page_banner">
          {artista.imagen && <img src={artista.imagen.url} alt="artista" />}
          <h2>{artista.nombre}</h2>
        </div>
        {window.innerWidth > 999 && (
          <div className="info-banner">
            <div className="fechas">
              <p>
                <strong>DÍA:</strong>

                {idioma === "ESP" ? (
                  <> {artista.fecha}</>
                ) : (
                  <> {artista.fecha_INGLES}</>
                )}
              </p>
              {artista.hora && (
                <p>
                  <strong>HORA: </strong> {artista.hora}
                </p>
              )}
              {artista.escenario && (
                <p>
                  <strong>ESCENARIO:</strong> {artista.escenario}
                </p>
              )}
            </div>
            <div className="redes">
              {artista.instagram && (
                <a
                  target="_blank"
                  className="instagram_link ga4-call_to_action-instagram-perfil"
                  href={artista.instagram}
                >
                  <img
                    src="/assets/etapa5/menu/ninstagram.png"
                    alt="instagram"
                  />
                </a>
              )}
              {artista.spotify && (
                <a
                  target="_blank"
                  className="spotify_link ga4-call_to_action-spotify-perfil"
                  href={artista.spotify}
                >
                  <img src="/assets/etapa5/menu/nspotify.png" alt="spotify" />
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <section className="containerAll">
        <div className="artista-page_info">
          {window.innerWidth < 999 && (
            <>
              <div className="fechas">
                <p>
                  <strong>DÍA:</strong>{" "}
                  {idioma === "ESP" ? (
                    <> {artista.fecha}</>
                  ) : (
                    <> {artista.fecha_INGLES}</>
                  )}
                </p>
                {artista.hora && (
                  <p>
                    <strong>HORA: </strong> {artista.hora}
                  </p>
                )}
                {artista.escenario && (
                  <p>
                    <strong>ESCENARIO:</strong> {artista.escenario}
                  </p>
                )}
              </div>
              <div className="redes">
                {artista.instagram && (
                  <a
                    target="_blank"
                    className="instagram_link ga4-call_to_action-instagram-perfil"
                    href={artista.instagram}
                  >
                    <img
                      src="/assets/etapa5/menu/ninstagram.png"
                      alt="instagram"
                    />
                  </a>
                )}
                {artista.spotify && (
                  <a
                    target="_blank"
                    className="spotify_link ga4-call_to_action-spotify-perfil"
                    href={artista.spotify}
                  >
                    <img src="/assets/etapa5/menu/nspotify.png" alt="spotify" />
                  </a>
                )}
              </div>
            </>
          )}

          <div className="info">
            {idioma === "ESP" ? (
              <>{artista.descripcion}</>
            ) : (
              <>{artista.descripcion_INGLES}</>
            )}
          </div>
        </div>
        <div className="artista-page_seeMore">
          <p className="title">Más artistas:</p>
          <ArtistaPageMore id={artista._id} artistas={artistasAll} />
        </div>
      </section>
    </div>
  );
};
