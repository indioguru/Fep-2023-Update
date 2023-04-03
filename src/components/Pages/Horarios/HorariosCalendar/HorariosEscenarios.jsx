import { ArtistaModal } from "./ArtistaModal";
import horas from "./horas.json";

export const HorariosEscenarios = ({ escenario, day, horarios, img }) => {
  const activarModal = (classItem) => {
    const items = document.querySelectorAll(".artista_modal");
    const item = document.querySelector(`.${classItem}`);

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("artista_modal_active");
    }

    item.classList.add("artista_modal_active");
  };

  return (
    <div className="escenario">
      <p className="title">
        <img src={`/assets/escenarios/${escenario}.png`} alt="imagenes" />
      </p>

      {horarios && (
        <>
          {horarios.map((horario, i) => (
            <div
              key={`horario_${escenario}_${i}`}
              className="artista"
              style={{
                height: `${horario.height}px`,
                top: `${horario.top}px`,
              }}
            >
              <strong>{horario.artista.nombre}</strong>
              <p>
                {horario.hora_inicio} a {horario.hora_final}
              </p>

              <img
                onClick={() =>
                  activarModal(`${escenario}_${day}_artista_modal_${i + 1}`)
                }
                className="info"
                src="/assets/etapa5/info.png"
                alt="info"
              />

              <ArtistaModal {...horario} escenario={escenario} day={day} i={i} />
            </div>
          ))}
        </>
      )}

      {horas.map((i) => (
        <p key={`hora_${i + 1}`} className="hora"></p>
      ))}
    </div>
  );
};
