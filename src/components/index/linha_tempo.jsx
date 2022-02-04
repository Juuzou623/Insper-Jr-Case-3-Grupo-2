import Img from "next/image";
import styles from "../../styles/components/index/linha_tempo.module.css";


export const Linha_tempo = () => {
    return (
        <div>
            <h2 className={styles.sobre}>Sobre nós</h2>
            <h3 className={styles.hist}>Nossa história</h3>
            <div className={styles.linha}>
                <div className={styles.texto}>
                    <h3 className={styles.anos}>2019</h3>
                    <p>
                    “Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit, sed do<br/>eiusmod tempor<br/>incididunt”
                    </p>
                </div>
                <div className={styles.texto}>
                    <h3 className={styles.anos}>
                        2020
                    </h3>
                    <p>
                    “Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit, sed do<br/>eiusmod tempor<br/>incididunt”
                    </p>
                </div>
                <div className={styles.texto}>
                    <h3 className={styles.anos}>
                        2021
                    </h3>
                    <p>
                    “Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit, sed do<br/>eiusmod tempor<br/>incididunt”
                    </p>
                </div>
                <div className={styles.texto}>
                    <h3 className={styles.anos}>
                        Futuro
                    </h3>
                    <p>
                    “Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit, sed do<br/>eiusmod tempor<br/>incididunt”
                    </p>
                </div>
            </div>
        </div>

    );}
    