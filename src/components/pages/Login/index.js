import React from "react";
import styles from "./Login.module.css";

import backgroundImage from "../../../assets/images/Login/background-image.jpg";
import netflixLogo from "../../../assets/images/NetflixLogo.svg";

export default function Login() {
  function verificaInput(e) {
    console.log(e);
    let valorInput = e.target.value;
    if (valorInput.length <= 10) {
      e.target.classList.add(styles.input__border);
      e.target.nextElementSibling.classList.add(styles.span__opacity);
    } else {
      e.target.classList.remove(styles.input__border);
      e.target.nextElementSibling.classList.remove(styles.span__opacity);
    }
  }

  return (
    <section className={styles.container__login}>
      <div className={styles.container__login__background}>
        <img src={backgroundImage}></img>
      </div>
      <header>
        <img src={netflixLogo} alt="Logo da Netflix"></img>
      </header>
      <form>
        <h2>Entrar</h2>
        <input
          className="input__border"
          onBlur={verificaInput}
          type="email"
          placeholder="Email ou número de telefone"
          required
        ></input>
        <span>Informe um email ou número de telefone válido.</span>
        <input
          onBlur={verificaInput}
          type="password"
          placeholder="Senha"
          required
        ></input>
        <span>A senha deve ter entre 4 e 60 caracteres.</span>
        <button>Entrar</button>
        <div className={styles.container__login__formulario__salvarDados}>
          <fieldset>
            <input type="checkbox" />
            <label>Lembre-se de mim</label>
          </fieldset>
          <a href="#">Precisa de ajuda?</a>
        </div>
        <div className={styles.container__login__formulario__informacoes}>
          <p className={styles.container__login__informacoes_inscrever}>
            Novo por aqui?<a href="#">Assine agora.</a>
          </p>
          <p>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô. Saiba mais.
          </p>
        </div>
      </form>
      <footer></footer>
    </section>
  );
}
