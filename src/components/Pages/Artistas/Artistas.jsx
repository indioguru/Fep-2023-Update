import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../Common/Loader";
import { ArtistasBanner, ArtistasContainer, FiltroArtistas } from "./index";
import { useFetch, userOrderItems } from "../../hooks/";
import { filtrar } from "../../helpers/filterArtists";

export const Artistas = ({ idioma }) => {
  const [artistasFilter, setArtistasFilter] = useState([]);
  const { data: artistas, isLoading } = useFetch("/artistas", []);
  const { state: artistasSort } = userOrderItems(artistas);

  const filtrarAll = (item) => {
    filtrar(item, setArtistasFilter, artistas);
  };

  return (
    <div className="page-artistas">
      {isLoading && <Loader />}

      <ArtistasBanner Link={Link} idioma={idioma} />
      <section className="containerAll">
        <FiltroArtistas idioma={idioma} filtrar={filtrarAll} />
        {artistasFilter.length > 0 ? (
          <ArtistasContainer artistasSort={artistasFilter} />
        ) : (
          <ArtistasContainer artistasSort={artistasSort} />
        )}
      </section>
    </div>
  );
};
