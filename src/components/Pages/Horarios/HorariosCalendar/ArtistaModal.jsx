import { urlGenerator } from "../../../helpers/urlsGenerator";

export const ArtistaModal = ({
  hora_inicio,
  hora_final,
  artista,
  escenario,
  day,
  i,
}) => {
  const cerrarModal = () => {
    const items = document.querySelectorAll(".artista_modal");

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("artista_modal_active");
    }
  };

  return (
    <div className={`artista_modal ${escenario}_${day}_artista_modal_${i + 1}`}>
      <img
        className="close"
        onClick={cerrarModal}
        src="/assets/etapa5/menu/x_negra.png"
        alt="close icon"
      />

      <div className="flex">
        <div className="info_text">
          <strong>{artista.nombre}</strong>
          <strong className="hora_modal">
            {hora_inicio} a {hora_final}
          </strong>
          <p> {artista.shortText}...</p>
        </div>

        <img className="artista_img" src={artista.imagen.url} alt="" />
      </div>

      <a
        className="boton"
        target="_blank"
        href={`https://www.festivalestereopicnic.com/#/artistas/${urlGenerator(
          artista
        )}`}
      >
        {" "}
        Ver artista
      </a>

      {artista.spotify && (
        <a href={artista.spotify} target="_blank">
          <img src="/assets/etapa5/menu/nspotify.png" alt="spotify" />
        </a>
      )}
    </div>
  );
};
