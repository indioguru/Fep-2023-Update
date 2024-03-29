import React from "react";
import conductorElegido from "./ConductorElegido.json";
const ConductorElegido = ({ idioma }) => {
  return (
    <div className="conductorElegido">
      <div className="conductorElegido_container containerAll">
        {idioma === "ESP" ? (
          <h1 className="title">CONDUCTOR ELEGIDO</h1>
        ) : (
          <h1 className="title">SELECTED DRIVER</h1>
        )}

        <img
          className="planta"
          src="/assets/vip/plantarosada.png"
          alt="planta"
        />

        <div className="grids ">
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

              {conductorElegido.map((item) => {
                return (
                  item.combo_3_dias && (
                    <div className="item">
                      <p className="tipo">
                        <span>
                          {idioma === "ESP" ? (
                            <> {item.tipo}</>
                          ) : (
                            <>{item.tipo_ingles}</>
                          )}
                        </span>
                      </p>
                      <p className="dia">{item.precio}</p>
                      <p className="dia">{item.full_precio}</p>
                    </div>
                  )
                );
              })}
            </div>
          </div>

          <div className="transporte_item transporte_item_elegido">
            <p className="titulo_buses">{/* VANS */}</p>
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

              {conductorElegido.map((bus) => {
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
            </div>
          </div>
        </div>

        <a
          className="principalButtom ga4-call_to_action-como_llegar-comprar-conductor"
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
        >
          {idioma === "ESP" ? <> COMPRAR TRANSPORTE</> : <>Tickets</>}
        </a>
      </div>
    </div>
  );
};

export default ConductorElegido;
