import {Question} from "../types/Question";

export const questionSets: Record<
    string,
    ReadonlyArray<Question>
> = {
    en: [
        {
            id: 1,
            type: "multipleChoice",
            questionKey: "quiz.question1",
            answerField: "reason",
            options: [
                { value: "housing", labelKey: "quiz.housing" },
                { value: "investment", labelKey: "quiz.investment" },
                { value: "other", labelKey: "quiz.other" },
            ],
        },
        {
            id: 2,
            type: "multipleChoice",
            questionKey: "quiz.investmentAmount",
            answerField: "amount",
            options: [
                { value: "$100k", labelKey: "$100 000" },
                { value: "$150k", labelKey: "$150 000" },
                { value: "$250k", labelKey: "$250 000" },
            ],
        },
    ],
    ru: [{
        id: 1,
        type: "multipleChoice",
        questionKey: "quiz.question1",
        answerField: "reason",
        options: [
            { value: "housing", labelKey: "quiz.housing" },
            { value: "investment", labelKey: "quiz.investment" },
            { value: "other", labelKey: "quiz.other" },
        ],
    },
        {
            id: 2,
            type: "multipleChoice",
            questionKey: "quiz.investmentAmount",
            answerField: "amount",
            options: [
                { value: "$100k", labelKey: "$100 000" },
                { value: "$150k", labelKey: "$150 000" },
                { value: "$250k", labelKey: "$250 000" },
            ],
        },],
    ua: [{
        id: 1,
        type: "multipleChoice",
        questionKey: "quiz.question1",
        answerField: "reason",
        options: [
            { value: "housing", labelKey: "quiz.housing" },
            { value: "investment", labelKey: "quiz.investment" },
            { value: "other", labelKey: "quiz.other" },
        ],
    },
        {
            id: 2,
            type: "multipleChoice",
            questionKey: "quiz.investmentAmount",
            answerField: "amount",
            options: [
                { value: "$100k", labelKey: "$100 000" },
                { value: "$150k", labelKey: "$150 000" },
                { value: "$250k", labelKey: "$250 000" },
            ],
        },],
    tr: [{
        id: 1,
        type: "multipleChoice",
        questionKey: "quiz.question1",
        answerField: "reason",
        options: [
            { value: "housing", labelKey: "quiz.housing" },
            { value: "investment", labelKey: "quiz.investment" },
            { value: "other", labelKey: "quiz.other" },
        ],
    },
        {
            id: 2,
            type: "multipleChoice",
            questionKey: "quiz.investmentAmount",
            answerField: "amount",
            options: [
                { value: "$100k", labelKey: "$100 000" },
                { value: "$150k", labelKey: "$150 000" },
                { value: "$250k", labelKey: "$250 000" },
            ],
        },],
};
