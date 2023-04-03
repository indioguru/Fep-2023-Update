import { Loader } from "../../Common/Loader";
import { useFetch } from "../../hooks/useFetch";

export const Sostenibilidad = ({ idioma }) => {
  const { data, isLoading } = useFetch("/pagina-sostenibilidad");
  return (
    <div className="sostenibilidad_page">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <div className="sostenibilidad_page_banner">
            <div className="logo">
              <img src="/assets/etapa4/logodesktop.png" alt="" />
            </div>

            <div className="suelo"></div>

            <div className="containerAll">
              <img
                className="personaje"
                src="/assets/viajero/personajerosada.png"
                alt=""
              />
              <div className="info">
                <h2>{data.titulo}</h2>

                <p>{data.descripcion}</p>
              </div>
            </div>

            <div className="nubes">
              <img
                className="nube nube1"
                src="/assets/etapa4/nube1.png"
                alt="nube"
              />
              <img
                className="nube nube2"
                src="/assets/etapa4/nube2.png"
                alt="nube"
              />
            </div>
          </div>

          <div className="sostenibilidad_items">
            {data.items.map((item, i) => (
              <div
                key={`sostenibilidad_icon${i + 1}`}
                className="sostenibilidad_item"
              >
                <div className="imagen"></div>
                <div className="containerAll">
                  <img src={item.icono.url} alt="icono sacado del api" />
                  <h3>{item.titulo}</h3>

                  <p>{item.descripcion}</p>
{/* 
                  {item.titulo === "PROYECTO ESPORAS" && (
                    <a href="" target="_blank" className="tertiary_boton">
                      Ver más
                    </a>
                  )} */}
                </div>
              </div>
            ))}
          </div>

          <div className="sostenibilidad_item know_more">
            <div className="imagen"></div>

            <div className="containerAll">
              <h3>{data.conoce_titulo}</h3>

              <p>{data.conoce_descripcion}</p>
{/* 
              <a className="principalButtom" href="" target="_blank">
                Ver más
              </a> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
