"use client";
import img from "@/app/assets/images/contact.svg";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import style from "./modal.module.css";
export default function Modal({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}) {
  const handleCloseModal = () => {
    setIsVisible(false);
    window.location.reload();
  };
  return (
    <div
      className={[
        style.modalContainer,
        isVisible != null && isVisible ? style.modalVisible : undefined,
      ].join(" ")}
    >
      <div className={style.modalContent}>
        <IoClose onClick={handleCloseModal} size={30} color="#fff" />
        <Image className={style.img} src={img} alt="contact image" />
        <div>
          <h2>Message Envoyé !</h2>
          <p>Merci pour votre message ! Nous l&apos;avons bien reçu.</p>
        </div>
      </div>
    </div>
  );
}
