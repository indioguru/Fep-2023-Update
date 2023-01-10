import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import beneficios from "./beneficios.json";
import { Beneficio } from "./Beneficio";

export const BeneficiosMovil = ({ idioma }) => {
  return (
    <div className="beneficiosMovil">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
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
        {beneficios.map((item, i) => (
          <SwiperSlide className={`beneficio_slide_${i + 1}`}>
            <Beneficio
              idioma={idioma}
              number={i + 1}
              imagen={item.imagen}
              titulo={item.titulo}
              titulo_ingles={item.titulo_ingles}
            />
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
    </div>
  );
};
