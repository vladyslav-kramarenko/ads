import React from "react";
import styles from './About.module.css';
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className={styles.about}>
            <div className={styles['about-title']}>
                <h2>{t("about.title")}</h2>
            </div>
            <div className={styles['about-content']}>
                <p>
                    {t("about.description1")}
                </p>
                <p>
                    {t("about.description2")}
                </p>
                <p className={styles.completion}>
                    {t("about.completion")}
                    <span className={"accent"}>{t("about.kvartal")}&nbsp;2025!</span>
                </p>
            </div>
        </section>
    );
};

export default About;
