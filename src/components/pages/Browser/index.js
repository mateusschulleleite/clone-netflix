import React from "react";
import styles from "./Browser.module.css";
import netflixLogo from "../../../assets/images/NetflixLogo.svg";

import profilePicture1 from "../../../assets/images/ProfilePictures/ProfilePicture-1.svg";
import profilePicture2 from "../../../assets/images/ProfilePictures/ProfilePicture-2.svg";
import profilePicture3 from "../../../assets/images/ProfilePictures/ProfilePicture-3.svg";
import profilePicture4 from "../../../assets/images/ProfilePictures/ProfilePicture-4.svg";
import addProfile from "../../../assets/images/ProfilePictures/ProfilePicture.svg";

export default function Browser() {
  return (
    <section className={styles.container__browser}>
      <header>
        <h1>
          <img src={netflixLogo} alt="Logo da Netflix" />
        </h1>
      </header>
      <main>
            <h2>Quem está assistindo?</h2>
            <div>
                <ul>
                    <li><img src={profilePicture1} alt='' /><p>Sofia</p></li>
                    <li><img src={profilePicture2} alt='' /><p>Lucas</p></li>
                    <li><img src={profilePicture3} alt='' /><p>Isabella</p></li>
                    <li><img src={profilePicture4} alt='' /><p>Mateo</p></li>
                    <li><img src={addProfile} alt='' /><p>Adicionar Perfil</p></li>
                </ul>
            </div>
            <button>GERENCIAR PERFIS</button>
        </main>
    </section>
  );
}
