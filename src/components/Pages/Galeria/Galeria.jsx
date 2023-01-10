import React from "react";
import { GaleriaBanner } from "./GaleriaBanner";
import { GaleriaSlider } from "./GaleriaSlider";
import { GaleriaSliderTop } from "./GaleriaSliderTop";

export const Galeria = ({idioma}) => {
  return (
    <div className="page-galeria">
      <GaleriaBanner idioma={idioma} />
      <GaleriaSliderTop />
      <GaleriaSlider />
    </div>
  );
};
