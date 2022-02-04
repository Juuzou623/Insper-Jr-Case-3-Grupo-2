import { useRouter } from "next/router";
import Img from "next/image";
import styles from "../../styles/components/index/funciona.module.css";
import cadastro_p from "../../images/index/cadastro.png"
import cadastro_l from "../../images/index/cadastro_laranja.png"
import calendario_p from "../../images/index/calendar.png"
import calendario_l from "../../images/index/calendar_laranja.png"
import chapeu_p from "../../images/index/chapeu.png"
import chapeu_l from "../../images/index/chapeu_laranja.png"
import hand_p from "../../images/index/hand.png"
import hand_l from "../../images/index/hand_laranja.png"
import panela_p from "../../images/index/panela.png"
import panela_l from "../../images/index/panela_laranja.png"
import estrela_p from "../../images/index/stars.png"
import estrela_l from "../../images/index/stars_laranja.png"
import { useState } from "react";



export const Funciona = () => {
    const [ srcCadastro, setSrcCadastro] = useState(cadastro_l);
    const [ srcCalendar, setSrcCalendar] = useState(calendario_l);
    const [ srcChapeu, setSrcChapeu] = useState(chapeu_l);
    const [ srcHand, setSrcHand] = useState(hand_l);
    const [ srcPanela, setSrcPanela] = useState(panela_l);
    const [ srcEstrela, setSrcEstrela] = useState(estrela_l);

    const [ classCadastro, setClassCadastro] = useState(styles.hidden);
    const [ classCalendar, setClassCalendar] = useState(styles.hidden);
    const [ classChapeu, setClassChapeu] = useState(styles.hidden);
    const [ classHand, setClassHand] = useState(styles.hidden);
    const [ classPanela, setClassPanela] = useState(styles.hidden);
    const [ classEstrela, setClassEstrela] = useState(styles.hidden);

    const router = useRouter();
    return (
        <div className={styles.geral}>
            <h2>Como funciona?</h2>
            <div className={styles.botoes}>
                <button onClick={ () => {
                    setSrcCadastro(srcCadastro)
                    srcCadastro = cadastro_p
                    setClassCadastro(classCadastro)
                    classCadastro=styles.n_hidden

                    setSrcCalendar(srcCalendar)
                    srcCalendar = calendario_l
                    setClassCalendar(classCalendar)
                    classCalendar=styles.hidden

                    setSrcChapeu(srcChapeu)
                    srcChapeu = chapeu_l
                    setClassChapeu(classChapeu)
                    classChapeu=styles.hidden

                    setSrcHand(srcHand)
                    srcHand = hand_l
                    setClassHand(classHand)
                    classHand=styles.hidden

                    setSrcPanela(srcPanela)
                    srcPanela = panela_l
                    setClassPanela(classPanela)
                    classPanela=styles.hidden

                    setSrcEstrela(srcEstrela)
                    srcEstrela = estrela_l
                    setClassEstrela(classEstrela)
                    classEstrela=styles.hidden
                }}><Img src={srcCadastro} /></button>

                <button onClick={ () => {
                    setSrcCadastro(srcCadastro)
                    srcCadastro = cadastro_l
                    setClassCadastro(classCadastro)
                    classCadastro=styles.hidden

                    setSrcCalendar(srcCalendar)
                    srcCalendar = calendario_p
                    setClassCalendar(classCalendar)
                    classCalendar=styles.n_hidden

                    setSrcChapeu(srcChapeu)
                    srcChapeu = chapeu_l
                    setClassChapeu(classChapeu)
                    classChapeu=styles.hidden

                    setSrcHand(srcHand)
                    srcHand = hand_l
                    setClassHand(classHand)
                    classHand=styles.hidden

                    setSrcPanela(srcPanela)
                    srcPanela = panela_l
                    setClassPanela(classPanela)
                    classPanela=styles.hidden

                    setSrcEstrela(srcEstrela)
                    srcEstrela = estrela_l
                    setClassEstrela(classEstrela)
                    classEstrela=styles.hidden
                }} ><Img src={srcCalendar} /></button>

                <button onClick={ () => {
                    setSrcCadastro(srcCadastro)
                    srcCadastro = cadastro_l
                    setClassCadastro(classCadastro)
                    classCadastro=styles.hidden

                    setSrcCalendar(srcCalendar)
                    srcCalendar = calendario_l
                    setClassCalendar(classCalendar)
                    classCalendar=styles.hidden

                    setSrcChapeu(srcChapeu)
                    srcChapeu = chapeu_p
                    setClassChapeu(classChapeu)
                    classChapeu=styles.n_hidden

                    setSrcHand(srcHand)
                    srcHand = hand_l
                    setClassHand(classHand)
                    classHand=styles.hidden

                    setSrcPanela(srcPanela)
                    srcPanela = panela_l
                    setClassPanela(classPanela)
                    classPanela=styles.hidden

                    setSrcEstrela(srcEstrela)
                    srcEstrela = estrela_l
                    setClassEstrela(classEstrela)
                    classEstrela=styles.hidden
                }}  ><Img src={srcChapeu} /></button>

                <button onClick={ () => {
                    setSrcCadastro(srcCadastro)
                    srcCadastro = cadastro_l
                    setClassCadastro(classCadastro)
                    classCadastro=styles.hidden

                    setSrcCalendar(srcCalendar)
                    srcCalendar = calendario_l
                    setClassCalendar(classCalendar)
                    classCalendar=styles.hidden

                    setSrcChapeu(srcChapeu)
                    srcChapeu = chapeu_l
                    setClassChapeu(classChapeu)
                    classChapeu=styles.hidden

                    setSrcHand(srcHand)
                    srcHand = hand_p
                    setClassHand(classHand)
                    classHand=styles.n_hidden

                    setSrcPanela(srcPanela)
                    srcPanela = panela_l
                    setClassPanela(classPanela)
                    classPanela=styles.hidden

                    setSrcEstrela(srcEstrela)
                    srcEstrela = estrela_l
                    setClassEstrela(classEstrela)
                    classEstrela=styles.hidden
                }}  ><Img src={srcHand} /></button>

                <button onClick={ () => {
                    setSrcCadastro(srcCadastro)
                    srcCadastro = cadastro_l
                    setClassCadastro(classCadastro)
                    classCadastro=styles.hidden

                    setSrcCalendar(srcCalendar)
                    srcCalendar = calendario_l
                    setClassCalendar(classCalendar)
                    classCalendar=styles.hidden

                    setSrcChapeu(srcChapeu)
                    srcChapeu = chapeu_l
                    setClassChapeu(classChapeu)
                    classChapeu=styles.hidden

                    setSrcHand(srcHand)
                    srcHand = hand_l
                    setClassHand(classHand)
                    classHand=styles.hidden

                    setSrcPanela(srcPanela)
                    srcPanela = panela_p
                    setClassPanela(classPanela)
                    classPanela=styles.n_hidden

                    setSrcEstrela(srcEstrela)
                    srcEstrela = estrela_l
                    setClassEstrela(classEstrela)
                    classEstrela=styles.hidden
                }}  ><Img src={srcPanela} /></button>

                <button onClick={ () => {
                    setSrcCadastro(srcCadastro)
                    srcCadastro = cadastro_l
                    setClassCadastro(classCadastro)
                    classCadastro=styles.hidden

                    setSrcCalendar(srcCalendar)
                    srcCalendar = calendario_l
                    setClassCalendar(classCalendar)
                    classCalendar=styles.hidden

                    setSrcChapeu(srcChapeu)
                    srcChapeu = chapeu_l
                    setClassChapeu(classChapeu)
                    classChapeu=styles.hidden

                    setSrcHand(srcHand)
                    srcHand = hand_l
                    setClassHand(classHand)
                    classHand=styles.hidden

                    setSrcPanela(srcPanela)
                    srcPanela = panela_l
                    setClassPanela(classPanela)
                    classPanela=styles.hidden

                    setSrcEstrela(srcEstrela)
                    srcEstrela = estrela_p
                    setClassEstrela(classEstrela)
                    classEstrela=styles.n_hidden
                }}  ><Img src={srcEstrela} /></button>
            </div>
            <div className={styles.textos}>
                <p className={classCadastro}><b>Cadastro</b><br/>Você realiza o<br/>cadastro na nossa<br/> plataforma,<br/>inserindo seus<br/>dados pessoais</p>
                <p className={classCalendar}><b>Agendamento</b><br/>Você realiza o<br/>cadastro na nossa<br/> plataforma,<br/>inserindo seus<br/>dados pessoais</p>
                <p className={classChapeu}><b>Chefes disponíveis</b><br/>Você realiza o<br/>cadastro na nossa<br/> plataforma,<br/>inserindo seus<br/>dados pessoais</p>
                <p className={classHand}><b>Orçamento</b><br/>Você realiza o<br/>cadastro na nossa<br/> plataforma,<br/>inserindo seus<br/>dados pessoais</p>
                <p className={classPanela}><b>Serviço</b><br/>Você realiza o<br/>cadastro na nossa<br/> plataforma,<br/>inserindo seus<br/>dados pessoais</p>
                <p className={classEstrela}><b>Feedback</b><br/>Você realiza o<br/>cadastro na nossa<br/> plataforma,<br/>inserindo seus<br/>dados pessoais</p>
            </div>
        </div>

    );
}