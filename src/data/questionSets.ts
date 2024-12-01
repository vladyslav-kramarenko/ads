import {Question} from "../types/Question";

export const questionSets: Record<
    string,
    ReadonlyArray<Question>
> = {
    en: [
        {
            id: 1,
            type: "multipleChoice",
            questionKey: "quiz.reason.question",
            answerField: "reason",
            options: [
                {value: "housing", labelKey: "quiz.reason.housing"},
                {value: "investment", labelKey: "quiz.reason.investment"},
                {value: "other", labelKey: "quiz.reason.other"},
            ],
        },
        {
            id: 2,
            type: "multipleChoice",
            questionKey: "quiz.investmentAmount.question",
            answerField: "amount",
            options: [
                {value: "$100k", labelKey: "$100 000"},
                {value: "$150k", labelKey: "$150 000"},
                {value: "$250k", labelKey: "$250 000"},
            ],
        },
    ],
    ru: [
        {
            id: 1,
            type: "multipleChoice",
            questionKey: "quiz.reason.question",
            answerField: "reason",
            options: [
                {value: "housing", labelKey: "quiz.reason.housing"},
                {value: "investment", labelKey: "quiz.reason.investment"},
                {value: "other", labelKey: "quiz.reason.other"},
            ],
        },
        {
            id: 2,
            type: "multipleChoice",
            questionKey: "quiz.investmentAmount.question",
            answerField: "amount",
            options: [
                {value: "$100k", labelKey: "$100 000"},
                {value: "$150k", labelKey: "$150 000"},
                {value: "$250k", labelKey: "$250 000"},
            ],
        },],
    ua: [
        {
            id: 1,
            type: "multipleChoice",
            questionKey: "quiz.investExp.question",
            answerField: "investExp",
            options: [
                {value: "yes", labelKey: "quiz.yes"},
                {value: "no", labelKey: "quiz.no"},
            ],
        },
        {
            id: 2,
            type: "multipleChoice",
            questionKey: "quiz.whenPlanToBuy.question",
            answerField: "whenPlanToBuy",
            options: [
                {value: "nearFuture", labelKey: "quiz.whenPlanToBuy.nearFuture"},
                {value: "1month", labelKey: "quiz.whenPlanToBuy.withinMonth"},
                {value: "6month", labelKey: "quiz.whenPlanToBuy.within6Months"},
                {value: "notSure", labelKey: "quiz.whenPlanToBuy.notSure"},
            ],
        },
        {
            id: 3,
            type: "multipleChoice",
            questionKey: "quiz.reason.question",
            answerField: "reason",
            options: [
                {value: "housing", labelKey: "quiz.reason.housing"},
                {value: "investment", labelKey: "quiz.reason.investment"},
                {value: "houseAndInvestment", labelKey: "quiz.reason.houseAndInvestment"},
                {value: "other", labelKey: "quiz.reason.other"},
            ],
        },
        {
            id: 4,
            type: "multipleChoice",
            questionKey: "quiz.messenger.question",
            answerField: "messenger",
            options: [
                {value: "telegram", labelKey: "Telegram"},
                {value: "whatsapp", labelKey: "WhatsApp"},
                {value: "other", labelKey: "quiz.messenger.other"},
            ],
        },
        // {
        //     id: 2,
        //     type: "multipleChoice",
        //     questionKey: "quiz.reason.question",
        //     answerField: "reason",
        //     options: [
        //         {value: "housing", labelKey: "quiz.reason.housing"},
        //         {value: "investment", labelKey: "quiz.reason.investment"},
        //         {value: "other", labelKey: "quiz.reason.other"},
        //     ],
        // },
        // {
        //     id: 2,
        //     type: "multipleChoice",
        //     questionKey: "quiz.investmentAmount.question",
        //     answerField: "amount",
        //     options: [
        //         {value: "$100k", labelKey: "$100 000"},
        //         {value: "$150k", labelKey: "$150 000"},
        //         {value: "$250k", labelKey: "$250 000"},
        //     ],
        // },
    ],
    tr: [
        {
            id: 1,
            type: "multipleChoice",
            questionKey: "quiz.reason.question",
            answerField: "reason",
            options: [
                {value: "housing", labelKey: "quiz.reason.housing"},
                {value: "investment", labelKey: "quiz.reason.investment"},
                {value: "other", labelKey: "quiz.reason.other"},
            ],
        },
        {
            id: 2,
            type: "multipleChoice",
            questionKey: "quiz.investmentAmount.question",
            answerField: "amount",
            options: [
                {value: "$100k", labelKey: "$100 000"},
                {value: "$150k", labelKey: "$150 000"},
                {value: "$250k", labelKey: "$250 000"},
            ],
        },
    ],
};
