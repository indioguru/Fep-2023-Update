import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import memorias from "./Memorias.json";

export const MemoriasSlider = () => {
  return (
    <>
      {window.innerWidth > 999 ? (
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={5}
          slidesPerView={3}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          // }}
          navigation={{
            nextEl: ".arrow_right",
            prevEl: ".arrow_left",
          }}
          observeParents={true}
          observer={true}
        >
          {memorias.map((memoria, i) => (
            <SwiperSlide key={i}>
              <div className="iframe_container">
                <iframe
                  className="iframe_memoria"
                  srcDoc={`<style>
     img{object-fit:cover}
     *{padding:0;margin:0;overflow:hidden}
     html,body{height:100%;}
     img,span{position:absolute;width:100vw;height:auto;top:0;bottom:0;margin:auto}
     span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
     <a href="${memoria.url}"> 
         <img src="/assets/etapa4/memorias/${memoria.portada}">
         <span>▶</span>
     </a>`}
                  src={memoria.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  muted
                  autoPlay
                ></iframe>
                <p>{memoria.year}</p>
              </div>
            </SwiperSlide>
          ))}

          <div className="botones">
            <img
              src="/assets/etapa4/mflecha2.png"
              className="arrow_left"
              alt="boton"
            />
            <img
              src="/assets/etapa4/mflecha1.png"
              className="arrow_right"
              alt="boton"
            />
          </div>
        </Swiper>
      ) : (
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={1}
          slidesPerView={1}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          // }}
          navigation={{
            nextEl: ".arrow_right",
            prevEl: ".arrow_left",
          }}
          observeParents={true}
          observer={true}
        >
          {memorias.map((memoria, i) => (
            <SwiperSlide key={i}>
              <div className="iframe_container">
                <iframe
                  className="iframe_memoria"
                  srcDoc={`<style>
    img{object-fit:cover}
    *{padding:0;margin:0;overflow:hidden}
    html,body{height:100%;}
    img,span{position:absolute;width:100vw;height:auto;top:0;bottom:0;margin:auto}
    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
    <a href="${memoria.url}"> 
        <img src="/assets/etapa4/memorias/${memoria.portada}">
        <span>▶</span>
    </a>`}
                  src={memoria.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  muted
                  autoPlay
                ></iframe>
                <p>{memoria.year}</p>
              </div>
            </SwiperSlide>
          ))}

          <div className="botones">
            <img
              src="/assets/etapa4/mflecha2.png"
              className="arrow_left"
              alt="boton"
            />
            <img
              src="/assets/etapa4/mflecha1.png"
              className="arrow_right"
              alt="boton"
            />
          </div>
        </Swiper>
      )}
    </>
  );
};
