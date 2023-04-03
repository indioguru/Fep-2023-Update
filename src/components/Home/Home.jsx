import {
  Artistas,
  Banner,
  Entradas,
  Lineup,
  Memorias,
  Transporte,
} from "./index";
import { Loader } from "../Common/Loader";
import { useFetch } from "../hooks/useFetch";

export const Home = ({ idioma }) => {
  const { data: home, isLoading } = useFetch("/pagina-de-home/", {});

  return (
    <div className="home">
      {isLoading && <Loader />}
      {Object.keys(home).length !== 0 && (
        <div className="home_body">
          <Banner />
          <Lineup idioma={idioma} home={home} />
          <Artistas {...home} idioma={idioma}  />
          <Entradas idioma={idioma} />
          <Transporte idioma={idioma} />
          <Memorias idioma={idioma} />
        </div>
      )}
    </div>
  );
};
