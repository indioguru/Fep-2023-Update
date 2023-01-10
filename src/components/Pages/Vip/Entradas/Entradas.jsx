import React, { useEffect, useState } from "react";
import entradas from "../../EntradasPage/Entradas/entradasIndividuales.json";

export const Entradas = () => {
  const [vip, setVip] = useState([]);
  const [general, setGeneral] = useState([]);

  useEffect(() => {
    const vip = entradas.filter((item) => {
      return item.tipo === "vip";
    });
    const general = entradas.filter((item) => {
      return item.tipo === "general";
    });

    setVip(vip);
    setGeneral(general);
  }, []);

  return (
    <div className="vip_entradas entradas-section">
      {/* Entradas individuales */}
      <div className="containerAll">
        <div className="titulo">
          <h2>ENTRADAS VIP</h2>
        </div>

        <div className="entradas_all_container individuales">
          <div className="entradas_container entradas_container_vip">
            <div className="entradas_titulo">INDIVIDUALES</div>

            <div className="entradas_items">
              <img
                className="rosa"
                src="/assets/etapa4/entradas/rosa.png"
                alt="rosa"
              />

              <div className="entrada_item">
                <p className="mini_title">JUEVES 24 DE MARZO 2023</p>
                {vip.map((entrada) => {
                  return (
                    entrada.dia === "1" && (
                      <div className="entrada">
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                        <p className="precio">{entrada.precio} </p>
                      </div>
                    )
                  );
                })}
              </div>

              <div className="entrada_item">
                <p className="mini_title"> VIERNES 25 DE MARZO 2023</p>

                {vip.map((entrada) => {
                  return (
                    entrada.dia === "2" && (
                      <div className="entrada">
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                        <p className="precio">{entrada.precio} </p>
                      </div>
                    )
                  );
                })}
              </div>

              <div className="entrada_item">
                <p className="mini_title"> SÁBADO 26 DE MARZO 2023</p>

                {vip.map((entrada) => {
                  return (
                    entrada.dia === "3" && (
                      <div className="entrada">
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                        <p className="precio">{entrada.precio} </p>
                      </div>
                    )
                  );
                })}
              </div>

              <div className="entrada_item">
                <p className="mini_title"> DOMINGO 26 DE MARZO 2023</p>

                {vip.map((entrada) => {
                  return (
                    entrada.dia === "4" && (
                      <div className="entrada">
                        <p className="etapa">ETAPA {entrada.etapa}</p>
                        <p className="precio">{entrada.precio} </p>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="trm_info">
          El precio de la boleta se calcula diariamente con la TRM del día, esto
          puede hacer variar el valor final de tu entrada.
        </p>

        <a
          className="principalButtom ga4-call_to_action-entradas-seccion_home"
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
        >
          COMPRAR ENTRADAS
        </a>
      </div>
      {/* Entradas combo */}

      <div className="entradas_combo">
        <img
          className="rosa"
          src="/assets/etapa4/entradas/rosa.png"
          alt="rosa"
        />

        <div className="entradas_all_container containerAll">
          <div className="entradas_container entradas_container_vip">
            <div className="entradas_titulo"> COMBOS</div>

            <div className="entradas_items">
              <p className="mini_title">3 DÍAS (V,S,D)</p>

              {vip.map((entrada) => {
                return (
                  entrada.combo_3_dias && (
                    <div className="entrada">
                      <p className="etapa">ETAPA {entrada.etapa}</p>
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}

              <p className="mini_title">4 DÍAS (J,V,S,D)</p>
              {vip.map((entrada) => {
                return (
                  !entrada.combo_3_dias && (
                    <div className="entrada">
                      <p className="etapa">ETAPA {entrada.etapa}</p>
                      <p className="precio">{entrada.precio} </p>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>

        <p className="trm_info">
          El precio de la boleta se calcula diariamente con la TRM del día, esto
          puede hacer variar el valor final de tu entrada.
        </p>

        <a
          className="principalButtom ga4-call_to_action-entradas-seccion_home"
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
        >
          COMPRAR ENTRADAS
        </a>
      </div>
    </div>
  );
};
