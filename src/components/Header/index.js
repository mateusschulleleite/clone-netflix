import React from 'react'
import "./Header.css";
import netflixLogo from "../../assets/images/NetflixLogo.svg";
import headerLupa from '../../assets/images/HeaderLupa.svg';
import headerSino from '../../assets/images/HeaderSino.svg';
import headerImageProfile from '../../assets/images/ProfileIMG.svg';
import headerImageProfileArrow from '../../assets/images/HeaderProfileSeta.svg';

export default function Header(props) {

  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let containerHeader = document.querySelector('.container__cabecalho')
    if(scrollPosition >= 60) {
      containerHeader.classList.add('header__background');
    } else {
      containerHeader.classList.remove('header__background');
    }

  })

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
          <p>{props.nomeUsuario}</p>
          <img src={headerSino} alt="Sino de notificações" />
          <div className="container__cabecalho__direito-perfil">
            <img className='container__cabecalho__direito-perfil__imagem-do-perfil' src={props.imagemUsuario} alt="Imagem do perfil" />
            <img src={headerImageProfileArrow} alt="Seta do perfil"/>
          </div>
        </div>
      </header>
  )
}
