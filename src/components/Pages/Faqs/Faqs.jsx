import React from "react";
import { Accordion } from "../../Common/Accordion";
import faqs from "./Faqs.json";

export const Faqs = () => {
  return (
    <div className="faqs">
        <img
          className="logo_pages"
          src="/assets/etapa4/logodesktop.png"
          alt="logodesktop"
        />
      {/* <img className="solrojo" src="/assets/home/solrojo.png" alt="solrojo" /> */}
      <div className="containerAll">
        <div className="titulo">
          <h2>PREGUNTAS FRECUENTES</h2>
        </div>

        <div className="container_faqs">
          <Accordion items={faqs} />
          {window.innerWidth > 999 && (
            <img
              src="/assets/home/graficopreguntas.png"
              alt="graficopreguntas"
            />
          )}
        </div>
      </div>

      {window.innerWidth < 999 && (
        <img src="/assets/home/graficopreguntas.png" alt="graficopreguntas" />
      )}
    </div>
  );
};
