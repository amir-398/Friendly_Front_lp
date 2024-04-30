import instagram_logo from "@/app/assets/images/instagram.png";
import threads_logo from "@/app/assets/images/threads.png";
import tiktok_logo from "@/app/assets/images/tiktok.png";
import X_logo from "@/app/assets/images/x.png";
import logo from "@/app/assets/logo/logo.png";
import Image from "next/image";
import PageContainer from "../pageContainer/PageContainer";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <div className={style.footer}>
      <PageContainer>
        <div className={style.footerContainer}>
          <Image src={logo} alt="logo" width={200} />
          <div className={style.logoContainer}>
            <Image src={X_logo} alt="X_logo" width={30} />
            <Image src={instagram_logo} alt="X_logo" width={30} />
            <Image src={threads_logo} alt="X_logo" width={30} />
            <Image src={tiktok_logo} alt="X_logo" width={30} />
          </div>
          <div className={style.mentions}>
            <p>Mentions Légales</p>

            <p>Politique de confidentialité</p>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
