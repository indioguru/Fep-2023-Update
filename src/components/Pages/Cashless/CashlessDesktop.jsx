import { Accordion } from "../../Common/Accordion";

export const CashlessDesktop = ({ descripcion, cashless, idioma }) => {
  return (
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
        <div className="cashless_preguntas">
          <Accordion type="cashless" items={cashless} />
        </div>
      </div>
    </div>
  );
};
