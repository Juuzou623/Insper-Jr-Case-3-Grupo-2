import Img from "next/image";
import styles from "../../styles/components/index/chefes.module.css";
import Camila from "../../images/index/Camila.png"
import Carlos from "../../images/index/carlos.png"
import Iris from "../../images/index/iris.png"
import Estrelas from "../../images/index/Estrelas.png"

export const Chefes = () => {
    return (
        <div>
            <h2 className={styles.nossos_chefes}>Nossos Chefes</h2>
        <div className={styles.geral}>
            <div className={styles.cards}>
                <div className={styles.fotos}><Img src={Camila} /></div>
                <h2>Camila</h2>
                <div className={styles.estrelas}><Img src={Estrelas} /></div>
                <p>“Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit, sed do<br/>eiusmod tempor<br/> incididunt”</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.fotos}><Img src={Carlos} /></div>
                <h2>Carlos</h2>
                <div className={styles.estrelas}><Img src={Estrelas} /></div>
                <p>“Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit, sed do<br/>eiusmod tempor<br/> incididunt”</p>
            </div>
            <div className={styles.cards}>
                <div className={styles.fotos}><Img src={Iris} /></div>
                <h2>Íris</h2>
                <div className={styles.estrelas}><Img src={Estrelas} /></div>
                <p>“Lorem ipsum dolor sit<br/>amet, consectetur<br/>adipiscing elit, sed do<br/>eiusmod tempor<br/> incididunt”</p>
            </div>


        </div>
        <div className={styles.geral_fundo}>
            <div className={styles.fundo}></div><div className={styles.fundo}></div><div className={styles.fundo}></div>
        </div>
        </div>
    );}
    