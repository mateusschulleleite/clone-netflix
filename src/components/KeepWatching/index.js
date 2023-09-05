import React from "react";
import './KeepWatching.css';

import posterPrimeiro from '../../assets/images/KeepWatching/MoviePoster.png';
import posterSegundo from '../../assets/images/KeepWatching/MoviePoster-1.png';
import posterTerceiro from '../../assets/images/KeepWatching/MoviePoster-2.png';
import posterQuarto from '../../assets/images/KeepWatching/MoviePoster-3.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([]);


export default function KeepWatching() {
  return (
    <section className='container__continue-assistindo'>
          <h3 className="container__continue-assistindo-titulo">Usuário, continue assistindo</h3>
      <Swiper
        navigation
        slidesPerView={5}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
            <img className="slide-imagem" src={posterPrimeiro} />
            <div className="quantidade-assistida">
                <span></span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-imagem" src={posterSegundo} />
            <div className="quantidade-assistida">
                <span></span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-imagem" src={posterTerceiro} />
            <div className="quantidade-assistida">
                <span></span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-imagem" src={posterQuarto} />
            <div className="quantidade-assistida">
                <span></span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slide-imagem" src={posterSegundo} />
            <div className="quantidade-assistida">
                <span></span>
            </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
