import React, { useEffect } from "react";
import { Banner } from "../Banner/Banner";

export const Intro = () => {
  let storageValue = sessionStorage.getItem("firstTimeValue");
  if (!storageValue) {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }

  useEffect(() => {
    window.addEventListener("load", (event) => {
      let image = document.querySelector("img");
      let isLoaded = image.complete && image.naturalHeight !== 0;
      let storageValue = sessionStorage.getItem("firstTimeValue");

      if (isLoaded) {
        const imagen_1 = document.querySelector(".imagen_1");
        const intro_banner = document.querySelector(".intro_banner");
        imagen_1.classList.add("imagen_animation_1");
        intro_banner.classList.add("intro_banner_animation");

        if (!storageValue) {
          const intro = document.querySelector(".intro");
          const body = document.querySelector("body");

          setTimeout(() => {
            intro.style.display = "none";
            body.style.overflow = "scroll";
            sessionStorage.setItem("firstTimeValue", true);
          }, 3200);
        }
      }
    });
  }, []);

  if (storageValue) {
    return null;
  }

  return (
    <div className="intro">
      <img
        className="imagen_1"
        src="/assets/intro/desktop/roja.png"
        alt="imagen_1"
      />

      <div className="intro_banner">
        <Banner />
      </div>
    </div>
  );
};
