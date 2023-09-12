import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../../Header";
import HighlightedMovie from "../../HighlightedMovie";
import Carroussel from "../../Carroussel/Carroussel";

import moviePoster from "../../../assets/images/PopularOnNetflix/MoviePoster.png";
import moviePoster1 from "../../../assets/images/PopularOnNetflix/MoviePoster-1.png";
import moviePoster2 from "../../../assets/images/PopularOnNetflix/MoviePoster-2.png";
import moviePoster3 from "../../../assets/images/PopularOnNetflix/MoviePoster-3.png";
import moviePoster4 from "../../../assets/images/PopularOnNetflix/MoviePoster-4.png";
import moviePoster5 from "../../../assets/images/PopularOnNetflix/MoviePoster-5.png";
import moviePoster6 from "../../../assets/images/PopularOnNetflix/MoviePoster-6.png";
import moviePoster7 from "../../../assets/images/PopularOnNetflix/MoviePoster-7.png";
import moviePoster8 from "../../../assets/images/PopularOnNetflix/MoviePoster-8.png";

import posterOriginalNetflix from '../../../assets/images/OriginalNetflix/MoviePoster.png';
import posterOriginalNetflix2 from '../../../assets/images/OriginalNetflix/MovieVerticalCard-1.png';
import posterOriginalNetflix3 from '../../../assets/images/OriginalNetflix/MovieVerticalCard-2.png';
import posterOriginalNetflix4 from '../../../assets/images/OriginalNetflix/MovieVerticalCard.png';

import rankCard from '../../../assets/images/RankCard/RankCard.svg';
import rankCard2 from '../../../assets/images/RankCard/RankCard-1.svg';
import rankCard3 from '../../../assets/images/RankCard/RankCard-2.svg';
import rankCard4 from '../../../assets/images/RankCard/RankCard-3.svg';
import rankCard5 from '../../../assets/images/RankCard/RankCard-4.svg';

import posterWatchAgain from '../../../assets/images/WatchAgain/MoviePoster.jpg';
import posterWatchAgain1 from '../../../assets/images/WatchAgain/MoviePoster-1.jpg';
import posterWatchAgain2 from '../../../assets/images/WatchAgain/MoviePoster-2.jpg';
import posterWatchAgain3 from '../../../assets/images/WatchAgain/MoviePoster-3.jpg';


export default function Home() {
    const location = useLocation();
    const { profile } = location.state;

  return (
    <section className="container__home">
      <Header 
        nomeUsuario={profile.nome}
        imagemUsuario={profile.img}
      />
      <HighlightedMovie />
      <main>
        <Carroussel
          titulo="Popular na Netflix"
          imagem={[
            moviePoster,
            moviePoster1,
            moviePoster2,
            moviePoster3,
            moviePoster4,
            moviePoster5,
            moviePoster6,
            moviePoster7,
            moviePoster8
          ]}
        />
        <Carroussel
          titulo={`${profile.nome}, continue assistindo`}
          imagem={[
            moviePoster,
            moviePoster1,
            moviePoster2,
            moviePoster3,
            moviePoster4,
            moviePoster5,
            moviePoster6,
            moviePoster7,
          ]}
          tempo="true"
        />
        <Carroussel
          titulo="Tópicos do dia"
          imagem={[
            moviePoster,
            moviePoster1,
            moviePoster2,
            moviePoster3,
            moviePoster4,
            moviePoster5,
            moviePoster6,
            moviePoster7,
          ]}
        />
        <Carroussel
          titulo="Conteúdo Original da Netflix"
          imagem={[
            posterOriginalNetflix,
            posterOriginalNetflix2,
            posterOriginalNetflix3,
            posterOriginalNetflix4,
            posterOriginalNetflix,
            posterOriginalNetflix2,
            posterOriginalNetflix3,
            posterOriginalNetflix4,
          ]}
        />
        <Carroussel
          titulo="Os 10 principais hoje no Brasil"
          imagem={[
            rankCard,
            rankCard2,
            rankCard3,
            rankCard4,
            rankCard5,
            rankCard,
            rankCard2,
            rankCard3,
            rankCard4,
            rankCard5,
          ]}
        />
        <Carroussel
          titulo="Assista novamente"
          imagem={[
            posterWatchAgain,
            posterWatchAgain1,
            posterWatchAgain2,
            posterWatchAgain3,
            posterWatchAgain,
            posterWatchAgain1,
            posterWatchAgain2,
            posterWatchAgain3,
          ]}
        />
      </main>
    </section>
  );
}
