"use client";
import img from "@/app/assets/images/contact.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import style from "./contactSection.module.css";
const schema = yup.object({
  name: yup.string().required("Champ obligatoire !"),
  email: yup.string().email().required("Champ obligatoire !"),
  message: yup.string().required("Champ obligatoire !"),
});

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={style.contactSection}>
      <div className={style.left}>
        <h1>Contactez-nous</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("name")}
              placeholder="Entre ton Nom-prénom"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            />
          </div>
          <div>
            <textarea
              {...register("message")}
              name="message"
              id="message"
              placeholder="Allez-u, nous vous écoutons !"
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className={style.right}>
        <Image src={img} alt="image" />
        <div>
          <div>
            <svg
              width="39"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19.3998" cy="19.061" r="18.2919" stroke="#CFE0BE" />
              <path
                d="M20.0264 10.2915C17.8675 10.2938 15.7978 11.0723 14.2712 12.4563C12.7446 13.8403 11.8859 15.7167 11.8833 17.674C11.8807 19.2735 12.457 20.8295 13.5238 22.1035C13.5238 22.1035 13.7459 22.3686 13.7821 22.4069L20.0264 29.0834L26.2737 22.4035C26.3063 22.3679 26.5291 22.1035 26.5291 22.1035L26.5299 22.1015C27.5961 20.8281 28.1721 19.2727 28.1696 17.674C28.167 15.7167 27.3083 13.8403 25.7817 12.4563C24.2551 11.0723 22.1854 10.2938 20.0264 10.2915ZM20.0264 20.3586C19.4408 20.3586 18.8683 20.2011 18.3813 19.9061C17.8944 19.6111 17.5148 19.1919 17.2907 18.7013C17.0666 18.2108 17.0079 17.671 17.1222 17.1503C17.2365 16.6295 17.5185 16.1512 17.9326 15.7757C18.3467 15.4003 18.8744 15.1446 19.4488 15.041C20.0232 14.9374 20.6185 14.9906 21.1596 15.1938C21.7007 15.397 22.1632 15.7411 22.4885 16.1825C22.8139 16.624 22.9876 17.143 22.9876 17.674C22.9866 18.3857 22.6743 19.068 22.1192 19.5713C21.5641 20.0745 20.8115 20.3577 20.0264 20.3586Z"
                fill="#E66357"
              />
            </svg>

            <p>45 rue du chemin vert</p>
          </div>
          <div>
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.2442 29.2509C18.2246 29.265 10.6198 21.5697 10.6304 11.6371C10.6304 10.9876 11.1566 10.459 11.8049 10.459H14.9055C15.4869 10.459 15.9814 10.8866 16.0671 11.4621C16.2716 12.8422 16.673 14.1858 17.2592 15.4518L17.3802 15.7125C17.4614 15.888 17.4789 16.0863 17.4296 16.2733C17.3803 16.4603 17.2673 16.6241 17.1101 16.7367C16.1493 17.4226 15.7829 18.8026 16.531 19.8785C17.473 21.233 18.6486 22.4091 20.0028 23.3514C21.0798 24.0984 22.4599 23.732 23.1446 22.7724C23.257 22.6147 23.4211 22.5013 23.6083 22.4517C23.7955 22.4022 23.9942 22.4196 24.1699 22.5011L24.4295 22.6209C25.6956 23.2081 27.0392 23.6098 28.4192 23.8142C28.9947 23.8999 29.4222 24.3944 29.4222 24.9769V28.0764C29.4222 28.2307 29.3918 28.3836 29.3327 28.5261C29.2736 28.6687 29.187 28.7982 29.0778 28.9073C28.9686 29.0164 28.839 29.1029 28.6964 29.1618C28.5538 29.2208 28.4009 29.2511 28.2466 29.2509H28.2442Z"
                fill="#E66357"
              />
              <circle cx="19.3998" cy="19.2286" r="18.2919" stroke="#CFE0BE" />
            </svg>

            <p>07 52 67 58 08</p>
          </div>
          <div>
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5431 15.6377L20.0263 20.3357L12.5096 15.6377V13.7585L20.0263 18.4565L27.5431 13.7585M27.5431 11.8793H12.5096C11.4666 11.8793 10.6304 12.7156 10.6304 13.7585V25.0336C10.6304 25.532 10.8284 26.01 11.1808 26.3624C11.5332 26.7149 12.0112 26.9128 12.5096 26.9128H27.5431C28.0415 26.9128 28.5194 26.7149 28.8718 26.3624C29.2243 26.01 29.4222 25.532 29.4222 25.0336V13.7585C29.4222 13.2601 29.2243 12.7822 28.8718 12.4297C28.5194 12.0773 28.0415 11.8793 27.5431 11.8793Z"
                fill="#E66357"
              />
              <circle cx="19.3998" cy="19.3961" r="18.2919" stroke="#CFE0BE" />
            </svg>

            <p>Imane.Edouard@my-digital-school.org</p>
          </div>
        </div>
      </div>
    </div>
  );
}
