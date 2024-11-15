import React, {useState} from "react";
import ReactPixel from "react-facebook-pixel";
import {useTranslation} from "react-i18next";
import styles from "./Quiz.module.css";
import "../../i18n"; // Ensure i18n is imported in your app

interface Answers {
    reason: string;
    amount: string;
    name: string;
    phone: string;
    email: string;
}

ReactPixel.init("YOUR_PIXEL_ID");
ReactPixel.pageView();

const sendLeadData = async (leadData: Answers) => {
    try {
        const response = await fetch("https://your-proxy-server-url.com/api/lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(leadData),
        });

        if (response.ok) {
            console.log("Lead data sent successfully!");
        } else {
            console.error("Error sending lead data:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

const Quiz: React.FC = () => {
    const {t} = useTranslation();
    const [step, setStep] = useState<number>(1);
    const [answers, setAnswers] = useState<Answers>({
        reason: "",
        amount: "",
        name: "",
        phone: "",
        email: "",
    });

    const handleNext = () => setStep((prevStep) => prevStep + 1);
    const handlePrev = () => setStep((prevStep) => prevStep - 1);

    const handleAnswerChange = (field: keyof Answers, value: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [field]: value,
        }));
    };

    const handleSubmit = () => {
        ReactPixel.track("Lead", {value: answers.amount});
        sendLeadData(answers);
    };

    return (
        <div id="quiz" className={styles.quiz}>
            {step === 1 && (
                <div className={styles.quizBody}>
                    <h2>{t("quiz.question1")}</h2>
                    <button
                        onClick={() => handleAnswerChange("reason", "housing")}
                        className={answers.reason === "housing" ? styles.active : ""}
                    >
                        {t("quiz.housing")}
                    </button>
                    <button
                        onClick={() => handleAnswerChange("reason", "investment")}
                        className={answers.reason === "investment" ? styles.active : ""}
                    >
                        {t("quiz.investment")}
                    </button>
                    <button
                        onClick={() => handleAnswerChange("reason", "other")}
                        className={answers.reason === "other" ? styles.active : ""}
                    >
                        {t("quiz.other")}
                    </button>
                    <div className={styles.navButtons}>
                        <button onClick={handleNext} className={styles.nextButton}>
                            {t("quiz.next")} →
                        </button>
                    </div>
                </div>
            )}
            {step === 2 && (
                <div className={styles.quizBody}>
                    <h2>{t("quiz.investmentAmount")}</h2>
                    <button
                        onClick={() => handleAnswerChange("amount", "$100k")}
                        className={answers.amount === "$100k" ? styles.active : ""}
                    >
                        $100k
                    </button>
                    <button
                        onClick={() => handleAnswerChange("amount", "$150k")}
                        className={answers.amount === "$150k" ? styles.active : ""}
                    >
                        $150k
                    </button>
                    <button
                        onClick={() => handleAnswerChange("amount", "$250k")}
                        className={answers.amount === "$250k" ? styles.active : ""}
                    >
                        $250k
                    </button>
                    <div className={styles.navButtons}>
                        <button onClick={handlePrev} className={styles.nextButton}>
                            ← {t("quiz.prev")}
                        </button>
                        <button onClick={handleNext} className={styles.nextButton}>
                            {t("quiz.next")} →
                        </button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className={styles.quizBody}>
                    <h2>{t("quiz.contactDetails")}</h2>
                    <input
                        type="text"
                        placeholder={t("quiz.namePlaceholder")}
                        onChange={(e) => handleAnswerChange("name", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={t("quiz.phonePlaceholder")}
                        onChange={(e) => handleAnswerChange("phone", e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder={t("quiz.emailPlaceholder")}
                        onChange={(e) => handleAnswerChange("email", e.target.value)}
                    />

                    <div className={styles.navButtons}>
                        <button onClick={handlePrev} className={styles.nextButton}>
                            ← {t("quiz.prev")}
                        </button>
                        <button onClick={handleSubmit} className={styles.nextButton}>
                            {t("quiz.send")}
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
