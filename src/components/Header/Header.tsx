import React from "react";
import styles from "./Header.module.css";
import {useTranslation} from "react-i18next";

const Header: React.FC = () => {
    const {t} = useTranslation();
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src="img/desire-logo.svg" alt="DESIRE Logo"/>
                </div>
                <div className={styles.headerText}>
                    <h1 className={styles.title}>{t('header.title')}</h1>
                    <span className={styles.subtitle}>
                    <p className={"accent"}>{t('header.subTitle')}</p>
                </span>
                    <p className={styles.description}>
                        DESIRE <br/> Premium Hotel-Residential Complex
                        <br/>
                        (Antalya, Turkey)
                    </p>
                    <a className={"orangeButton"} href={"#quiz"}>Leave a request</a>
                </div>
            </div>
            <img className={styles.sectionDividerImg} src={"img/img.png"}/>
        </header>
    );
};

export default Header;
