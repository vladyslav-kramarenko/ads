export interface Question {
    id: number;
    type: string; // For example: "multipleChoice"
    questionKey: string; // The translation key for the question
    placeholderKey?: string; // For text inputs, if needed
    answerField: string; // The field name where the answer will be stored
    options?: { value: string; labelKey: string }[]; // For multiple choice questions
}
