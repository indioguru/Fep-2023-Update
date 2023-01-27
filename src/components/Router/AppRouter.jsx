import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Notification } from "../Common/Notification";
import { Footer } from "../Footer/Footer";
import { Home } from "../Home/Home";
import { Menu } from "../Menu/Menu";
import { ArtistaPage } from "../Pages/Artistas/ArtistaPage/ArtistaPage";
import { Artistas } from "../Pages/Artistas/Artistas";
import { ComoLlegar } from "../Pages/ComoLlegar/ComoLlegar";
import { EntradasPage } from "../Pages/EntradasPage/EntradasPage";
import { Faqs } from "../Pages/Faqs/Faqs";
import { Galeria } from "../Pages/Galeria/Galeria";
import { GuiaViajero } from "../Pages/GuiaViajero/GuiaViajero";
import { Memorias } from "../Pages/Memorias/Memorias";
import { Prensa } from "../Pages/Prensa/Prensa";
import { Sponsors } from "../Pages/Sponsors/Sponsors";
import { Vip } from "../Pages/Vip/Vip";
import { ScrollToTop } from "./ScrollToTop";

export const AppRouter = () => {
  const [idioma, setIdioma] = useState("ESP");

  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");

    menu.classList.toggle("menu_active");
    body.classList.toggle("noScroll");
  };

  const showEntradas = () => {
    const boton_entradaMovil = document.querySelector(".boton_entradaMovil");
    const botones_home = document.querySelector(".botones_home");

    botones_home.classList.toggle("active_botones");
    boton_entradaMovil.classList.toggle("active_botonMovil");
  };

  useEffect(() => {
    const lenguaje = localStorage.getItem("idioma");
    if (lenguaje === null || lenguaje === "ESP") {
      setIdioma("ESP");
    } else {
      setIdioma("ING");
    }
  }, []);

  return (
    <Router>
      <Notification />
      <div className="hamburguesa" onClick={toggleMenu}>
        <img src="/assets/etapa5/menu/hamburguesa.png" alt="hamburguesa" />
      </div>

      <div className="botones_home">
        {/* <a
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
          className="principalButtom buttom_pink"
        >
          ALCANCÍA
        </a> */}
        <a
          target="_blank"
          href="https://www.entradasamarillas.com/event/fep-2023-internacional"
          className="principalButtom boton_sin_background"
        >
          {idioma === "ESP" ? (
            <> COMPRAS INTERNACIONALES</>
          ) : (
            <>INTERNATIONAL PURCHASES</>
          )}
        </a>

        <a
          target="_blank"
          href="https://www.entradasamarillas.com/event/festival-estreo-picnic-2023"
          className="principalButtom buttom_orange ga4-call_to_action-entradas-sticky_header"
        >
          {idioma === "ESP" ? <> ENTRADAS</> : <>TICKETS</>}
        </a>
      </div>

      {window.innerWidth < 999 && (
        <div onClick={showEntradas}>
          <div className="boton_entradaMovil">
            <img
              className="entradaicono"
              src="/assets/etapa4/entradasmovil.png"
              alt="entradasmovil"
            />
            <img
              className="menosicono"
              src="/assets/etapa4/menos.png"
              alt="entradasmovil"
            />
          </div>
        </div>
      )}

      <Menu setIdioma={setIdioma} toggleMenu={toggleMenu} idioma={idioma} />
      <ScrollToTop />

      <Switch>
        <Route exact path="/">
          <Home idioma={idioma} />
        </Route>

        <Route exact path="/entradas">
          <EntradasPage idioma={idioma} />
        </Route>

        <Route exact path="/prensa">
          <Prensa idioma={idioma} />
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

        <Route exact path="/faqs">
          <Faqs idioma={idioma} />
        </Route>

        <Route exact path="/guia-viajero">
          <GuiaViajero idioma={idioma} />
        </Route>
        <Route exact path="/vip">
          <Vip idioma={idioma} />
        </Route>

        <Route exact path="/galeria">
          <Galeria idioma={idioma} />
        </Route>
      </Switch>
      <Footer idioma={idioma} />
    </Router>
  );
};
