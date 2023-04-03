import { useEffect, useState } from "react";

export const useSetDays = (horarios) => {
  const [dayOne, setDayOne] = useState([]);
  const [dayTwo, setdayTwo] = useState([]);
  const [dayThree, setDayThree] = useState([]);
  const [dayFour, setDayFour] = useState([]);

  useEffect(() => {

    const dayOneFound = horarios.filter((horario) => horario.dia === "1");
    const dayTwoFound = horarios.filter((horario) => horario.dia === "2");
    const dayThreeFound = horarios.filter((horario) => horario.dia === "3");
    const dayFourFound = horarios.filter((horario) => horario.dia === "4");

    setDayOne(dayOneFound);
    setdayTwo(dayTwoFound);
    setDayThree(dayThreeFound);
    setDayFour(dayFourFound);
  }, [horarios]);

  return {
    dayOne,
    dayTwo,
    dayThree,
    dayFour,
  };
};
