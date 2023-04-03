import { Loader } from "../../Common/Loader";
import { HorariosContainer } from "./HorariosContainer";
import { useFetch } from "../../hooks";

export const Horarios = () => {
  const { data: horarios, isLoading } = useFetch("/pagina-horarios", {});

  return (
    <section className="horarios_page">
      {isLoading && <Loader />}

      {Object.keys(horarios).length !== 0 && (
        <HorariosContainer horarios={horarios} />
      )}
    </section>
  );
};
