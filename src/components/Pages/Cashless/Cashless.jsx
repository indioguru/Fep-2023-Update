import React, { useEffect, useState } from "react";
import { getCashless } from "../../api/api";
import { Accordion } from "../../Common/Accordion";

export const Cashless = () => {
  const [cashlessPage, setCashlessPage] = useState({});

  useEffect(() => {
    getCashless().then((data) => setCashlessPage(data.data));
  }, []);
  return (
    <div className="cashless">
      {Object.keys(cashlessPage).length > 0 && (
        <>
          {window.innerWidth < 999 ? (
            <>
              <div className="cashless_banner">
                <div className="containerAll">
                  <h2>CASHLESS</h2>
                  <p className="info">{cashlessPage.descripcion}</p>

                  <div className="botones">
                    <a target="_blank" className="principalButtom" href="">
                      PRECARGA TU MANILLA
                    </a>
                    <a target="_blank" className="principalButtom" href="">
                      DEVOLUCIONES
                    </a>
                  </div>
                </div>

                <img
                  className="personajecashless"
                  src="/assets/cashless/personajecashless.png"
                  alt="personajecashless"
                />
                <div className="suelo"></div>
              </div>

              <div className="cashless_preguntas">
                <div className="containerAll">
                  <Accordion type="cashless" items={cashlessPage.cashless} />
                </div>
              </div>
            </>
          ) : (
            <div className="version_web">
              <div className="background_left"></div>
              <div className="background_right"></div>
              <img
                    className="personajecashless"
                    src="/assets/cashless/personajecashless.png"
                    alt="personajecashless"
                  />
                  <div className="suelo"></div>
              <div className="containerAll">
                <div className="cashless_banner">
                  <h2>CASHLESS</h2>
                  <p className="info">{cashlessPage.descripcion}</p>

                  <div className="botones">
                    <a target="_blank" className="principalButtom" href="">
                      PRECARGA TU MANILLA
                    </a>
                    <a target="_blank" className="principalButtom" href="">
                      DEVOLUCIONES
                    </a>
                  </div>

             
                </div>
                <div className="cashless_preguntas">
                  <Accordion type="cashless" items={cashlessPage.cashless} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
