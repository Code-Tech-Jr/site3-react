import global from "../../assets/styles/global.module.css";
import styles from "./Hero.module.css";
import logoPhone from "../../assets/styles/logo-phone.png";
import logoDesktop from "../../assets/styles/logo-desktop.png";
import CalendarIcon from "../../assets/styles/calendar.png";

function Hero() {
  return (
    <div className={styles["hero"]}>
      <div className={styles["fundo-hero"]}></div>
      <div className={styles["logo-hero"]}>
        <img width={246} height={181} src={logoPhone} alt="Logo Casa&Lar" />
      </div>
      <div className={styles["content-hero"]}>
        <div className={styles["fundo-hero-desktop"]}></div>
        <div className={styles["logo-hero-desktop"]}>
          <img width={978} height={772} src={logoDesktop} alt="Logo Casa&Lar" />
        </div>

        <h1 className={styles["title-hero"]}>
          PROCURANDO UM IMÓVEL QUE SEJA A SUA CARA?
        </h1>

        <h2 className={styles["subtitle-hero"]}>
            Veio ao lugar certo!
        </h2>

        <p className={styles["description-hero"]}>
          Nós da mobiliária Casa&Lar Temos a moradia ideal para você!
        </p>

        <a href="#" className={styles["button-hero"]}>
          QUERO CONTRATAR
        </a>

        <div className={styles["date-hero"]}>
          <img width={51} height={46} src={CalendarIcon} alt="Icone Calendar" />
          <p>Nos dias 14 a 18 de novembro</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
