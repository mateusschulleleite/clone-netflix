import React from "react";
import styles from "./Browser.module.css";
import netflixLogo from "../../../assets/images/NetflixLogo.svg";
import { useNavigate } from "react-router-dom";

import profilePicture1 from "../../../assets/images/ProfilePictures/ProfilePicture-1.svg";
import profilePicture2 from "../../../assets/images/ProfilePictures/ProfilePicture-2.svg";
import profilePicture3 from "../../../assets/images/ProfilePictures/ProfilePicture-3.svg";
import profilePicture4 from "../../../assets/images/ProfilePictures/ProfilePicture-4.svg";
import addProfile from "../../../assets/images/ProfilePictures/ProfilePicture.svg";


export default function Browser() {

  const navigate = useNavigate();

  const profiles = {
    profile1: {
      nome: "Sofia",
      img: profilePicture1
    },
    profile2: {
      nome: "Lucas",
      img: profilePicture2
    },
    profile3: {
      nome: "Isabella",
      img: profilePicture3
    },
    profile4: {
      nome: "Mateo",
      img: profilePicture4
    }
  }

  function teste(profile) {
    navigate(`/home`, { state: { profile } });
  }

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
                    {Object.keys(profiles).map(profileKey => {
                       const profile = profiles[profileKey];
                      return (
                        <li key={profileKey} onClick={() => teste(profile)}><img src={profile.img} alt='' /><p>{profile.nome}</p></li>
                      )
                    })}
                    <li><img src={addProfile} alt='' /><p>Adicionar Perfil</p></li>
                </ul>
            </div>
            <button>GERENCIAR PERFIS</button>
        </main>
    </section>
  );
}
