import React from "react";
import styles from './About.module.css';
const About: React.FC = () => {
    return (
        <section className={styles.about}>
            <div className={styles['about-title']}>
                <h2>ABOUT</h2>
            </div>
            <div className={styles['about-content']}>
                <p>
                    DESIRE is a premium hotel-residential complex located in a new modern district at the heart of
                    Antalya,
                    one of the top 10 most visited cities in the world.
                </p>
                <p>
                    The project is actively under construction, but there is still an opportunity to invest under
                    attractive
                    conditions! <strong>Completion is scheduled for Q4&nbsp;2025!</strong>
                </p>
            </div>
        </section>
    );
};

export default About;
