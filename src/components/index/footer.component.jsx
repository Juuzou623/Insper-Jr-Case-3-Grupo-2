import styles from "../../styles/components/index/footer.module.css";
import Img from "next/image";
import logo from "../../images/index/logo.png"
export const Footer = () => {
    return (
        <div>
        <div className={styles.fundo}></div>
        <div className={styles.footer}>
            <div className={styles.alinha}>
                <div className={styles.logo}><Img src={logo} /></div>
                <h1 className={styles.DuLar}>Chefe DuLar</h1>
            </div>
            <div>
                <p><b>Home</b></p>
                <p>Funcionamento</p>
                <p>Nossos Chefes</p>
                <p>Sobre nós</p>
            </div>
            <div>
                <p><b>Contato</b></p>
                <p>(11)1111-1111</p>
                <p>contato@homeschef.com</p>
            </div>
        </div>
        </div>
    );}
    