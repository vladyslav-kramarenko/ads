import React from 'react';
import styles from './Apartment.module.css';

interface ApartmentProps {
    title: string;
    imageSrc: string;
    fileSrc: string;
    areaDetails: {
        label: string;
        size: string;
    }[];
    totalArea: string;
}

const Apartment: React.FC<ApartmentProps> = ({ title, fileSrc, imageSrc, areaDetails, totalArea }) => {
    const handleClick = () => {
        window.open(fileSrc, "_blank");
    };

    return (
        <div className={styles.apartment} onClick={handleClick}>
            <div className={styles.header}>
                <h3>{title}</h3>
            </div>
            <img src={imageSrc} alt={title} className={styles.image} />
            <div className={styles.details}>
                <div className={styles.totalArea}>
                    <span>Total area (brutto)</span>
                    <span className="accent">{totalArea}</span>
                </div>
                {areaDetails.map((detail, index) => (
                    <div key={index} className={styles.areaDetail}>
                        <span>{detail.label}</span>
                        <span>{detail.size}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apartment;
