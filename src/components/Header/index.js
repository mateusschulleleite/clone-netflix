import React from 'react'
import "./Header.css";
import netflixLogo from "../../assets/images/NetflixLogo.svg";
import headerLupa from '../../assets/images/HeaderLupa.svg';
import headerSino from '../../assets/images/HeaderSino.svg';
import headerImageProfile from '../../assets/images/ProfileIMG.svg';
import headerImageProfileArrow from '../../assets/images/HeaderProfileSeta.svg';

export default function Header() {
  return (
    <header className="container__cabecalho">
        <div className="container__cabecalho__esquerdo">
          <img src={netflixLogo} alt="Logo da Netflix"/>
          <ul className="container__cabecalho__esquerdo-menu">
            <li className="container__cabecalho__esquerdo__menu-item menu-item-selecionado">Início</li>
            <li>Séries</li>
            <li>Filmes</li>
            <li>Bombando</li>
            <li>Minha Lista</li>
          </ul>
        </div>
        <div className="container__cabecalho__direito">
          <img src={headerLupa} alt="Lupa de pesquisa"/>
          <p>Usuário</p>
          <img src={headerSino} alt="Sino de notificações" />
          <div className="container__cabecalho__direito-perfil">
            <img src={headerImageProfile} alt="Imagem do perfil" />
            <img src={headerImageProfileArrow} alt="Seta do perfil"/>
          </div>
        </div>
      </header>
  )
}
