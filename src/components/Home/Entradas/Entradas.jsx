import React, { useCallback, useEffect, useState } from "react";
// import { Beneficios } from "../Beneficios/Beneficios";
// import { Alcancias } from "./Alcancias";
import { Link } from "react-router-dom";
// import entradas from "./entradas.json";
import { getEntradasCombo } from "../../api/api";
export const Entradas = ({ idioma }) => {
  const [vip, setVip] = useState([]);
  const [general, setGeneral] = useState([]);
  const [entradasCombos, setEntradasCombos] = useState([]);

  const fetchData = useCallback(async () => {
    await getEntradasCombo().then((data) => setEntradasCombos(data.data));
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  useEffect(() => {
    const vip = entradasCombos.filter((item) => {
      return item.tipo === "vip";
    });
    const general = entradasCombos.filter((item) => {
      return item.tipo === "general";
    });

    setVip(vip);
    setGeneral(general);
  }, [entradasCombos]);

  // useEffect(() => {
  //   const vip = entradas.filter((item) => {
  //     return item.tipo === "vip";
  //   });
  //   const general = entradas.filter((item) => {
  //     return item.tipo === "general";
  //   });

  //   setVip(vip);
  //   setGeneral(general);
  // }, []);

  return (
    <div className="entradas-section">
      <div className="containerAll">
        <div className="titulo">
          <h2>{idioma === "ESP" ? <> Entradas</> : <> Tickets</>}</h2>
        </div>

        <div className="entradas_all_container">
          <div className="entradas_container entradas_container_general">
            <div className="entradas_titulo">
              {idioma === "ESP" ? <> COMBOS GENERAL</> : <>GENERAL COMBOS </>}
            </div>

            <img
              className="enrredadera"
              src="/assets/etapa4/enrredadera.png"
              alt="enrredadera"
            />

            <div className="entradas_items">
              <p className="mini_title">
                {idioma === "ESP" ? (
                  <>COMBOS GENERAL 3 DÍAS</>
                ) : (
                  <>GENERAL 3 DAY COMBOS </>
                )}
              </p>

              {general.map((entrada, i) => {
                return (
                  entrada.combo_3_dias && (
                    <div key={i} className="entrada">
                      <p className="etapa">
                        {" "}
                        {idioma === "ESP" ? <> ETAPA</> : <>STAGE </>}{" "}
                        {entrada.etapa}
                      </p>
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
              <p className="mini_title">
                {idioma === "ESP" ? (
                  <> COMBOS GENERAL 4 DÍAS</>
                ) : (
                  <>GENERAL 4 DAY COMBOS </>
                )}
              </p>

              {general.map((entrada, i) => {
                return (
                  !entrada.combo_3_dias && (
                    <div key={i} className="entrada">
                      <p className="etapa">
                        {idioma === "ESP" ? <> ETAPA</> : <>STAGE </>}
                        {entrada.etapa}
                      </p>
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>
          </div>

          <div className="entradas_container entradas_container_vip">
            <div className="entradas_titulo">
              {idioma === "ESP" ? <> COMBOS VIP</> : <>VIP COMBOS</>}
            </div>

            <div className="entradas_items">
              <img
                className="rosa"
                src="/assets/etapa4/entradas/rosa.png"
                alt="rosa"
              />
              <p className="mini_title">
                {idioma === "ESP" ? (
                  <> COMBOS VIP 3 DÍAS</>
                ) : (
                  <>VIP 3 DAY COMBOS</>
                )}
              </p>

              {vip.map((entrada, i) => {
                return (
                  entrada.combo_3_dias && (
                    <div key={i} className="entrada">
                      <p className="etapa">
                        {" "}
                        {idioma === "ESP" ? (
                          <> ETAPA ÚNICA</>
                        ) : (
                          <> SINGLE STAGE </>
                        )}
                      </p>
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}

              <p className="mini_title">
                {idioma === "ESP" ? (
                  <>COMBOS VIP 4 DÍAS</>
                ) : (
                  <>VIP 4 DAY COMBOS</>
                )}
              </p>
              {vip.map((entrada, i) => {
                return (
                  !entrada.combo_3_dias && (
                    <div key={i} className="entrada">
                      <p className="etapa">
                        {" "}
                        {idioma === "ESP" ? (
                          <> ETAPA ÚNICA</>
                        ) : (
                          <> SINGLE STAGE </>
                        )}
                      </p>
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>

        <p className="trm_info">
          {idioma === "ESP" ? (
            <>
              El precio de la boleta se calcula diariamente con la TRM del día,
              esto puede hacer variar el valor final de tu entrada.
            </>
          ) : (
            <>
              The price of the ticket is calculated daily with the MRT, this may
              vary the final value of your ticket.
            </>
          )}
        </p>

        <div className="container_button">
          <Link className="principalButtom " to="/entradas">
            {idioma === "ESP" ? (
              <>Más entradas y combos</>
            ) : (
              <>More tickets and combos</>
            )}
          </Link>
        </div>
      </div>
      {/* <Beneficios idioma={idioma} />

      <Alcancias idioma={idioma} /> */}
    </div>
  );
};
