import React from 'react';
import Apartment from '../Apartment/Apartment';
import styles from './Apartments.module.css';

const apartmentData = [
    {
        title: "BEDROOM RESIDENCE (1+1)",
        imageSrc: "/img/p-001_min-min.png",
        fileSrc: "/img/p-001_min-min.png",
        totalArea: "42.00 m²",
        areaDetails: [
            {label: "Functional area", size: "38.70 m²"},
            {label: "Kitchen & living room", size: "18.60 m²"},
            {label: "Bedroom", size: "11.00 m²"},
            {label: "Bathroom", size: "4.10 m²"},
            {label: "Balcony", size: "5.00 m²"},
        ],
    },
    {
        title: "BEDROOM RESIDENCE (2+1)",
        imageSrc: "/img/p-002_min-min.png",
        fileSrc: "/img/p-002_min-min.png",
        totalArea: "77.00 m²",
        areaDetails: [
            {label: "Functional area", size: "71.15 m²"},
            {label: "Kitchen & living room", size: "21.50 m²"},
            {label: "Bedroom", size: "13.20 m²"},
            {label: "Bathroom", size: "4.31 m²"},
            {label: "Balcony", size: "9.80 m²"},
        ],
    },
    {
        title: "BEDROOM RESIDENCE (1+1)",
        imageSrc: "/img/p-003_min-min.png",
        fileSrc: "/img/p-003_min-min.png",
        totalArea: "77.00 m²",
        areaDetails: [
            {label: "Functional area", size: "71.15 m²"},
            {label: "Kitchen & living room", size: "21.50 m²"},
            {label: "Bedroom", size: "13.20 m²"},
            {label: "Bathroom", size: "4.31 m²"},
            {label: "Balcony", size: "9.80 m²"},
        ],
    },
];

const Apartments: React.FC = () => {
    return (
        <section className={styles.apartmentsSection}>
            <h3 className={"accent"}>Over 60% of the complex is sold!</h3>
            <div className={styles.apartments}
            >
                {apartmentData.map((apartment, index) => (
                    <Apartment key={index} {...apartment} />
                ))}
            </div>
            <a className={"orangeButton"} href={"#quiz"}>Get price</a>
        </section>
    );
};

export default Apartments;


