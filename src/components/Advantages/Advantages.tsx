import React from "react";
import styles from './Advantages.module.css';

interface Advantage {
    title: string;
    description: string;
}

const diamondIcon = "../img/diamond-2.png";

const advantagesData: Advantage[] = [
    {
        title: "INVESTMENT-ATTRACTIVE AREA",
        description:
            "DESIRE is located near the airport in the modern and dynamic Altintash district, which is developing at a colossal pace! Business infrastructure, shopping malls, restaurants, and shops, places for leisure and children's education attract guests and residents from around the world. The active development of the area increases its investment appeal, making it an excellent option that will quickly pay off and start generating income!",

    },
    {
        title: "HIGH LEVEL OF COMFORT",
        description:
            "Apartments with the service of a five-star hotel combine the feeling of home with a place where all your desires are impeccably met. Owners and residents have 24/7 access to the hotel's entire infrastructure – restaurants, wellness area, rooftop terraces, and relaxation patios.",

    },
    {
        title: "INVEST IN APARTMENTS",
        description:
            "Demand for real estate in Antalya is only growing, so the acquired residence or apartments will become a profitable project for resale or rental. With proximity to the sea, a warm climate, and developed infrastructure, you can attract tenants year-round.",

    },
    {
        title: "DESIRE INVEST PROGRAM",
        description:
            "The program offers investors a unique opportunity to purchase a share in hotel rooms, opening doors to high passive income. The system offers two program options: 25% or 50% share in a room, providing flexibility and the ability to invest according to the client's financial goals. One of the key advantages is the ability to expand the investment portfolio without the need to invest the full amount.",

    },
    {
        title: "5* COMPLEX AT A FAVORABLE PRICE",
        description:
            "A rich collection of layouts, large panoramic windows, meticulously thought-out interiors, and a variety of services create a unique space where residents with different lifestyles will feel comfortable. There are only 73 apartments and 59 hotel rooms with business-class finishing in the complex!",

    },
];

const Advantages: React.FC = () => {
    return (
        <section className={styles.advantagesWrapper}>
            <div className={styles.advantages}>
                <h2>INVEST WISELY</h2>
                <div className={styles.investDescription}>
                    <p>Investment returns – up to 35% per annum</p>
                    <p>Expected project payback – 8-10 years</p>
                    <p>ROI – 12%</p>
                </div>
                <a className={"orangeButton"} href={"#quiz"}>Get detailed proposal</a>
                <div className={styles.advantagesList}>
                    {advantagesData.map((advantage, index) => (
                        <div key={index} className={styles.advantageItem}>
                            <img src={diamondIcon} alt={advantage.title} width="128" height="128"/>
                            <h3>{advantage.title}</h3>
                            <p>{advantage.description}</p>
                        </div>
                    ))}
                </div>
                <a className={"orangeButton"} href={"#quiz"}>Request a consultation</a>

            </div>
            <img className={styles.sectionDividerImg} src={"img/img_1.png"}/>
        </section>
    );
};

export default Advantages;
