import React, { useCallback, useEffect, useState } from "react";

// import entradas from "./entradasIndividuales.json";
import { getEntradas } from "../../../api/api";
export const EntradasIndividuales = ({ idioma }) => {
  const [vip, setVip] = useState([]);
  const [general, setGeneral] = useState([]);
  const [entradasIndividuales, setEntradasIndividuales] = useState([]);

  const fetchData = useCallback(async () => {
    await getEntradas().then((data) => setEntradasIndividuales(data.data));
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  useEffect(() => {
    const vip = entradasIndividuales.filter((item) => {
      return item.tipo === "vip";
    });
    const general = entradasIndividuales.filter((item) => {
      return item.tipo === "general";
    });

    setVip(vip);
    setGeneral(general);
  }, [entradasIndividuales]);

  return (
    <div className="containerAll">
      <div className="titulo">
        {idioma === "ESP" ? <h2>INDIVIDUALES</h2> : <h2>INDIVIDUALS</h2>}
      </div>

      <div className="entradas_all_container individuales">
        <div className="entradas_container entradas_container_general">
          {idioma === "ESP" ? (
            <div className="entradas_titulo">INDIVIDUALES GENERAL</div>
          ) : (
            <div className="entradas_titulo">INDIVIDUAL GENERAL</div>
          )}
          <img
            className="enrredadera"
            src="/assets/etapa4/enrredadera.png"
            alt="enrredadera"
          />
          <div className="entradas_items">
            <div className="entrada_item">
              {idioma === "ESP" ? (
                <p className="mini_title">JUEVES 24 DE MARZO 2023</p>
              ) : (
                <p className="mini_title">THURSDAY, MARCH 24, 2023</p>
              )}

              {general.map((entrada, i) => {
                return (
                  entrada.dia === "1" && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">STAGE {entrada.etapa}</p>
                      )}

                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>

            <div className="entrada_item">
              {idioma === "ESP" ? (
                <p className="mini_title">VIERNES 25 DE MARZO 2023</p>
              ) : (
                <p className="mini_title">FRIDAY, MARCH 25, 2023</p>
              )}

              {general.map((entrada, i) => {
                return (
                  entrada.dia === "2" && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">STAGE {entrada.etapa}</p>
                      )}

                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>

            <div className="entrada_item">
              {idioma === "ESP" ? (
                <p className="mini_title">SÁBADO 26 DE MARZO 2023</p>
              ) : (
                <p className="mini_title">SATURDAY, MARCH 26, 2023</p>
              )}

              {general.map((entrada, i) => {
                return (
                  entrada.dia === "3" && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">STAGE {entrada.etapa}</p>
                      )}
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>

            <div className="entrada_item">
              {idioma === "ESP" ? (
                <p className="mini_title"> DOMINGO 26 DE MARZO 2023</p>
              ) : (
                <p className="mini_title">SUNDAY, MARCH 26, 2023</p>
              )}

              {general.map((entrada, i) => {
                return (
                  entrada.dia === "4" && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">STAGE {entrada.etapa}</p>
                      )}
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>

        <div className="entradas_container entradas_container_vip">
          {idioma === "ESP" ? (
            <div className="entradas_titulo">INDIVIDUALES VIP</div>
          ) : (
            <div className="entradas_titulo">INDIVIDUAL VIP</div>
          )}

          <div className="entradas_items">
            <img
              className="rosa"
              src="/assets/etapa4/entradas/rosa.png"
              alt="rosa"
            />

            <div className="entrada_item">
              {idioma === "ESP" ? (
                <p className="mini_title">JUEVES 24 DE MARZO 2023</p>
              ) : (
                <p className="mini_title">THURSDAY, MARCH 24, 2023</p>
              )}
              {vip.map((entrada, i) => {
                return (
                  entrada.dia === "1" && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA ÚNICA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">SINGLE STAGE {entrada.etapa}</p>
                      )}
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>

            <div className="entrada_item">
              {idioma === "ESP" ? (
                <p className="mini_title">VIERNES 25 DE MARZO 2023</p>
              ) : (
                <p className="mini_title">FRIDAY, MARCH 25, 2023</p>
              )}

              {vip.map((entrada, i) => {
                return (
                  entrada.dia === "2" && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA ÚNICA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">SINGLE STAGE {entrada.etapa}</p>
                      )}
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>

            <div className="entrada_item">
              {idioma === "ESP" ? (
                <p className="mini_title">SÁBADO 26 DE MARZO 2023</p>
              ) : (
                <p className="mini_title">SATURDAY, MARCH 26, 2023</p>
              )}

              {vip.map((entrada, i) => {
                return (
                  entrada.dia === "3" && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA ÚNICA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">SINGLE STAGE {entrada.etapa}</p>
                      )}
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>

            <div className="entrada_item">
              {idioma === "ESP" ? (
                <p className="mini_title"> DOMINGO 26 DE MARZO 2023</p>
              ) : (
                <p className="mini_title">SUNDAY, MARCH 26, 2023</p>
              )}
              {vip.map((entrada, i) => {
                return (
                  entrada.dia === "4" && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA ÚNICA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">SINGLE STAGE {entrada.etapa}</p>
                      )}
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {idioma === "ESP" ? (
        <p className="trm_info">
          El precio de la boleta se calcula diariamente con la TRM del día, esto
          puede hacer variar el valor final de tu entrada.
        </p>
      ) : (
        <p className="trm_info">
          The price of the ticket is calculated daily with the TRM of the day
          may vary the final value of your ticket.
        </p>
      )}

      <a
        className="principalButtom ga4-call_to_action-entradas-seccion_home"
        target="_blank"
        href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
      >
        {idioma === "ESP" ? <>COMPRAR ENTRADAS</> : <>BUY TICKETS</>}
      </a>
    </div>
  );
};
