import Media from "react-media";

const Mapa = ({ idioma, data }) => {
  const modal = () => {
    const map_modal = document.querySelector(".content_img_modal");
    map_modal.classList.toggle("modal");
    console.log("Abrio modal");
  };
  return (
    <div className="mapa">
      <div className="content_img_modal">
        <Media query="(max-width: 1200px)">
          {(resolution) => {
            return resolution ? (
              <img className="mapa" src={data.mapa_movil.url} alt="mapa" />
            ) : (
              <img className="mapa" src={data.mapa.url} alt="mapa" />
            );
          }}
        </Media>

        <img
          onClick={() => modal()}
          className="close"
          src="/assets/etapa5/menu/close.png"
          alt="x"
        />
      </div>

      <div className="mapa_container ">
        <div className="content_info containerAll">
          {idioma === "ESP" ? (
            <h1>CAMPO DE GOLF, BRICEÑO 18</h1>
          ) : (
            <h1>BRICEÑO 18 GOLF COURSE</h1>
          )}

          {idioma === "ESP" ? (
            <p>Kilometro 19 vía Bogotá, Sopo, Briceño, Cundinamarca</p>
          ) : (
            <p>Kilometer 19 via Bogota, Sopo, Briceño, Cundinamarca</p>
          )}
        </div>
        <div className="content_buttons containerAll">
          <a
            href={data.waze_URL}
            target="_blank"
            className="principalButtom ga4-call_to_action-como_llegar-ir"
          >
            Waze
          </a>
          <a
            href={data.google_maps_URL}
            target="_blank"
            className="principalButtom ga4-call_to_action-como_llegar-ir"
          >
            Google Maps
          </a>
        </div>

        {idioma === "ESP" ? (
          <h1 className="title">MAPA</h1>
        ) : (
          <h1 className="title">MAP</h1>
        )}

        <Media query="(max-width: 1200px)">
          {(resolution) => {
            return resolution ? (
              <div className="content_img">
                <img src={data.mapa.url} alt="mapa" />
              </div>
            ) : (
              ""
            );
          }}
        </Media>

        <Media query="(max-width: 1200px)">
          {(resolution) => {
            return resolution ? (
              <div
                onClick={() => modal()}
                className="principalButtom button_img"
              >
                {idioma === "ESP" ? (
                  <>
                    VER MAPA{" "}
                    <img
                      className="cuadro"
                      src="/assets/etapa5/cuadro.png"
                      alt=""
                    />
                  </>
                ) : (
                  <>
                    SEE MAP{" "}
                    <img
                      className="cuadro"
                      src="/assets/etapa5/cuadro.png"
                      alt=""
                    />
                    <span></span>
                  </>
                )}
              </div>
            ) : (
              <div className="content_img">
                <img src={data.mapa.url} alt="mapa" />
                <div onClick={() => modal()} className="principalButtom">
                  <img
                    className="cuadro"
                    src="/assets/etapa5/cuadro.png"
                    alt=""
                  />
                </div>
              </div>
            );
          }}
        </Media>
      </div>
    </div>
  );
};

export default Mapa;
