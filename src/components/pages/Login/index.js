import React, { useState } from "react";
import styles from "./Login.module.css";

import backgroundImage from "../../../assets/images/Login/background-image.jpg";
import netflixLogo from "../../../assets/images/NetflixLogo.svg";

export default function Login() {

  let usuarioHash = localStorage.getItem('userNetflixCloneHash');

  function estaLogado() {
    if(usuarioHash == 'd41d8cd98f00b204e9800998ecf8427e') {
      window.location.href = '/browser';
    }
  }

  estaLogado()

  const users = {
    email: "teste@netflixclone.com.br",
    password: "12345678",
    id: 1,
  };

  function verificaInput() {
    console.log("ok");
  }

  const [emailUsuario, setEmailUsuario] = useState();
  const [senhaUsuario, setSenhaUsuario] = useState();
  const [checked, setChecked] = useState();

  function verificaLogin(e) {
    e.preventDefault();
    if(emailUsuario == users.email && senhaUsuario == users.password) {
      window.location.href = '/browser'; 
      localStorage.setItem('userNetflixCloneHash', 'd41d8cd98f00b204e9800998ecf8427e');
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
      <form onSubmit={verificaLogin}>
        <h2>Entrar</h2>
        <input
          className="input__email"
          onChange={(e) => setEmailUsuario(e.target.value)}
          onBlur={verificaInput}
          type="email"
          placeholder="Email ou número de telefone"
        ></input>
        <span>Informe um email ou número de telefone válido.</span>
        <input
          onChange={(e) => setSenhaUsuario(e.target.value)}
          onBlur={verificaInput}
          type="password"
          placeholder="Senha"
        ></input>
        <span>A senha deve ter entre 4 e 60 caracteres.</span>
        <button>Entrar</button>
        <div className={styles.container__login__formulario__salvarDados}>
          <fieldset>
            <input
              onChange={(e) => setChecked(e.target.checked)}
              type="checkbox"
            />
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
