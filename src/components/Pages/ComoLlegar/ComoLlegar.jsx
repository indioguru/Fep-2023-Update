import Mapa from "./mapa/Mapa";
import Buses from "./buses/Buses";
import Vans from "./vans/Vans";
import ConductorElegido from "./conductorElegido/ConductorElegido";
import Media from "react-media";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../Common/Loader";

export const ComoLlegar = ({ idioma }) => {
  const { data, isLoading } = useFetch("/pagina-de-como-llegar");

  return (
    <div className="comoLlegar">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <div className="comoLlegar_container">
            <div className="logo">
              <img src="/assets/etapa4/logodesktop.png" alt="" />
            </div>

            {idioma === "ESP" ? (
              <h1 className="title">CÓMO LLEGAR</h1>
            ) : (
              <h1 className="title">HOW ARRIVE</h1>
            )}

            <div className="content_banner ">
              <img
                className="nube1"
                src="/assets/etapa4/nubes/pardenubes.png"
                alt="nube"
              />

              <img
                className="nube2"
                src="/assets/etapa4/nubes/nube1.png"
                alt="nube"
              />
              <div className="containerAll2">
                <img
                  className="flor"
                  src="/assets/etapa4/transporte/florencia.png"
                  alt="flor"
                />

                <img
                  className="transporte"
                  src="/assets/etapa4/transporte/img_transporte.png"
                  alt="transporte"
                />
              </div>

              <div className="suelo"></div>

              <Media query="(max-width: 1200px)">
                {(resolution) => {
                  return resolution ? (
                    ""
                  ) : (
                    <img
                      className="enrredadera"
                      src="/assets/etapa4/enredadera2.png"
                      alt="enrredadera"
                    />
                  );
                }}
              </Media>
            </div>
          </div>
          <Mapa idioma={idioma} data={data} />
          <Buses idioma={idioma} data={data} />
          {/* <Vans idioma={idioma} />
            <ConductorElegido idioma={idioma} /> */}
        </>
      )}
    </div>
  );
};
