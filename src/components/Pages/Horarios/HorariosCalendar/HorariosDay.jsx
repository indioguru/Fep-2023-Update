import { HorariosEscenarios } from "./HorariosEscenarios";
import { HorariosHora } from "./HorariosHora";
import { useSetPosition } from "../../../hooks/useSetPosition";
import { useSetEscenario } from "../../../hooks/useSetEscenario";

export const HorariosDay = ({ dayInfo, day, date }) => {
  const { state } = useSetPosition(dayInfo);

  const {
    escenarioOne,
    escenarioTwo,
    escenarioThree,
    escenarioFour,
    escenarioFive,
    escenarioSix,
    escenarioSeven,
  } = useSetEscenario(state);

  return (
    <div className="days">
      <div className="title_day">
        <h3>
          <strong>{day}</strong>
          {date}
        </h3>
      </div>

      <div className="flex">
        <HorariosHora />
        <HorariosEscenarios escenario="escenario_1" day={day} horarios={escenarioOne} />
        <HorariosEscenarios escenario="escenario_2" day={day} horarios={escenarioTwo} />
        <HorariosEscenarios escenario="escenario_3" day={day} horarios={escenarioThree} />
        <HorariosEscenarios escenario="escenario_4" day={day} horarios={escenarioFour} />
        <HorariosEscenarios escenario="escenario_5" day={day} horarios={escenarioFive} />
        <HorariosEscenarios escenario="escenario_6" day={day} horarios={escenarioSix} />
        {/* <HorariosEscenarios escenario="escenario_7" day={day} horarios={escenarioSeven} /> */}
      </div>
    </div>
  );
};
