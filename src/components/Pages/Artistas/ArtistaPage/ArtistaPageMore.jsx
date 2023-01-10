import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Artista } from "../../../Common/Artista";

export const ArtistaPageMore = ({ id, artistas }) => {
  const [allArtistas, setAllArtistas] = useState([]);

  useEffect(() => {
    // setAllArtistas(urlsGenerator(artistas));
    const artistasNew = artistas.filter((el) => el._id !== id);
    setAllArtistas(artistasNew)
  }, [artistas, id]);

  return (
    <>
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
          {allArtistas.map((artista, i) => (
            <SwiperSlide key={`galeria-slider-${i}`}>
              <Artista
                marco="/assets/etapa5/marcos/marco_1.png"
                artista={artista}
              />
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
          {allArtistas.map((artista, i) => (
            <SwiperSlide key={`galeria-slider-${i}`}>
              <Artista
                marco="/assets/etapa5/marcos/marco_1.png"
                artista={artista}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
