
export type Test = {
    id: number;
    name: string;
    questions: Question[];
    image: string;
}


export type Question = {
    id: number;
    question: string;
    answers: Answer[];
    image: string;
    correctAnswer: number;
}


export type Answer = {
    questionId: number;
    text: string;
    number: number;
}

export type Result = {
    id:number;
    rank: string;
    name: string;
    surname: string;
    testId: number;
    countCorrect: number;
    countUnCorrect: number;
}