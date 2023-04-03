const medida = 80;

export const calHeight = (hora_inicio, hora_final) => {
  let hora_inicioSplit = hora_inicio.split(":")[0];
  let hora_finalSplit = hora_final.split(":")[0];
  const minutos_inicioSplit = hora_inicio.split(":")[1];
  const minutos_finalSplit = hora_final.split(":")[1];

  // Transformo las horas de la madrugada en 24,25,26...
  hora_inicioSplit = transformHours(hora_inicioSplit);
  hora_finalSplit = transformHours(hora_finalSplit);

  const horas = parseInt(hora_finalSplit - hora_inicioSplit);
  const horasToMinutos = (horas - 1) * 60;

  const horasTotal =
    60 -
    minutos_inicioSplit +
    parseInt(minutos_finalSplit) +
    parseInt(horasToMinutos);

  return (horasTotal / 60) * medida - 1;
};

export const calPosition = (hora_inicio) => {
  const hora_inicioSplit = hora_inicio.split(":")[0];
  const minutos_inicioSplit = hora_inicio.split(":")[1];
  const horasPositions = [
    13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3,
  ];

  let positionTop =
    (horasPositions.indexOf(parseInt(hora_inicioSplit)) + 1) * medida;

  let positionMinutos = (minutos_inicioSplit / 60) * medida;

  return positionTop + positionMinutos;
};

const transformHours = (item) => {
  let horaNueva;

  switch (parseInt(item)) {
    case 0:
      horaNueva = 24;
      break;
    case 1:
      horaNueva = 25;
      break;
    case 2:
      horaNueva = 26;
      break;
    case 3:
      horaNueva = 27;
      break;
    default:
      horaNueva = item;
      break;
  }

  return horaNueva;
};
