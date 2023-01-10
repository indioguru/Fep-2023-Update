import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtistas } from "../../../api/api";
import { Loader } from "../../../Common/Loader";
import artistasJSON from "../artistas.json";
import { ArtistaPageMore } from "./ArtistaPageMore";

export const ArtistaPage = ({idioma}) => {
  const { slug } = useParams();
  const [artistasAll, setArtistasAll] = useState([]);
  const [artista, setArtista] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getArtistas().then((data) => {
      setArtistasAll(data.data);
    });
  }, []);

  useEffect(() => {
    const name = slug.split("-").join(" ").toLowerCase();

    const artista = artistasAll.filter((el) =>
      el.nombre
        .toLowerCase()
        .split("-")
        .join(" ")
        .toLowerCase()
        .includes(name.toLowerCase())
    );

    if (artista[0] !== undefined) {
      setArtista(artista[0]);
    }
  }, [slug, artistasAll]);

  useEffect(() => {
    if (Object.keys(artista).length > 0) {
      document.title = artista.nombre;
    }
  }, [artista]);

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.overflowY = "hidden";

    if (Object.keys(artista).length > 0) {
      setTimeout(() => {
        setLoader(false);
        body.style.overflowY = "scroll";
      }, 500);
    }
  }, [artista]);

  return (
    <div className="artista-page">
      {loader && <Loader />}

      <div className="banner-desktop">
        <div className="artista-page_banner">
          {artista.imagen && <img src={artista.imagen.url} alt="artista" />}
          <h2>{artista.nombre}</h2>
        </div>
        {window.innerWidth > 999 && (
          <div className="info-banner">
            <div className="fechas">
              <p>
                
                <strong>DÍA:</strong> {artista.fecha}
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
                  <strong>DÍA:</strong> {artista.fecha}
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

          <div className="info">{artista.descripcion}</div>
        </div>
        <div className="artista-page_seeMore">
          <p className="title">Más artistas:</p>
          <ArtistaPageMore id={artista._id} artistas={artistasAll} />
        </div>
      </section>
    </div>
  );
};
