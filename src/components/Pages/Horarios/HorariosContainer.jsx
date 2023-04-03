import { HorariosCalendar } from "./HorariosCalendar/HorariosCalendar";
import { HorariosFiltro } from "./HorariosFiltro";
import { useSlider } from "../../hooks";

export const HorariosContainer = ({ horarios }) => {
  // Create the slider
  const { setCurrentSlideSlider } = useSlider(
    horarios.horarios,
    "days",
    "filtro_item"
  );

  return (
    <>
      <div className="containerAll">
        <h2>HORARIOS</h2>
        <HorariosFiltro setCurrentSlideSlider={setCurrentSlideSlider} />
      </div>
      <div className="horario_container">
        <HorariosCalendar horarios={horarios.horarios} />
      </div>
    </>
  );
};
