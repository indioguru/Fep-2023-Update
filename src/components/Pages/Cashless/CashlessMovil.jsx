import { Accordion } from "../../Common/Accordion";

export const CashlessMovil = ({ descripcion, cashless, idioma }) => {
  return (
    <>
      <div className="cashless_banner">
        <div className="containerAll">
          <h2>CASHLESS</h2>
          <p className="info">{descripcion}</p>

          <div className="botones">
            <a
              href="https://alcancias.armatuvaca.com/fep2023/cashless"
              target="_blank"
              className="principalButtom"
            >
              {idioma === "ESP" ? (
                <>DEVOLUCIONES CASHLESS</>
              ) : (
                <>CASHLESS REFUNDS</>
              )}
            </a>
            {/* <a target="_blank" className="principalButtom" href="">
              DEVOLUCIONES
            </a> */}
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
          <Accordion type="cashless" items={cashless} />
        </div>
      </div>
    </>
  );
};
