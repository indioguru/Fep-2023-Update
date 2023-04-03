import { Link } from "react-router-dom";
import { Artista } from "../../Common/Artista";
import { useSlider, useChangeBackgroundColor } from "../../hooks";

export const ArtistasDesktop = ({ artistas, idioma }) => {
  const { number, setCurrentSlideSlider } = useSlider(artistas, "mySlides", "dot", true);
  useChangeBackgroundColor(number);

  return (
    <>
      <div className="dots">
        <h2>{idioma === "ESP" ? <>ARTISTAS</> : <>ARTISTS</>}</h2>

        <div className="dots_container">
          {artistas.map((artista, i) => (
            <div
              key={i}
              className="dot"
              onClick={() => {
                setCurrentSlideSlider(i + 1);
              }}
            >
              {artista.nombre}
            </div>
          ))}
        </div>

        <Link className="principalButtom " to="/artistas">
          {idioma === "ESP" ? <>VER TODOS</> : <>MORE ARTISTS</>}
        </Link>
      </div>

      <div className="allSlides">
        {artistas.map((artista, i) => (
          <div key={i} className="mySlides fade">
            <Artista
              marco={`/assets/etapa5/marcos/marco_${i + 1}.png`}
              artista={artista}
            />
          </div>
        ))}

        <div className="flechas">
          <div className="prev">
            <img src="/assets/iconos/flechablanca1.png" alt="flechablanca" />
          </div>
          <div className="next">
            <img src="/assets/iconos/flechablanca2.png" alt="flechablanca" />
          </div>
        </div>
      </div>
    </>
  );
};
