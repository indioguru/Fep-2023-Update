import { ArtistasDesktop } from "./ArtistasDesktop";
import { ArtistasMovil } from "./ArtistasMovil";

export const Artistas = ({ artistas, idioma }) => {

  return (
    <div className="home-artistas">
      {/* Para movil */}
      {window.innerWidth < 999 && (
        <ArtistasMovil artistas={artistas} idioma={idioma} />
      )}

      {/* Para desktop */}
      {window.innerWidth > 999 && (
        <ArtistasDesktop artistas={artistas} idioma={idioma} />
      )}
    </div>
  );
};
