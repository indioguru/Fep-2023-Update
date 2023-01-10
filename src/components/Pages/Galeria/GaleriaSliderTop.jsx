import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import top from "./Top.json";

export const GaleriaSliderTop = () => {
  return (
    <div className="page-galeria_top">
      {window.innerWidth > 900 ? (
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={3.5}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          navigation={{
            nextEl: ".arrow_right",
            prevEl: ".arrow_left",
          }}
          observeParents={true}
          observer={true}
        >
          {top.map((img, i) => (
            <SwiperSlide key={`galeria-slider-${i}`}>
              <img src={`/assets/galeria/${img}`} alt="imagen" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          navigation={{
            nextEl: ".arrow_right",
            prevEl: ".arrow_left",
          }}
          observeParents={true}
          observer={true}
        >
          {top.map((img, i) => (
            <SwiperSlide key={`galeria-slider-${i}`}>
              <img src={`/assets/galeria/${img}`} alt="imagen" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
