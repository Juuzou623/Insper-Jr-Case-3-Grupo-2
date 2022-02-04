import { useRouter } from "next/router";
import Img from "next/image";
import styles from "../../styles/components/index/main.module.css";
import chef from "../../images/index/chef.jpeg"

export const Main = () => {
    const router = useRouter();
    return (
        <div className={styles.geral}>
            <h1>Os melhores chefes de<br></br> São Paulo reunidos em<br></br> um só lugar</h1>
            <h3>Receba chefes renomados em sua casa para uma<br></br> refeição personalizada e inesquecível </h3>
            <button>Agende uma data</button>
            <div className={styles.chef}><Img src={chef} /></div>
        </div>
    );}
