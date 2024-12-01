import React from "react";
import styles from './Advantages.module.css';
import {useTranslation} from "react-i18next";

const diamondIcon = "../img/diamond-2.png";

const advantagesKeys = [
    "investmentAttractiveArea",
    "highLevelOfComfort",
    "investInApartments",
    "desireInvestProgram",
    "fiveStarComplex"
];

const Advantages: React.FC = () => {
    const {t} = useTranslation();
    return (
        <section className={styles.advantagesWrapper}>
            <div className={styles.advantages}>
                <h2>{t("advantages.investWisely")}</h2>
                <div className={styles.investDescription}>
                    <p>{t("advantages.investmentReturns")}</p>
                    <p>{t("advantages.payback")}</p>
                    <p>{t("advantages.roi")} – 12%</p>
                </div>
                <a className={"orangeButton"} href={"#quiz"}>{t("advantages.getDetailedProposal")}</a>
                <div className={styles.advantagesList}>
                    {advantagesKeys.map((key) => (
                        <div key={key} className={styles.advantageItem}>
                            <img src={diamondIcon} alt={t(`advantages.items.${key}.title`)} width="128" height="128"/>
                            <h3>{t(`advantages.items.${key}.title`)}</h3>
                            <p>{t(`advantages.items.${key}.description`)}</p>
                            <p>{t(`advantages.items.${key}.description2`)}</p>
                        </div>
                    ))}
                </div>
                <a className={"orangeButton"} href={"#quiz"}>{t("advantages.requestConsultation")}</a>
            </div>
            <img className={styles.sectionDividerImg} src={"img/img_1.png"}/>
        </section>
    );
};

export default Advantages;
