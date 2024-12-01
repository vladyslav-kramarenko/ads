import React from 'react';
import Apartment from '../Apartment/Apartment';
import styles from './Apartments.module.css';
import {useTranslation} from "react-i18next";

const apartmentData = [
    {
        titleKey: "bedroomResidence1",
        imageSrc: "/img/p-001_min-min.png",
        fileSrc: "/img/p-001.pdf",
        totalArea: "42.00",
        areaDetails: [
            { labelKey: "functionalArea", size: "38.70" },
            { labelKey: "kitchenLivingRoom", size: "18.60" },
            { labelKey: "bedroom", size: "11.00" },
            { labelKey: "bathroom", size: "4.10" },
            { labelKey: "balcony", size: "5.00" },
        ],
    },
    {
        titleKey: "bedroomResidence2",
        imageSrc: "/img/p-002_min-min.png",
        fileSrc: "/img/p-002.pdf",
        totalArea: "77.00",
        areaDetails: [
            { labelKey: "functionalArea", size: "71.15" },
            { labelKey: "kitchenLivingRoom", size: "21.50" },
            { labelKey: "bedroom", size: "13.20" },
            { labelKey: "bathroom", size: "4.31" },
            { labelKey: "balconies", size: "9.80" },
            { labelKey: "childrenRoom", size: "9.74" },
            { labelKey: "masterBathroom", size: "3.38" },
            { labelKey: "hall", size: "8.81" },
        ],
    },
    {
        titleKey: "bedroomResidence1",
        imageSrc: "/img/p-003_min-min.png",
        fileSrc: "/img/p-003.pdf",
        totalArea: "77.00",
        areaDetails: [
            {labelKey: "functionalArea", size: "38.88"},
            {labelKey: "kitchenLivingRoom", size: "20.60"},
            {labelKey: "bedroom", size: "10.00"},
            {labelKey: "bathroom", size: "4.20"},
            {labelKey: "balcony", size: "4.8"},
            {labelKey: "terrace", size: "49.12"},
        ],
    },
];

const Apartments: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.apartmentsSection}>
            <h3 className={"accent"}>{t("apartments.soldOutMessage")}</h3>
            <p className={styles.hurryToBookMessage}>{t("apartments.HurryToBookMessage")}</p>
            <p className={styles.hurryToBookMessage}>{t("apartments.HurryToBookMessage2")}</p>
            <div className={styles.apartments}>
                {apartmentData.map((apartment, index) => (
                    <Apartment
                        key={index}
                        title={t(`apartments.titles.${apartment.titleKey}`)}
                        totalArea={`${apartment.totalArea} ${t("apartments.areaUnit")}`}
                        imageSrc={apartment.imageSrc}
                        fileSrc={apartment.fileSrc}
                        areaDetails={apartment.areaDetails.map((detail) => ({
                            label: t(`apartments.labels.${detail.labelKey}`),
                            size: `${detail.size} ${t("apartments.areaUnit")}`,
                        }))}
                    />
                ))}
            </div>
            <a className={"orangeButton"} href={"#quiz"}>
                {t("apartments.getPrice")}
            </a>
        </section>
    );
};

export default Apartments;


