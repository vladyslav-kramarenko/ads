import React from "react";

interface Advantage {
    title: string;
    description: string;
    iconSrc: string;
}

const advantagesData: Advantage[] = [
    {
        title: "INVESTMENT-ATTRACTIVE AREA",
        description:
            "DESIRE is located near the airport in the modern and dynamic Altintash district, developing at a colossal pace! " +
            "The active development of the area increases its investment appeal.",
        iconSrc: "../img/diamond-2.png",
    },
    {
        title: "HIGH LEVEL OF COMFORT",
        description:
            "Apartments with the service of a five-star hotel combine the feeling of home with a place where all your desires are impeccably met.",
        iconSrc: "../img/diamond-2.png",
    },
    {
        title: "INVEST IN APARTMENTS",
        description:
            "Demand for real estate in Antalya is only growing, so the acquired residence or apartments will become a profitable project for resale or rental.",
        iconSrc: "../img/diamond-2.png",
    },
    // Add more advantages here as needed
];

const Advantages: React.FC = () => {
    return (
        <section className="advantages">
            <h2>INVEST WISELY</h2>
            <p>Investment returns – up to 35% per annum | Expected project payback – 8-10 years | ROI – 12%</p>
            <div className="advantages-list">
                {advantagesData.map((advantage, index) => (
                    <div key={index} className="advantage-item">
                        <img src={advantage.iconSrc} alt={advantage.title} width="128" height="128" />
                        <h3>{advantage.title}</h3>
                        <p>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Advantages;
