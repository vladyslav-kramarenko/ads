import React from "react";
import {useTranslation} from "react-i18next";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    const {t} = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.ctaSection}>
                <a href={"#quiz"} className={"orangeButton"}>
                    {t("footer.cta")}
                </a>
            </div>
            <div className={styles.contactSection}>
                <h3 className={styles.title}>{t("footer.contacts")}</h3>
                <p className={styles.address}>Antalya, Aksu, Altintas, 205035; 15309/12</p>
                <a className={styles.phone} href={"tel:+90 212 922-36-01"}>+90 212 922-36-01 (TR)</a>
                <a className={styles.phone} href={"tel:+380 97 22-77-333"}>+380 97 22-77-333 (UA)</a>
                <a className={styles.email} href={"mailto:info@desire-antalya.com"}>info@desire-antalya.com</a>
            </div>
            <div className={styles.copyright}>
                © {new Date().getFullYear()} TEUS Group. {t("footer.copyright")}
                <p>
                    Made by{' '}
                    <a
                        href="https://kramarenko.info?utm_source=ads&utm_medium=web&utm_campaign=desire"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vladyslav Kramarenko
                    </a>
                </p>
            </div>

        </footer>
    );
};

export default Footer;
