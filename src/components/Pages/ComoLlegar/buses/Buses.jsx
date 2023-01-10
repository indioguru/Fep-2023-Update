import React from "react";
import Media from "react-media";
import transporte from "../../../Home/Transporte/transporte.json";

const TransportePage = ({ idioma }) => {
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
              {transporte.map((item) => (
                <>
                  {item.buses.map((bus) => {
                    return (
                      bus.combo_3_dias && (
                        <div className="item">
                          <p className="tipo">
                            <span>
                              {idioma === "ESP" ? (
                                <> {bus.tipo}</>
                              ) : (
                                <>{bus.tipo_ingles}</>
                              )}
                            </span>
                          </p>
                          <p className="dia">{bus.precio}</p>
                          <p className="dia">{bus.full_precio}</p>
                        </div>
                      )
                    );
                  })}
                </>
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
              {transporte.map((item) => (
                <>
                  {item.buses.map((bus) => {
                    return (
                      bus.combo_3_dias && (
                        <div className="item">
                          <p className="tipo">
                            <span>
                              {idioma === "ESP" ? (
                                <> {bus.tipo}</>
                              ) : (
                                <>{bus.tipo_ingles}</>
                              )}
                            </span>
                          </p>
                          <p className="dia">{bus.precio}</p>
                          <p className="dia">{bus.full_precio}</p>
                        </div>
                      )
                    );
                  })}
                </>
              ))}
            </div>
          </div>

          {/* CONDUCTOR ELEGIDO */}
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
                  PRECIO
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
              {transporte.map((item) => (
                <>
                  {item.elegido.map((bus) => {
                    return (
                      bus.combo_3_dias && (
                        <div className="item">
                          <p className="tipo">
                            <span>
                              {idioma === "ESP" ? (
                                <> {bus.tipo}</>
                              ) : (
                                <>{bus.tipo_ingles}</>
                              )}
                            </span>
                          </p>
                          <p className="dia">{bus.precio}</p>
                          <p className="dia">{bus.full_precio}</p>
                        </div>
                      )
                    );
                  })}
                </>
              ))}
            </div>
            {/* {window.innerWidth < 999 && (
              <a
                className="principalButtom ga4-call_to_action-comprar_transporte-home"
                target="_blank"
                href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
              >
                {idioma === "ESP" ? <> Comprar transporte</> : <>Tickets</>}
              </a>
            )} */}
          </div>
        </div>

        <a
          className="principalButtom ga4-call_to_action-comprar_transporte-home"
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
        >
          {idioma === "ESP" ? <> COMPRAR TRANSPORTE</> : <>Tickets</>}
        </a>
      </div>
    </div>
  );
};

export default TransportePage;
