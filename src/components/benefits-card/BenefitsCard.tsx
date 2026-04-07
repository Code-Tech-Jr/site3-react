import styles from "./BenefitsCard.module.css"

interface CardProps {
    title:string;
    text:string;
    image:string;
}


function BenefitsCard(props:CardProps) {
    return (
        <div className={styles["card-container"]}>
            <img src={props.image} className={styles["image-numero"]}></img>
            <div className={styles["card-title"]}>{props.title}</div>
            <div className={styles["card-text"]}>{props.text}</div>
        </div>
    );
}

export default BenefitsCard;