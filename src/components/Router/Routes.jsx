import { Switch, Route } from "react-router-dom";

import { Home } from "../Home/Home";
import { ArtistaPage } from "../Pages/Artistas/ArtistaPage/ArtistaPage";
import { Artistas } from "../Pages/Artistas/Artistas";
import { Cashless } from "../Pages/Cashless/Cashless";
import { ComoLlegar } from "../Pages/ComoLlegar/ComoLlegar";
import { EntradasPage } from "../Pages/EntradasPage/EntradasPage";
import { Faqs } from "../Pages/Faqs/Faqs";
import { Galeria } from "../Pages/Galeria/Galeria";
import { GuiaViajero } from "../Pages/GuiaViajero/GuiaViajero";
import { Horarios } from "../Pages/Horarios/Horarios";
import { Memorias } from "../Pages/Memorias/Memorias";
import { Prensa } from "../Pages/Prensa/Prensa";
import { Sostenibilidad } from "../Pages/Sostenibilidad/Sostenibilidad";
import { Sponsors } from "../Pages/Sponsors/Sponsors";
import { Vip } from "../Pages/Vip/Vip";

export const Routes = ({ idioma }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home idioma={idioma} />
      </Route>

      <Route exact path="/entradas">
        <EntradasPage idioma={idioma} />
      </Route>

      {/* It changed to aplazamientoblink */}
      <Route exact path="/aplazamientoblink">
        <Prensa idioma={idioma} />
      </Route>

      <Route exact path="/cashless">
        <Cashless idioma={idioma} />
      </Route>

      <Route exact path="/memorias">
        <Memorias idioma={idioma} />
      </Route>

      <Route exact path="/sponsors">
        <Sponsors idioma={idioma} />
      </Route>

      <Route exact path="/artistas">
        <Artistas idioma={idioma} />
      </Route>

      <Route exact path="/como-llegar">
        <ComoLlegar idioma={idioma} />
      </Route>

      <Route exact path="/artistas/:slug">
        <ArtistaPage idioma={idioma} />
      </Route>

      <Route exact path="/horarios">
        <Horarios idioma={idioma} />
      </Route>

      <Route exact path="/faqs">
        <Faqs idioma={idioma} />
      </Route>

      <Route exact path="/guia-viajero">
        <GuiaViajero idioma={idioma} />
      </Route>
      <Route exact path="/vip">
        <Vip idioma={idioma} />
      </Route>

      <Route exact path="/sostenibilidad">
        <Sostenibilidad idioma={idioma} />
      </Route>

      <Route exact path="/galeria">
        <Galeria idioma={idioma} />
      </Route>
    </Switch>
  );
};
