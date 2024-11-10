import React from "react";
import styles from "./Header.module.css";
import {useTranslation} from "react-i18next";

const Header: React.FC = () => {
    const {t} = useTranslation();
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="img/desire-logo.png" alt="DESIRE Logo"/>
            </div>
            <h1 className={styles.title}>{t('header.title')}</h1>
            <p className={styles.subtitle}>{t('header.subTitle')}</p>
            <p className={styles.description}>
                DESIRE – Premium Hotel-Residential Complex
                <br/>
                (Antalya, Turkey)
            </p>
            <button className={"orangeButton"}>
                Leave a request
            </button>
        </header>
    );
};

export default Header;
