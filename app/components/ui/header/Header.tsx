import logo from "@/app/assets/logo/logo.png";
import Image from "next/image";
import style from "./header.module.css";
export default function Header() {
  return (
    <div className={style.headerContainer}>
      <Image src={logo} alt="Logo" width={200} />
    </div>
  );
}
