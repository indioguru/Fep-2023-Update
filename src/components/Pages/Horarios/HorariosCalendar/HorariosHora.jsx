import horas from "./horas.json";

export const HorariosHora = () => {
  return (
    <div className="horas">
      <p className="title">HORA</p>

      {horas.map((hora, i) => (
        <p key={`hora_${i + 1}`} className="hora">
          {hora}
        </p>
      ))}
    </div>
  );
};
