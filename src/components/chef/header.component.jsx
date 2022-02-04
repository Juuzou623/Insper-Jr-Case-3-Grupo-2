import Img from "next/image";
import seta from "../../images/Chef/seta.png";
import styles from  "../../styles/components/Chef/header.module.css";
import barra from "../../images/Chef/barrinha.png";
import React, { Component } from "react";
import italiana from "../../images/Chef/italiana.png";
import arabe from "../../images/Chef/arabe.png";
import francesa from"../../images/Chef/francesa.png";
import japonesa from"../../images/Chef/japonesa.png";
import mediterranea from"../../images/Chef/mediterranea.png";
import fastfood from"../../images/Chef/fastfood.png";
import mexicana from"../../images/Chef/mexicana.png";
import churrasco from"../../images/Chef/churrasco.png";
import certo from"../../images/Chef/certo.png";
import { useState } from "react";

export const Header = () => {
    const [ classCirculo1, setClassCirculo1] = useState(styles.circulo2);
    const [ classCirculo2, setClassCirculo2] = useState(styles.circulo2);
    const verifica = true
    const verifica2 = true
    return (
        <div>
            <div className={styles.alinha}>
                <h1><b>Crie sua conta gratuitamente</b></h1>
                <div className={styles.voltar}><Img src={seta}/></div>
            </div>
            <div className={styles.progress}>
                <div className={styles.list}>
                    <div>Especialidades</div>
                    <div>Agendamento</div>
                    <div>Confirmação</div>
                </div>
                <div className={styles.barra_progress}><Img src={barra}/></div>
            </div>
            <div className={styles.perguntas}>
                <h2 className={styles.text}>Qual o número de pessoas para a ocasião?</h2>
                <input className={styles.input}></input>

                <div className={styles.alinha_circulo}>
                    <h2 className={styles.text}>Você gostaria de solicitar o serviço de limpeza?</h2>
                    <button onClick={ () => {
                        setClassCirculo1(classCirculo1)
                        if(verifica){
                            classCirculo1 = styles.circulo
                            verifica = false
                        }
                        else{
                            classCirculo1 = styles.circulo1
                            verifica = true
                        }
                        }
                    } className={classCirculo1}><Img src={certo} /></button>
                </div>
                
                <div className={styles.alinha_circulo}>
                    <h2 className={styles.text} className={styles.text}>Você gostaria de solicitar o serviço de garçom?</h2>
                    <button onClick={ () => {
                        setClassCirculo2(classCirculo2)
                        if(verifica2){
                            classCirculo2 = styles.circulo
                            verifica2 = false
                        }
                        else{
                            classCirculo2 = styles.circulo2
                            verifica2 = true
                        }
                        }
                    } className={classCirculo2}><Img src={certo} /></button>
                </div>
            </div>
        </div>
    );
}

export const Main = () => {
    return(
        <div>
            <h2 className={styles.text} className={styles.text}>Qual especialidade desejada?</h2>
            <div className={styles.alinha_botao}>
                <div className={styles.alinha_botao2}>
                    <button><Img src={italiana}/></button>
                    <button><Img src={arabe}/></button>
                </div>
                <div className={styles.alinha_botao2}>
                    <button><Img src={francesa}/></button>
                    <button><Img src={japonesa}/></button>
                </div>
                <div className={styles.alinha_botao2}>
                    <button><Img src={mediterranea}/></button>
                    <button><Img src={fastfood}/></button>
                </div>
                <div className={styles.alinha_botao2}>
                    <button><Img src={mexicana}/></button>
                    <button><Img src={churrasco}/></button>
                </div>
            </div>
        </div>
    )
}

export const Restri = () => {
    const [ classCirculo3, setClassCirculo3] = useState(styles.circulo2);
    const verifica3 = true
    return(
        <div>
            <div className={styles.alinha_circulo}>
                <h2 className={styles.text}>Você possui alguma restrição alimentar?</h2>
                <button onClick={ () => {
                    setClassCirculo3(classCirculo3)
                        if(verifica3){
                            classCirculo3 = styles.circulo
                            verifica3 = false
                        }
                        else{
                            classCirculo3 = styles.circulo2
                            verifica3 = true
                        }
                        }
                        } className={classCirculo3}><Img src={certo} /></button>
            </div>
            
            <div className={styles.alinha_botao_restr}>
                <button>Vegetariano</button>
                <button>Intolerância a glúten</button>
                <button>Alérgico à nozes</button>
                <button>Alérgico a mariscos</button>
                <button>Alérgico a lacticínios</button>
            </div>

            <button className={styles.confirmar}>Próximo</button>
        </div>
    )
}