import styles from "./Benefits.module.css";

function Benefits() {
  return (
    <section className={styles.sectionBenefits}>
      <h2 className={styles.title}>
        Vantagens de adquirir a sua casa nova com a gente:
      </h2>

      <div className={styles.card}>
        <span className={styles.number}>1</span>
        <h3>Facilidade na visita:</h3>
        <p>
          Nossos imóveis a venda tem 100% de disponibilidade de visitas durante a semana,
          qualquer dia que escolher poderá conhecer a casa dos seus sonhos.
        </p>
      </div>

      <div className={styles.card}>
        <span className={styles.number}>2</span>
        <h3>Chega de burocracias:</h3>
        <p>
          Não se preocupe! Nós cuidaremos de toda a papelada,
          para que você tenha todo o tempo para cuidar da mudança!
        </p>
      </div>

      <div className={styles.card}>
        <span className={styles.number}>3</span>
        <h3>Facilidade de pagamento:</h3>
        <p>
          Com nossas diversas formas de parcelamento,
          com certeza você sairá de chave na mão e endereço novo.
        </p>
      </div>
    </section>
  );
}

export default Benefits;