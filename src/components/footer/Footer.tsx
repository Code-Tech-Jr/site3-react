import styles from "./Footer.module.css";
import { useEffect, useState } from "react";

function Footer() {
  const [tempoAtual, setTempoAtual] = useState<number>(217532);

  useEffect(() => {
    const timer = setInterval(() => {
      setTempoAtual(prev => {
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  let x: number = tempoAtual;

  const dias: number = Math.floor(x / (24 * 60 * 60));
  x %= 24 * 60 * 60;

  const horas: number = Math.floor(x / (60 * 60));
  x %= 60 * 60;

  const minutos: number = Math.floor(x / 60);
  const segundos: number = x % 60;

  const texto: string =
    `${String(dias).padStart(2, "0")}D ` +
    `${String(horas).padStart(2, "0")}H ` +
    `${String(minutos).padStart(2, "0")}M ` +
    `${String(segundos).padStart(2, "0")}S`;

  return (
    <footer>
      <h1 className={styles["text-footer"]}>ESTA OFERTA ACABA EM {texto}</h1>
    </footer>
  );
}

export default Footer;
