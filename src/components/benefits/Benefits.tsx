import global from "../../assets/styles/global.module.css"
import styles from "./Benefits.module.css"
import BenefitsCard from "../benefits-card/BenefitsCard.tsx"

import image1 from "../../assets/images/1.svg"
import image2 from "../../assets/images/2.svg"
import image3 from "../../assets/images/3.svg"

function Benefits() {
  return (
    <section className={styles["section-benefits"]}>
      <div className={styles["benefits-title"]}>Vantagens de adquirir a sua casa nova com a gente:</div>
      <div className={styles["card-grid"]}>
        <BenefitsCard 
        image={image1}
        title="Facilidade na visita:"
        text="Nossos imóveis a venda tem 100% de disponibilidade de visitas durante a semana, qualquer dia que escolher poderá conhecer a casa dos seus sonhos."></BenefitsCard>
        <BenefitsCard 
        image={image2}
        title="Chega de burocracias:"
        text="Não se preocupe! Nós cuidaremos de toda a papelada, para que você tenha todo o tempo para cuidar da mudança!"></BenefitsCard>
        <BenefitsCard 
        image={image3}
        title="Facilidade de pagamento:"
        text="Com nossas diversas formas de parcelamento, com certeza você sairá de chave na mão e endereço novo!"></BenefitsCard>
      </div>
    </section>
  );
}

export default Benefits;