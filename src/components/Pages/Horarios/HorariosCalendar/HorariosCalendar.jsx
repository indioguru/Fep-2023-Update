import { useSetDays } from "../../../hooks/useSetDays";
import { HorariosDay } from "./HorariosDay";

export const HorariosCalendar = ({ horarios }) => {
  const { dayOne, dayTwo, dayThree, dayFour } = useSetDays(horarios);

  const closeLetrero = () => {
    const letrero_scroll = document.querySelector(".letrero_scroll");
    const backgrounBlack = document.querySelector(".backgrounBlack");
    letrero_scroll.classList.add("hide");
    backgrounBlack.classList.add("hide");
  };

  return (
    <div className="horarios_page_calendar">
      {/* Letrero scroll */}
      <div className="backgrounBlack"></div>
      <div onClick={closeLetrero} className="letrero_scroll">
        <img
          className="close"
          src="/assets/etapa5/menu/x_negra.png"
          alt="close icon"
        />
        {window.innerWidth > 999 ? (
          <img src="/assets/etapa5/letrero_scroll.png" alt="letrero_scroll" />
        ) : (
          <img src="/assets/etapa5/letrero_gira_scroll.png" alt="letrero_scroll" />
        )}
      </div>

      <HorariosDay dayInfo={dayOne} day="Jueves" date="23 de marzo 2023" />
      <HorariosDay dayInfo={dayTwo} day="Viernes" date="24 de marzo 2023" />
      <HorariosDay dayInfo={dayThree} day="Sábado" date="25 de marzo 2023" />
      <HorariosDay dayInfo={dayFour} day="Domingo" date="26 de marzo 2023" />
    </div>
  );
};
