import React from "react";
import styles from "./Carroussel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carroussel(props) {
  const moviePosters = props.imagem;
  const tempo = props.tempo;

  return (
    <div className={styles.container__carroussel}>
      <h2 className={styles.titulo}>{props.titulo}</h2>
      <Swiper
        spaceBetween={5}
        slidesPerView={'auto'}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {moviePosters.map((poster) => {
          return (
            <SwiperSlide>
              <div className={styles.container__carroussel__slide}>
                <img src={poster} alt="Capa do Filme" />
                {tempo === "true" && (
                  <div className={styles.container__carroussel__slide__tempo}>
                    <span></span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
