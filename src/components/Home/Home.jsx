import React, { useEffect, useState } from "react";
import { Artistas } from "./Artistas/Artistas";
// import { Intro } from "./Intro/Intro";
import { Banner } from "./Banner/Banner";
import { Entradas } from "./Entradas/Entradas";
import { Lineup } from "./Lineup/Lineup";
import { Memorias } from "./Memorias/Memorias";
import { Transporte } from "./Transporte/Transporte";
import { Loader } from "../Common/Loader";
import { getHome } from "../api/api";

export const Home = ({ idioma }) => {
  const [loader, setLoader] = useState(true);
  const [home, setHome] = useState({});

  // useEffect(() => {
  //   let navbar = document.querySelector(".botones_home");
  //   let lineup = document.querySelector(".lineup");
  //   let sticky = lineup.offsetTop;

  //   const myFunction = () => {
  //     if (window.pageYOffset >= sticky) {
  //       navbar.classList.add("sticky_menu");
  //     } else {
  //       navbar.classList.remove("sticky_menu");
  //     }
  //   };
  //   window.onscroll = function () {
  //     if (window.innerWidth > 999) {
  //       myFunction();
  //     }
  //   };
  // }, []);

  useEffect(() => {
    getHome().then((data) => setHome(data.data));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let body = document.querySelector("body");
      body.style.overflowY = "hidden";

      if (Object.keys(home).length !== 0) {
        setTimeout(() => {
          setLoader(false);
          body.style.overflowY = "scroll";
        }, 1000);
      }
    }, 500);
  }, [home]);

  return (
    <div className="home">
      {/* <Intro /> */}
      {loader && <Loader />}
      {Object.keys(home).length !== 0 && (
        <div className="home_body">
          <Banner />
          <Lineup idioma={idioma} home={home} />
          <Artistas idioma={idioma} artistas={home.artistas} />
          <Entradas idioma={idioma} />
          <Transporte idioma={idioma} />
          <Memorias idioma={idioma} />
        </div>
      )}
    </div>
  );
};
