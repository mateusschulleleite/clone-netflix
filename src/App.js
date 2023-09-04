import "./Header.css";
import netflixLogo from "./assets/images/NetflixLogo.svg";
import headerLupa from './assets/images/HeaderLupa.svg';

function App() {
  return (
    <div className="App">
      <header className="container__cabecalho">
        <div className="container__cabecalho__esquerdo">
          <img src={netflixLogo} />
          <ul className="container__cabecalho__esquerdo-menu">
            <li className="container__cabecalho__esquerdo__menu-item menu-item-selecionado">Início</li>
            <li>Séries</li>
            <li>Filmes</li>
            <li>Bombando</li>
            <li>Minha Lista</li>
          </ul>
        </div>
        <div className="container__cabecalho__direito">
          <img src={headerLupa} />
          <p>Usuário</p>
        </div>
      </header>
    </div>
  );
}

export default App;
