import { useEffect, useState } from "react";
import memories from "./Memorias.json";
export const Memorias = ({ idioma }) => {
  const [cardMemories, setCardMemories] = useState([]);

  useEffect(() => {
    setCardMemories(memories);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let body = document.querySelector("body");
      body.style.overflowY = "hidden";
      body.style.overflowY = "scroll";
    }, 500);
  }, []);

  return (
    <div className="memoriasPage">
      <div className="memoriasPage_container">
        <div className="all_banner">
          <div className="logo">
            <img src="/assets/etapa4/logodesktop.png" alt="logo" />
          </div>

          <div className="content_info containerAll">
            {idioma === "ESP" ? (
              <h1>MEMORIAS DEL PASADO</h1>
            ) : (
              <h1>MEMORIES OF THE PAST</h1>
            )}

            {idioma === "ESP" ? (
              <p>
                Viajemos al pasado y revivamos los momentos más <br />{" "}
                memorables que han dado vida a Un Mundo Distinto.
              </p>
            ) : (
              <p>
                Let's take a trip back in time and relive the most <br />{" "}
                memorable moments that have given life to A Different World.
              </p>
            )}
          </div>

          <div className="content_banner">
            <div className="containerAll">
              <div className="suelo"></div>
              <img
                className="sol "
                src="/assets/etapa5/solnaranja.png"
                alt="sol"
              />
              <img
                className="corazon "
                src="/assets/etapa4/corazoncamarografo.png"
                alt="corazon"
              />
            </div>

            <img
              className="arbusto"
              src="/assets/etapa5/arbustoslado.png"
              alt="arbusto"
            />
          </div>
        </div>

        <div className="background_setcion_two">
          <div className="content_cards  ">
            {cardMemories.map((item, i) => (
              <div key={i} className="card ">
                <img src={item.img} alt="img_memorias" />
                <h1>{item.year}</h1>
                <p>{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
