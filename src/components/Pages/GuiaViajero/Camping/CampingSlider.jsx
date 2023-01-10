import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

export const CampingSlider = ({ galeria }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation]}
      spaceBetween={20}
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
      {galeria.map((img, i) => (
        <SwiperSlide key={`galeria-slider-${i}`}>
          <div className="imagen_container">
            <img src={img.url} alt="" />
          </div>
        </SwiperSlide>
      ))}

      <div className="botones">
        <img
          className="arrow_left"
          src="/assets/iconos/mflecha2.png"
          alt="flecha"
        />
        <img
          className="arrow_right"
          src="/assets/iconos/mflecha1.png"
          alt="flecha"
        />
      </div>
    </Swiper>
  );
};
