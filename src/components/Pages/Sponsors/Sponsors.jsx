import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import sponsors from "./Sponsors.json";
import { scrollElement } from "../../helpers/ScrollAnimations";
export const Sponsors = () => {
  const [infoSponsors, setInfoSponsors] = useState([]);
  // const containerRef = useRef(null);
  // const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setInfoSponsors(sponsors);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let body = document.querySelector("body");
      body.style.overflowY = "hidden";
      body.style.overflowY = "scroll";
    }, 500);

    // const cards = document.querySelector(".card");
    // console.log(cards);
    // // const observer = new IntersectionObserver(animActive, {
    // //   root: null,
    // //   rootMargin: "0px 0px 0px 0px ",
    // //   threshold: 1.0,
    // // });

    // // observer.observe(cards);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      scrollElement("card", "anim_card_view");
    });
  }, []);

  // const callbackFunction = (entries) => {
  //   const [entry] = entries;
  //   // setIsVisible(entry.isIntersecting);
  //   const card = document.querySelector(".card");
  //   card.classList.toggle("anim_card_view");
  //   console.log(entry.isIntersecting);
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   });
  //   if (containerRef.current) observer.observe(containerRef.current);
  //   console.log("Esto es lo que me interesa " + containerRef.current);
  //   return () => {
  //     if (containerRef.current) observer.unobserve(containerRef.current);
  //   };
  // }, [containerRef, infoSponsors]);

  return (
    <div className="sponsors">
      <div className="sponsors_container">
        <div className="logo">
          <img src="/assets/etapa4/logodesktop.png" alt="" />
        </div>

        <div className="content_info containerAll">
          <h1>SPONSORS</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore
          </p>
        </div>

        <div className="content_banner">
          <div className="suelo"></div>
          <img
            className="montana"
            src="/assets/etapa4/montanas_rosadas.png"
            alt="Montaña"
          />

          <img className="flor" src="/assets/etapa4/inicio/flor1.png" alt="flor" />

          <img className="hulk" src="/assets/etapa5/sponsors.png" alt="señor" />
        </div>

        <div className="content_cards">
          {infoSponsors.map((item, i) => (
            <div key={i} className="card">
              <img className="imgPrueba" src={item.logo} alt="logo" />
              <p>{item.info}</p>
              <a target="_blank" href={item.link}>
                VER MÁS
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
