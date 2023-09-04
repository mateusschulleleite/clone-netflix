import React from "react";
import "./HighlightedMovie.css";
import fimePoster from "../../assets/images/HighlightedMovie/MoviePoster.png";
import filmeTítulo from "../../assets/images/HighlightedMovie/MovieName.svg";
import top10Badge from '../../assets/images/HighlightedMovie/Top10Badge.svg';

export default function HighlightedMovie() {
  return (
    <section className="container__filme-destaque">
      <img
        className="container__filme-destaque__imagem"
        src={fimePoster}
        alt="Capa do filme destaque"
      />
      <div className="container__filme-destaque__informacoes">
        <img className="container__filme-destaque__titulo" src={filmeTítulo} />
        <div className="container__filme-destaque__informacoes__rank">
          <img src={top10Badge} alt="Banner top 10" />
          <p>Número 4 na Turquia hoje</p>
        </div>
        <p className="container__filme-destaque__descricao">
          Emir, que aprendeu a se cuidar desde muito jovem e que trabalhou muito
          e alcançou uma posição importante no mundo dos negócios, um dia
          conhece uma garota que é cantora de rua e sua vida muda.
        </p>
      </div>
    </section>
  );
}
