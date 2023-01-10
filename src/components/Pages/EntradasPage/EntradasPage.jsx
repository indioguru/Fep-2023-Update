import React, { useCallback } from "react";
import { useEffect } from "react";
import { Alcancias } from "./Alcancias/Alcancias";
// import { Atrapalo } from "./Atrapalo/Atrapalo";
import { Banner } from "./Banner/Banner";
import { EntradasCombo } from "./Entradas/EntradasCombo";
export const EntradasPage = ({ idioma }) => {
  useEffect(() => {
    let body = document.querySelector("body");
    body.style.overflowY = "hidden";
    body.style.overflowY = "scroll";
  }, []);
  return (
    <div className="entradasPage">
      <Banner idioma={idioma} />
      <EntradasCombo idioma={idioma} />
      <Alcancias idioma={idioma} />
      {/* <Atrapalo /> */}
    </div>
  );
};
