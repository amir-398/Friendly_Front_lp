import main_img from "@/app/assets/images/img_1.jpg";
import card_img_5 from "@/app/assets/images/img_5.jpg";
import card_img_6 from "@/app/assets/images/img_6.jpg";
import Image from "next/image";
import style from "./headSection.module.css";
export default function HeadSection() {
  return (
    <div className={style.section_1}>
      <div className={style.top}>
        <div className={style.left}>
          <div>
            <div>
              <p>✦ Aventure.</p>
              <h1>Rencontre en rejoingnant Frienddly</h1>
            </div>
            <p>
              Bienvenue dans le monde de &quot;Frienddy&quot;, une application
              révolutionnaire conçue pour faciliter l&apos;intégration
              harmonieuse des étudiants antillais en France métropolitaine
            </p>
          </div>
          <button>Télécharger l&apos;application</button>
        </div>
        <div className={style.right}>
          <div className={style.imgContainer}>
            <Image src={main_img} alt="image" />
            <div className={style.card}>
              <Image src={card_img_5} alt="image" />
              <p>
                Je recommande ! J&apos;ai adoré cette aventure au sein de leurs
                app !
              </p>
            </div>
            <div className={style.card}>
              <Image src={card_img_6} alt="image" />
              <p>Une appli géniale pour se faire des amis rapidement !</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <div>
          <p>38K</p>
          <p>Étudiants issue,t d’outre-mers qui étudient en métropole.</p>
        </div>
        <div>
          <p>3K</p>
          <p>Étudiants qui partent chaque année.</p>
        </div>
        <div>
          <p>39%</p>
          <p>Quittent leurs académie d’origine pour venir en métropole.</p>
        </div>
      </div>
    </div>
  );
}
