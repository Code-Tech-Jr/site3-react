import styles from "./Form.module.css"

function Form(){
    return (
        <section className={styles["section-form"]}>
            <div className={styles["container-form"]}>
                <div className={styles["column-left"]}>
                    <div className={styles["container-text-form"]}>
                    <div className={styles["form-title"]}>EVENTO GRATUITO ONLINE:</div>
                    <div className={styles["form-subtitle"]}>
                        Em 4 dias de evento vamos mostrar tudo o que existe de melhor no mercado imobiliário.
                    </div>
                    </div>
                    <div className={styles["form-text"]}>
                    Cadastre-se com o seu melhor e-mail e receba os detalhes do evento.
                    </div>
                </div>
                <form className={styles["container-forms-form"]}>
                    <input className={styles["input-forms"]} type="text" placeholder="Seu nome completo" required></input>
                    <input className={styles["input-forms"]} type="email" placeholder="Seu melhor e-mail" required></input>
                    <input className={styles["input-forms"]} type="tel" placeholder="Seu WhatsApp"></input>
                    <div className={styles["radio-button-form"]}>
                    <input type="checkbox" id="termos" required></input>
                    <label>Estou de acordo com os termos</label>
                    </div>
                    <button type="submit" className={styles["botao-forms"]}>PARTICIPAR DO EVENTO</button>
                </form>
                </div>
        </section>
    )
}

export default Form;