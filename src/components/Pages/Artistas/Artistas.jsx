import React, { useEffect, useState } from "react";
import { FiltroArtistas } from "./Filtro/FiltroArtistas";
import { Artista } from "../../Common/Artista";
import { getArtistas } from "../../api/api";
import { Loader } from "../../Common/Loader";
import { Link } from "react-router-dom";

export const Artistas = ({ idioma }) => {
  const [artistasAll, setArtistasAll] = useState([]);
  const [artistasSort, setArtistasSort] = useState([]);
  const [artistas, setartistas] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getArtistas().then((data) => {
      setArtistasAll(data.data);
      setartistas(data.data);
    });
  }, []);

  useEffect(() => {
    let body = document.querySelector("body");
    body.style.overflowY = "hidden";

    if (artistas.length > 0) {
      setTimeout(() => {
        setLoader(false);
        body.style.overflowY = "scroll";
      }, 500);
    }
  }, [artistas]);

  useEffect(() => {
   const artistasSort = artistas.sort((a, b) => a.orden - b.orden);
   setArtistasSort(artistasSort)
  }, [artistas]);

  const filtrar = (item) => {
    const artistasContainer = document.querySelector(".page-artistas_artistas");
    artistasContainer.classList.remove("artistasContainerAnimation");
    setTimeout(() => {
      artistasContainer.classList.add("artistasContainerAnimation");
    }, 100);

    if (item.toLowerCase() === "todos") {
      return setartistas(artistasAll);
    }
    const newArtists = artistasAll.filter((el) =>
      el.fecha.toLowerCase().includes(item.toLowerCase())
    );
    setartistas(newArtists);
  };

  return (
    <div className="page-artistas">
      {loader && <Loader />}

      <div className="page-artistas_banner">
        <Link to="/">
          <img
            className="logo"
            src="/assets/etapa4/logodesktop.png"
            alt="logodesktop"
          />
        </Link>

        <h1>{idioma === "ESP" ? <>Artistas</> : <>Artists</>}</h1>
        <img
          className="montains"
          src="/assets/etapa5/artistas/moontanasin.png"
          alt="banner-img"
        />
        <img
          className="flor"
          src="/assets/etapa5/artistas/flor_artista.png"
          alt="banner-img"
        />

        {/* <div className="artistas"></div> */}
        <img
          className="artistas"
          src="/assets/etapa5/artistas/artistas.png"
          alt="banner-img"
        />
      </div>

      <section className="containerAll">
        <div className="page-artistas_filtro">
          <FiltroArtistas idioma={idioma} filtrar={filtrar} />
        </div>
        <div className="page-artistas_artistas artistasContainerAnimation">
          {artistasSort.map((artista) => (
            <Artista marco="/assets/anim_steps/5.png" artista={artista} />
          ))}
        </div>
      </section>
    </div>
  );
};
