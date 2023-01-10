import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Artista } from "../../Common/Artista";
// import { useNavigate } from "react-router-dom";
export const Artistas = ({ idioma, artistas }) => {
  const [currentSlideSlider, setCurrentSlideSlider] = useState(0);
  const [number, setNumber] = useState(1);

  // const navigate = useNavigate();
  useEffect(() => {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
      setNumber(slideIndex);
    }

    function showSlides(n) {
      let slides = document.getElementsByClassName("mySlides");
      let i;
      let dots = document.getElementsByClassName("dot");

      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }

    const right = document.querySelector(".next");
    right.addEventListener("click", function () {
      plusSlides(+1, false);
    });

    const left = document.querySelector(".prev");
    let slides = document.getElementsByClassName("mySlides");
    left.addEventListener("click", function () {
      plusSlides(-1, false);
    });

    if (currentSlideSlider > 0) {
      showSlides((slideIndex = currentSlideSlider));
      setNumber(currentSlideSlider);
    }
  }, [currentSlideSlider]);
  console.log(number);

  const changeBackgroundColor = () => {
    const colors = [
      "#743696",
      "#f4792e",
      "#2f77bd",
      "#0f6338",
      "#714a48",
      "#ca5448",
    ];

    const selectColor = document.querySelector(".home-artistas");
    selectColor.style.background = colors[number - 1];
  };

  useEffect(() => {
    changeBackgroundColor();
  }, [changeBackgroundColor]);

  return (
    <div className="home-artistas">
      {/* Para movil */}

      {window.innerWidth < 999 && (
        <>
          {artistas.map((artista, i) => (
            <div key={i} className="mySlides fade">
              <Artista
                marco={`/assets/etapa5/marcos/${i + 1}.png`}
                artista={artista}
              />
            </div>
          ))}

          <h2>{idioma === "ESP" ? <>ARTISTAS</> : <>ARTISTS</>}</h2>
          <div className="dots">
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

          <div className="flechas">
            <div className="prev">
              <img src="/assets/iconos/flechablanca1.png" alt="flechablanca" />
            </div>
            <div className="next">
              <img src="/assets/iconos/flechablanca2.png" alt="flechablanca" />
            </div>
          </div>

          <Link className="principalButtom " to="/artistas">
            {idioma === "ESP" ? <>VER TODOS</> : <>MORE ARTISTS</>}
          </Link>
        </>
      )}

      {/* Para desktop */}
      {window.innerWidth > 999 && (
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
                <img
                  src="/assets/iconos/flechablanca1.png"
                  alt="flechablanca"
                />
              </div>
              <div className="next">
                <img
                  src="/assets/iconos/flechablanca2.png"
                  alt="flechablanca"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
