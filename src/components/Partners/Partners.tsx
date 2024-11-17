import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Partners.module.css";

const partnersData = [
    {
        name: "Teus Group",
        logo: "/img/teus.png",
        descriptionKey: "partners.teusGroupDescription",
        website: "https://teus-group.com",
    },
    {
        name: "Zhytlobud-2",
        logo: "/img/zhytlobud.png",
        descriptionKey: "partners.zhytlobudDescription",
        website: "https://zhilstroj-2.ua",
    },
    {
        name: "Best Western",
        logo: "/img/bestWestern.png",
        descriptionKey: "partners.bestWesternDescription",
        website: "https://www.bestwestern.com",
    },
];

const Partners: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.partnersSection}>
            <h2 className={styles.title}>{t("partners.title")}</h2>
            <p className={styles.subtitle}>{t("partners.subtitle")}</p>
            <div className={styles.partners}>
                {partnersData.map((partner, index) => (
                    <div
                        key={index}
                        className={styles.partner}
                        onClick={() => window.open(partner.website, "_blank")}
                    >
                        <img
                            className={styles.logo}
                            src={partner.logo}
                            alt={partner.name}
                        />
                        <p className={styles.description}>{t(partner.descriptionKey)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
