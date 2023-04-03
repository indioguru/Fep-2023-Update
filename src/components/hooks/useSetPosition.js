import { useEffect, useState } from "react";
import {
  calHeight,
  calPosition,
} from "../Pages/Horarios/HorariosCalendar/helpers";

export const useSetPosition = (dayInfo) => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    if (dayInfo.length > 0) {
      const newHorarios = dayInfo.map((horario) => {
        const height = calHeight(horario.hora_inicio, horario.hora_final);
        const top = calPosition(horario.hora_inicio);
        let shortTextEng;
        let shortText;

        if (horario.artista.descripcion) {
          shortText = horario.artista.descripcion.slice(0, 200);
        }

        if (horario.artista.descripcion_ENG) {
          shortTextEng = horario.artista.descripcion_ENG.slice(0, 200);
        }

        const newArtist = {
          ...horario.artista,
          shortText: shortText,
          shortTextEng: shortTextEng,
        };

        return {
          ...horario,
          artista: newArtist,
          height: height,
          top: top,
        };
      });

      setstate(newHorarios);
    }
  }, [dayInfo]);

  return {
    state,
  };
};
