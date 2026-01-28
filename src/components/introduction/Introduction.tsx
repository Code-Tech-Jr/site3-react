import global from "../../assets/styles/global.module.css";
import styles from "./Introduction.module.css"

function Introduction(){
    return(
        <section className={styles["section-introduction"]}>
            <div className={styles["introduction-text"]}>
                <p>Já pensou em mudar de vida, respirar novos ares e conhecer novos lugares?</p>
                <p>Já se imaginou morando em um lugar próximo do centro mas ao mesmo tempo com a tranquilidade dos bairros mais afastados?</p>
            </div>
        </section>
    )
}

export default Introduction;