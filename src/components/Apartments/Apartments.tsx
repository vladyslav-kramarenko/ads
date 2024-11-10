import React from "react";
import styles from "./Apartments.module.css";

const Apartments: React.FC = () => {
    return (
        <section className={styles.apartments}>
                <div className={"accent"}>Over 60% of the complex is sold!</div>
            <a className={"orangeButton"} href={"#quiz"}>Leave a request</a>

        </section>
    );
};

export default Apartments;