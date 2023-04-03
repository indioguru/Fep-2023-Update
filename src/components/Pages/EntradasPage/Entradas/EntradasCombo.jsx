import React, { useCallback, useEffect, useState } from "react";
import { Beneficios } from "../Beneficios/Beneficios";
// import entradas from "./entradas.json";
import { EntradasIndividuales } from "./EntradasIndividuales";
import { getEntradasCombo } from "../../../api/api";
export const EntradasCombo = ({ idioma }) => {
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

  return (
    <div className="entradas-section">
      <EntradasIndividuales idioma={idioma} />
      <div className="containerAll">
        <div className="titulo">
          <h2>COMBOS</h2>
        </div>

        <div className="entradas_all_container">
          <div className="entradas_container entradas_container_general">
            <div className="entradas_titulo"> GENERAL</div>
            <img
              className="enrredadera"
              src="/assets/etapa4/enrredadera.png"
              alt="enrredadera"
            />
            <div className="entradas_items">
              {idioma === "ESP" ? (
                <p className="mini_title">3 DÍAS (V,S,D)</p>
              ) : (
                <p className="mini_title">3 DAYS (F,S,S)</p>
              )}
              {general.map((entrada, i) => {
                return (
                  entrada.combo_3_dias && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">STAGE {entrada.etapa}</p>
                      )}

                      {entrada.agotado ? (
                        <p className="agotado">AGOTADO</p>
                      ) : (
                        <p className="precio">{entrada.precio} </p>
                      )}
                    </div>
                  )
                );
              })}

              {idioma === "ESP" ? (
                <p className="mini_title"> 4 DÍAS (J,V,S,D)</p>
              ) : (
                <p className="mini_title"> 4 DAYS (T,F,S,S)</p>
              )}

              {general.map((entrada, i) => {
                return (
                  !entrada.combo_3_dias && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">STAGE {entrada.etapa}</p>
                      )}
                      {entrada.agotado ? (
                        <p className="agotado">AGOTADO</p>
                      ) : (
                        <p className="precio">{entrada.precio} </p>
                      )}
                    </div>
                  )
                );
              })}
            </div>
          </div>

          <div className="entradas_container entradas_container_vip">
            <div className="entradas_titulo"> VIP</div>

            <div className="entradas_items">
              <img
                className="rosa"
                src="/assets/etapa4/entradas/rosa.png"
                alt="rosa"
              />

              {idioma === "ESP" ? (
                <p className="mini_title">3 DÍAS (V,S,D)</p>
              ) : (
                <p className="mini_title">3 DAYS (F,S,S)</p>
              )}

              {vip.map((entrada, i) => {
                return (
                  entrada.combo_3_dias && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA ÚNICA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">SINGLE STAGE {entrada.etapa}</p>
                      )}
                      {entrada.agotado ? (
                        <p className="agotado">AGOTADO</p>
                      ) : (
                        <p className="precio">{entrada.precio} </p>
                      )}
                    </div>
                  )
                );
              })}

              {idioma === "ESP" ? (
                <p className="mini_title"> 4 DÍAS (J,V,S,D)</p>
              ) : (
                <p className="mini_title"> 4 DAYS (T,F,S,S)</p>
              )}
              {vip.map((entrada, i) => {
                return (
                  !entrada.combo_3_dias && (
                    <div key={i} className="entrada">
                      {idioma === "ESP" ? (
                        <p className="etapa">ETAPA ÚNICA {entrada.etapa}</p>
                      ) : (
                        <p className="etapa">SINGLE STAGE {entrada.etapa}</p>
                      )}
                      {entrada.agotado ? (
                        <p className="agotado">AGOTADO</p>
                      ) : (
                        <p className="precio">{entrada.precio} </p>
                      )}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>

        {idioma === "ESP" ? (
          <p className="trm_info">
            El precio de la boleta se calcula diariamente con la TRM del día,
            esto puede hacer variar el valor final de tu entrada.
          </p>
        ) : (
          <p className="trm_info">
            The price of the ticket is calculated daily with the TRM of the day,
            this may vary the final value of your ticket.
          </p>
        )}

        <a
          className="principalButtom ga4-call_to_action-entradas-entradas"
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
        >
          {idioma === "ESP" ? <> COMPRAR ENTRADAS</> : <> BUY TICKETS</>}
        </a>
      </div>

      <div style={{ marginTop: "50px" }}>
        <Beneficios idioma={idioma} />
      </div>
    </div>
  );
};
