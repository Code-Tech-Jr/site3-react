import styles from "./Brief.module.css";

import thumbvideo1 from "../../assets/images/thumbVideo1.svg"
import thumbvideo2 from "../../assets/images/thumbVideo2.svg"

function Brief() {
  return (
    <section className={styles["section-brief"]}>
      <div className={styles["brief-container"]}>
        
        <div className={styles["brief-text"]}>
          A sua <strong>FELICIDADE</strong> também passa pelo lugar onde você mora!
          Mudar de casa significa mudar de vida! Estar mais próximo da família ou do trabalho são sinônimos de <strong>TRANQUILIDADE</strong> e <strong>CONFORTO</strong>.
          Adquira hoje mesmo um de nossos imóveis e alcance a tão deseja realização que todo mundo deseja!
        </div>
        
        <div className={styles["brief-text"]}>
          Assista a estes vídeos onde reunimos o depoimento de alguns de nossos <strong>CLIENTE REAIS</strong> extremamente satisfeitos com com suas aquisições!
        </div>

        <div className={styles["container-videos-brief"]}>
          <div className={styles["video-principal"]}>
            <img src={thumbvideo1} alt="Depoimento Principal" />
          </div>

          <button className={`${styles["brief-button"]} ${styles["desktop-only"]}`}>
            QUERO CONTRATAR
          </button>

          <div className={`${styles.video} ${styles.menores}`}>
            <img src={thumbvideo2} alt="Depoimento" />
          </div>
          <div className={`${styles.video} ${styles.menores}`}>
            <img src={thumbvideo2} alt="Depoimento" />
          </div>
          <div className={`${styles.video} ${styles.menores}`}>
            <img src={thumbvideo2} alt="Depoimento" />
          </div>

          <div className={`${styles.video} ${styles.menores} ${styles["desktop-only"]}`}>
            <img src={thumbvideo2} alt="Depoimento" />
          </div>
          <div className={`${styles.video} ${styles.menores} ${styles["desktop-only"]}`}>
            <img src={thumbvideo2} alt="Depoimento" />
          </div>
          <div className={`${styles.video} ${styles.menores} ${styles["desktop-only"]}`}>
            <img src={thumbvideo2} alt="Depoimento" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Brief;