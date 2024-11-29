import React, {useEffect, useState} from "react";
import ReactPixel from "react-facebook-pixel";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-number-input";
import styles from "./Quiz.module.css";
import "react-phone-number-input/style.css";
import { Question } from "../../types/Question";
import {saveUTMParams} from "../../util/saveUTMParams";
import ModalMessage from "../ModalMessage/ModalMessage";
import i18n from "i18next";
import {createContact, createDeal, createGPlusEntry} from "../../util/crmApi";

interface QuizProps {
    questionSet: ReadonlyArray<Question>;
}

const hubspotDealstage = process.env.REACT_APP_DEALSTAGE;
const hubspotPipeline = process.env.REACT_APP_PIPELINE;

const Quiz: React.FC<QuizProps> = ({ questionSet }) => {
    const { t } = useTranslation();

    const [step, setStep] = useState<number>(0);
    const currentQuestion = questionSet[step];

    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState<string>("");
    const [agree, setAgree] = useState<boolean>(false);
    const [location, setLocation] = useState<string>("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const locationResponse = await fetch('https://proxy.teus-group.com/api/location');
                const locationData = await locationResponse.json();
                setLocation(`${locationData.city}, ${locationData.region}, ${locationData.country_name}`);
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };

        fetchLocation();
    }, []);

    const handleAnswerChange = (field: string, value: string) => {
        setAnswers((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleNext = () => {
        if (step < questionSet.length) {
            setStep((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (step > 0) {
            setStep((prev) => prev - 1);
        }
    };

    const handleSubmit = async () => {
        if (!name || !phone || !email || !agree) {
            setModalMessage(t("quiz.pleaseFillAllFields"));
            setIsModalOpen(true);
            return;
        }

        const notes = Object.entries(answers)
            .map(([questionId, answerId]) => {
                const questionText = t(questionId); // Translate question key
                const answerText = t(answerId); // Translate answer key
                return `${questionText}: ${answerText}`;
            })
            .join("\n\n");

        const utmParams = saveUTMParams();

        const hubSpotContactData = {
            firstname: name,
            phone: phone,
            email: email,
            hs_language: "en",
            website: "ads.desire-antalya.com",
            lifecyclestage: 'lead',
            location: location,
            ...utmParams,
        };

        const hubSpotDealData = {
            properties: {
                email: email,
                dealname: name,
                dealstage: hubspotDealstage,
                pipeline: hubspotPipeline,
                lead_source: 'site - desire-antalya.com',
                comment: notes,
                location: location,
                ...utmParams,
            }
        };

        const gPlusData = {
            name: name,
            phone: phone,
            email: email,
            note: notes,
            lang: languageKey,
            location: location,
            ...utmParams,
        };

        try {
            const contactResponse = await createContact(hubSpotContactData);
            const contactId = contactResponse.id;

            await createDeal(contactId, hubSpotDealData);
            await createGPlusEntry(gPlusData);

            setModalMessage(t("quiz.thankYouMessage"));
            setIsModalOpen(true);

        } catch (error) {
            console.error('Error during submission:', error);
            setModalMessage(t("quiz.errorMessage"));
            setIsModalOpen(true);
        }
    };

    const adv_id: Record<"en" | "ru" | "ua" | "tr", number> = {
        en: 10000011,
        ru: 20000011,
        ua: 30000011,
        tr: 40000011,
    };

    const languageKey = i18n.language as keyof typeof adv_id;

    return (
        <div id={"quiz"} className={styles.quiz}>
            {step < questionSet.length ? (
                <div className={styles.quizBody}>
                    <h2>{t(currentQuestion.questionKey)}</h2>
                    {currentQuestion.type === "multipleChoice" && currentQuestion.options && (
                        <div className={styles.options}>
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        handleAnswerChange(currentQuestion.answerField, option.value)
                                    }
                                    className={
                                        answers[currentQuestion.answerField] === option.value
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    {t(option.labelKey)}
                                </button>
                            ))}
                        </div>
                    )}
                    <div
                        className={`${styles.navButtons} ${
                            step === 0 ? styles.alignRight : ""
                        }`}
                    >
                    {/*<div className={styles.navButtons}>*/}
                        {step > 0 && (
                            <button onClick={handlePrev} className={styles.prevButton}>
                                {t("quiz.prev")}
                            </button>
                        )}
                        <button onClick={handleNext} className={styles.nextButton}>
                            {t("quiz.next")}
                        </button>
                    </div>
                </div>
            ) : (
                <div className={styles.contactInfo}>
                    <h2>{t("quiz.contactDetails")}</h2>
                    <PhoneInput
                        international
                        defaultCountry="US"
                        value={phone}
                        onChange={setPhone}
                        placeholder={t("quiz.phonePlaceholder")}
                    />
                    <input
                        type="text"
                        placeholder={t("quiz.namePlaceholder")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder={t("quiz.emailPlaceholder")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className={styles.policyContainer}>
                        <input
                            type="checkbox"
                            className={styles.policyCheckbox}
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />
                        <label className={styles.policyLabel}>
                            {t("quiz.agreeToPolicy")}{" "}
                            <a href="/policy" target="_blank" rel="noopener noreferrer">
                                {t("quiz.policyLink")}
                            </a>
                        </label>
                    </div>
                    <button onClick={handleSubmit} className={styles.submitButton}>
                        {t("quiz.submit")}
                    </button>
                    <ModalMessage
                        isOpen={isModalOpen}
                        message={modalMessage}
                        onClose={() => setIsModalOpen(false)}
                    />
                </div>
            )}
        </div>
    );
};

export default Quiz;
