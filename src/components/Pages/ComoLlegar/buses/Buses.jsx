import { useEffect, useState } from "react";
import Media from "react-media";
import transporte from "../../../Home/Transporte/transporte.json";

const TransportePage = ({ idioma, data }) => {
  const [transporteItems, setTransporteItems] = useState({});
  useEffect(() => {
    const bus_4 = data.transporte.filter(
      (item) => item.transporte_TIPO === "Bus (4 Días) "
    );
    const bus_3 = data.transporte.filter(
      (item) => item.transporte_TIPO === "Bus (3 Días)"
    );

    const bus_1 = data.transporte.filter(
      (item) => item.transporte_TIPO === "Bus (1 Día)"
    );

    setTransporteItems({
      ...transporteItems,
      bus_4,
      bus_3,
      bus_1,
    });

    console.log(transporteItems);
  }, [data]);
  return (
    <div className="buses">
      <Media query="(max-width: 999px)">
        {(resolution) => {
          return resolution ? (
            ""
          ) : (
            <img
              className="planta1_destock"
              src="/assets/etapa4/transporte/planta1.png"
              alt="planta1"
            />
          );
        }}
      </Media>

      {Object.keys(transporteItems).length > 0 && (
        <div className="buses_container containerAll ">
          <div className="content_info ">
            {idioma === "ESP" ? <h1>TRANSPORTE</h1> : <h1>TRANSPORT</h1>}
            {idioma === "ESP" ? <h2>BUSES</h2> : <h2>BUS</h2>}
          </div>

          <div className="grids ">
            <div className="transporte_item transporte_item_elegido">
              <p className="titulo_buses">
                <img
                  className="negramariposa1"
                  src="/assets/etapa4/transporte/negramariposa1.png"
                  alt="negramariposa1"
                />
                {/* VANS */}
              </p>
              <div className="transporte_item_white ">
                <p className="mini_title">
                  {idioma === "ESP" ? <>INDIVIDUAL</> : <>INDIVIDUAL</>}
                </p>

                <div className="item item_nombres">
                  <p className="tipo">
                    <span></span>
                  </p>
                  <p className="dia">
                    {idioma === "ESP" ? <>PRECIO</> : <>PRICE</>}
                  </p>

                  <p className="dia">
                    {idioma === "ESP" ? (
                      <> PRECIO + SERVICIO</>
                    ) : (
                      <>PRICE + SERVICE</>
                    )}
                  </p>
                </div>
                {/* transporte individual */}
                {transporteItems.bus_1.map((bus) => (
                  <div className="item">
                    <p className="tipo">
                      <span>
                        {idioma === "ESP" ? (
                          <> {bus.viaje}</>
                        ) : (
                          <>{bus.tipo_ingles}</>
                        )}
                      </span>
                    </p>
                    <p className="dia">{bus.precio}</p>
                    <p className="dia">{bus.precio_y_servicio}</p>
                  </div>
                ))}
              </div>

              <Media query="(max-width: 999px)">
                {(resolution) => {
                  return resolution ? (
                    <img
                      className="planta1"
                      src="/assets/etapa4/transporte/planta1.png"
                      alt="planta1"
                    />
                  ) : (
                    ""
                  );
                }}
              </Media>
            </div>
            {/* BUSES */}
            <div className="transporte_item transporte_item_elegido">
              <p className="titulo_buses">{/* VANS */}</p>
              <div className="transporte_item_white ">
                <p className="mini_title">
                  {idioma === "ESP" ? <>Combo 3 días</> : <>3 DAY combo</>}
                </p>

                <div className="item item_nombres">
                  <p className="tipo">
                    <span></span>
                  </p>
                  <p className="dia">
                    {idioma === "ESP" ? <>PRECIO</> : <>PRICE</>}
                  </p>

                  <p className="dia">
                    {idioma === "ESP" ? (
                      <> PRECIO + SERVICIO</>
                    ) : (
                      <>PRICE + SERVICE</>
                    )}
                  </p>
                </div>
                {/* Transporte 3 días */}
                {transporteItems.bus_3.map((bus) => (
                  <div className="item">
                    <p className="tipo">
                      <span>
                        {idioma === "ESP" ? (
                          <> {bus.viaje}</>
                        ) : (
                          <>{bus.tipo_ingles}</>
                        )}
                      </span>
                    </p>
                    <p className="dia">{bus.precio}</p>
                    <p className="dia">{bus.precio_y_servicio}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="transporte_item transporte_item_elegido conductor_elegido">
              <img
                className="mariposanegra2"
                src="/assets/home/mariposanegra2.png"
                alt="mariposanegra2"
              />
              <p className="titulo_buses">{/* BUSES */}</p>

              <div className="transporte_item_white ">
                <p className="mini_title">
                  {idioma === "ESP" ? <>Combo 4 días</> : <>4 DAY combo</>}
                </p>

                <div className="item item_nombres">
                  <p className="tipo">
                    <span></span>
                  </p>
                  <p className="dia">
                    {idioma === "ESP" ? <>PRECIO</> : <>PRICE</>}
                  </p>

                  <p className="dia">
                    {idioma === "ESP" ? (
                      <> PRECIO + SERVICIO</>
                    ) : (
                      <>PRICE + SERVICE</>
                    )}
                  </p>
                </div>

                {/* Transporte 4 días */}
                {transporteItems.bus_4.map((bus) => (
                  <div className="item">
                    <p className="tipo">
                      <span>
                        {idioma === "ESP" ? (
                          <> {bus.viaje}</>
                        ) : (
                          <>{bus.tipo_ingles}</>
                        )}
                      </span>
                    </p>
                    <p className="dia">{bus.precio}</p>
                    <p className="dia">{bus.precio_y_servicio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            className="principalButtom ga4-call_to_action-como_llegar-comprar-buses"
            target="_blank"
            href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
          >
            {idioma === "ESP" ? <> COMPRAR TRANSPORTE</> : <>Tickets</>}
          </a>
        </div>
      )}
    </div>
  );
};

export default TransportePage;
