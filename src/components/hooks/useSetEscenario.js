import { useEffect, useState } from "react";

export const useSetEscenario = (horarios) => {
  const [escenarioOne, setEscenarioOne] = useState([]);
  const [escenarioTwo, setEscenarioTwo] = useState([]);
  const [escenarioThree, setEscenarioThree] = useState([]);
  const [escenarioFour, setEscenarioFour] = useState([]);
  const [escenarioFive, setEscenarioFive] = useState([]);
  const [escenarioSix, setEscenarioSix] = useState([]);
  const [escenarioSeven, setEscenarioSeven] = useState([]);

  useEffect(() => {
    const escenarioOneFound = horarios.filter(
      (horario) => horario.escenario === "1"
    );
    const escenariotwoFound = horarios.filter(
      (horario) => horario.escenario === "2"
    );
    const escenarioThreeFound = horarios.filter(
      (horario) => horario.escenario === "3"
    );
    const escenarioFourFound = horarios.filter(
      (horario) => horario.escenario === "4"
    );
    const escenarioFiveFound = horarios.filter(
      (horario) => horario.escenario === "5"
    );
    const escenarioSixFound = horarios.filter(
      (horario) => horario.escenario === "6"
    );
    const escenarioSevenFound = horarios.filter(
      (horario) => horario.escenario === "7"
    );

    setEscenarioOne(escenarioOneFound);
    setEscenarioTwo(escenariotwoFound);
    setEscenarioThree(escenarioThreeFound);
    setEscenarioFour(escenarioFourFound);
    setEscenarioFive(escenarioFiveFound);
    setEscenarioSix(escenarioSixFound);
    setEscenarioSeven(escenarioSevenFound);
  }, [horarios]);

  return {
    escenarioOne,
    escenarioTwo,
    escenarioThree,
    escenarioFour,
    escenarioFive,
    escenarioSix,
    escenarioSeven,
  };
};
