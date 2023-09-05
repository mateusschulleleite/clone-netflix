import React from "react";
import './PopularOnNetflix.css';

import posterPrimeiro from '../../assets/images/PopularOnNetflix/MoviePoster.png';
import posterSegundo from '../../assets/images/PopularOnNetflix/MoviePoster (1).png';
import posterTerceiro from '../../assets/images/PopularOnNetflix/MoviePoster (2).png';
import posterQuarto from '../../assets/images/PopularOnNetflix/MoviePoster (3).png';
import posterQuinto from '../../assets/images/PopularOnNetflix/MoviePoster (4).png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([]);


export default function PopularOnNetflix() {
  return (
    <section className="container__popular-netflix">
      <h3 className="container__popular-netflix-titulo">Popular na Netflix</h3>
      <Swiper
        navigation
        slidesPerView={5}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
            <img className="slide-imagem" src={posterPrimeiro} />
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-imagem" src={posterSegundo} />
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-imagem" src={posterTerceiro} />
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-imagem" src={posterQuarto} />
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-imagem" src={posterQuinto} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
