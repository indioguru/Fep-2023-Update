import { Link } from "react-router-dom";
import { urlGenerator } from "../helpers/urlsGenerator";

export const Artista = ({ artista, marco }) => {
  return (
    <div className="artista-common ">
      <Link to={`/artistas/${urlGenerator(artista)}`}>
        {artista.imagen.formats.small ? (
          <img
            className="artista_img"
            src={artista.imagen.formats.small.url}
            alt="artista"
            loading="lazy"
          />
        ) : (
          <img
            className="artista_img"
            src={artista.imagen.url}
            alt="artista"
            loading="lazy"
          />
        )}

        <img className="marco" src={marco} alt="marco" loading="lazy" />

        <div className="info">
          <p className="nombre">{artista.nombre}</p>
        </div>
        {artista.spotify !== "" && (
          <a
            className="spotify_link ga4-call_to_action-spotify-galeria"
            href={artista.spotify}
            target="_blank"
          >
            <img
              src="/assets/etapa5/spotifyblanco.png"
              alt="spotify"
              loading="lazy"
            />
          </a>
        )}
      </Link>
    </div>
  );
};
