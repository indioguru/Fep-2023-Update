import React from "react";
import transporte from "./transporte.json";

export const Transporte = ({ idioma }) => {
  return (
    <div className="transporte-section">
      <img className="nube nube1" src="/assets/home/nube1.png" alt="nube" />
      <img className="nube nube2" src="/assets/home/nube2.png" alt="nube" />

      {window.innerWidth > 999 && (
        // -------------planta 1----------
        <img
          className="planta1"
          src="/assets/etapa4/enredadera2.png"
          alt="enredadera2"
        />
      )}

      <div className="containerAll">
        <div className="titulo">
          <h2>{idioma === "ESP" ? <>Transporte</> : <>Transport</>}</h2>
          <p>{idioma === "ESP" ? <>BUSES</> : <>BUS</>}</p>
        </div>

        <div className="transporte-section_containerAll">
          {/* BUSES */}
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
              {transporte.map((item, i) => (
                <div key={i}>
                  {item.buses.map((bus, i) => {
                    return (
                      bus.combo_3_dias && (
                        <div key={i} className="item">
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
                </div>
              ))}
              {/* <p className="mini_title">CONDUCTOR ELEGIDO</p>

              <div className="item item_nombres">
                <p className="tipo">
                  <span></span>
                </p>
                <p className="dia">PRECIO</p>

                <p className="dia">PRECIO + SERVICIO</p>
              </div>

              {transporte.map((item) => (
                <>
                  {item.buses.map((bus) => {
                    return (
                      !bus.combo_3_dias && (
                        <div className="item">
                          <p className="tipo">
                            <span>{bus.tipo}</span>
                          </p>
                          <p className="dia">{bus.precio}</p>
                          <p className="dia">{bus.full_precio}</p>
                        </div>
                      )
                    );
                  })}
                </>
              ))} */}
            </div>

            {window.innerWidth < 999 && (
              // -----------------planta normal-----------
              <img
                className="planta1"
                src="/assets/etapa4/transporte/planta1.png"
                alt="planta1"
              />
            )}
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
              {transporte.map((item, i) => (
                <div key={i}>
                  {item.elegido.map((bus, i) => {
                    return (
                      bus.combo_3_dias && (
                        <div key={i} className="item">
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
                </div>
              ))}
              {/* 
              <p className="mini_title">Combo 4 días</p>

              <div className="item item_nombres">
                <p className="tipo">
                  <span></span>
                </p>
                <p className="dia">PRECIO</p>

                <p className="dia">PRECIO + SERVICIO</p>
              </div>
              {transporte.map((item) => (
                <>
                  {item.elegido.map((bus) => {
                    return (
                      !bus.combo_3_dias && (
                        <div className="item">
                          <p className="tipo">
                            <span>{bus.tipo}</span>
                          </p>
                          <p className="dia">{bus.precio}</p>
                          <p className="dia">{bus.full_precio}</p>
                        </div>
                      )
                    );
                  })}
                </>
              ))} */}
            </div>
            {window.innerWidth < 999 && (
              <div className="contet_button_entries">
                <a
                  className="principalButtom ga4-call_to_action-comprar_transporte-home"
                  target="_blank"
                  href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
                >
                  {idioma === "ESP" ? <> Comprar transporte</> : <>Tickets</>}
                </a>

                <a
                  className="principalButtom ga4-call_to_action-comprar_transporte-home"
                  target="_blank"
                  href=" https://www.latamairlines.com/co/es/ofertas/ofertas-latam?origin=ALL&destination=BOG"
                  id="vuelos"
                >
                  {idioma === "ESP" ? <> Comprar vuelos </> : <>Buy flights </>}
                </a>
              </div>
            )}
          </div>
        </div>

        {window.innerWidth > 999 && (
          <div className="contet_button_entries">
            <a
              className="principalButtom ga4-call_to_action-comprar_transporte-home"
              target="_blank"
              href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
            >
              {idioma === "ESP" ? <> Comprar transporte</> : <>Tickets</>}
            </a>

            <a
              className="principalButtom ga4-call_to_action-comprar_transporte-home"
              target="_blank"
              id="vuelos"
              href=" https://www.latamairlines.com/co/es/ofertas/ofertas-latam?origin=ALL&destination=BOG"
            >
              {idioma === "ESP" ? <> Comprar vuelos </> : <>Buy flights </>}
            </a>
          </div>
        )}
      </div>

      <div className="suelo"></div>

      <div className="img_transporte"></div>
      {/* <img
        className="img_transporte"
        src="/assets/etapa4/img_transporte.png"
        alt="img_transporte"
      /> */}

      <img
        className="nube nube_bottom1"
        src="/assets/home/nube1.png"
        alt="nube"
      />
      <img
        className="nube nube_bottom2"
        src="/assets/home/nube2.png"
        alt="nube"
      />
      <img
        className="nube nube_bottom3"
        src="/assets/home/nube2.png"
        alt="nube"
      />

      {/* ---------------------florencia normal--------------- */}
      <img
        className="florencia"
        src="/assets/etapa4/transporte/florencia.png"
        alt="florencia"
      />

      {window.innerWidth > 999 && (
        <>
          <img
            className="miniplantas miniplantas1"
            src="/assets/etapa4/transporte/miniplantas.png"
            alt="miniplantas"
          />

          <img
            className="miniplantas miniplantas2"
            src="/assets/etapa4/transporte/miniplantas.png"
            alt="miniplantas"
          />
        </>
      )}
    </div>
  );
};
