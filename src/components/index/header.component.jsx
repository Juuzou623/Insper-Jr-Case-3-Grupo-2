import { useRouter } from "next/router";
import Img from "next/image";
import styles from "../../styles/components/index/header.module.css";
import logo from "../../images/index/logo.png"
import * as React from 'react';

export const Header = () => {
    const router = useRouter();

    return (
    <div className={styles.header}>
        <div className={styles.alinha}>
            <div className={styles.logo}><Img src={logo} /></div>
            <h1 className={styles.DuLar}>Chefe DuLar</h1>
        </div>

        <div className={styles.main}>
            <div onClick={() => scrollBy({top:0, left:0, behavior:'smooth'})}><b>Home</b></div>
            <div onClick={() => scrollBy({top:600, left:0, behavior:'smooth'})}>Funcionamento</div>
            <div onClick={() => scrollBy({top:1100, left:0, behavior:'smooth'})}>Nossos chefes</div>
            <div onClick={() => scrollBy({top:1900, left:0, behavior:'smooth'})}>Sobre nós</div>
            <button className={styles.login} onClick={() => router.push("/cadastro_chef")}>Log-in</button>
        </div>
    </div>
    );}