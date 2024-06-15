import main_img from "@/app/assets/images/img_1.png";
import card_img_2 from "@/app/assets/images/img_2.png";
import card_img_3 from "@/app/assets/images/img_3.png";
import Image from "next/image";
import Link from "next/link";
import style from "./headSection.module.css";
export default function HeadSection() {
  return (
    <div className={style.section_1}>
      <div className={style.top}>
        <div className={style.left}>
          <div>
            <div>
              <p>✦ Aventure.</p>
              <h1>Frienddly, ton allier pour un nouveau départ</h1>
            </div>
            <p>
              Bienvenue dans le monde de &quot;Frienddy&quot;, une application
              révolutionnaire conçue pour faciliter l&apos;intégration
              harmonieuse des étudiants antillais en France métropolitaine
            </p>
          </div>
          <Link
            href={"https://www.instagram.com/frienddly.app/"}
            target="_blank"
          >
            <button>Follow nous sur les réseaux</button>
          </Link>
        </div>
        <div className={style.right}>
          <div className={style.imgContainer}>
            <Image src={main_img} alt="image" />
            <div className={style.card}>
              <Image src={card_img_2} alt="image" />
              <p>
                Je recommande ! J&apos;ai adoré cette aventure au sein de leurs
                app !
              </p>
            </div>
            <div className={style.card}>
              <Image src={card_img_3} alt="image" />
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
