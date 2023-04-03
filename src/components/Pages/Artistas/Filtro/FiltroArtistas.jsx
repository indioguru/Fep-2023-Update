import filtro from "./filtro.json";

export const FiltroArtistas = ({ idioma, filtrar }) => {
  const selectDay = (diaSelected) => {
    const filtrosItems = document.querySelectorAll(".filtro-artista-container");
    const dia = document.querySelector(`#${diaSelected}`);

    for (let i = 0; i < filtrosItems.length; i++) {
      filtrosItems[i].classList.remove("filtro-artistas-active");
    }

    dia.classList.add("filtro-artistas-active");
  };

  return (
    <div className="page-artistas_filtro">
      {filtro.map((item, i) => (
        <div
          className={
            i !== 0
              ? `filtro-artista-container`
              : "filtro-artista-container filtro-artistas-active "
          }
          id={`filtro-artista-${item.valor}`}
        >
          <div
            onClick={() => {
              selectDay(`filtro-artista-${item.valor}`);
              filtrar(`${item.valor}`);
            }}
            className="filtro-artista"
          >
            <p className="dia">
              {" "}
              {idioma === "ESP" ? <> {item.dia}</> : <> {item.day}</>}
            </p>
            <p className="fecha">
              {idioma === "ESP" ? <> {item.fecha}</> : <> {item.date}</>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
