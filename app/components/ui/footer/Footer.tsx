import instagram_logo from "@/app/assets/images/instagram.png";
import tiktok_logo from "@/app/assets/images/tiktok.png";
import logo from "@/app/assets/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../pageContainer/PageContainer";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <div className={style.footer}>
      <PageContainer>
        <div className={style.footerContainer}>
          <Image src={logo} alt="logo" width={200} />
          <div className={style.logoContainer}>
            <Link href={"https://www.tiktok.com/@friendd.app"} target="_blank">
              <Image src={tiktok_logo} alt="X_logo" width={30} />
            </Link>
            <Link
              href={"https://www.instagram.com/frienddly.app/"}
              target="_blank"
            >
              <Image src={instagram_logo} alt="X_logo" width={30} />
            </Link>
          </div>
          <div className={style.mentions}>
            <Link href={"/cgu"}>
              <p>Mentions Légales</p>
            </Link>
            <Link href={"mailto:frienddly.outremer@gmail.com"}>
              <p>frienddly.outremer@gmail.com</p>
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
