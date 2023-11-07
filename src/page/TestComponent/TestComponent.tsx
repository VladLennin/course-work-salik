import React, {FC, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Result, Test} from "../../model/types";
import QuestionCard from "./QuestionCard";
import {RouterNames} from "../../router/RouterNames";
import $api from "../../http";

interface TestProps {
    test: Test;
    result: Result;
}

interface AnswersProps {
    incorrectAnswered: number[],
    correctAnswered: number[],

}

const TestComponent: FC<TestProps> = ({test, result}) => {

    const navigate = useNavigate();
    const [activeQuestion, setActiveQuestion] = useState<number>(0)
    const [answers, setAnswers] = useState<AnswersProps>({
        incorrectAnswered: [], correctAnswered: []
    })

    const writeResult = () => {
        if (answers.correctAnswered.length === 0) {
            localStorage.setItem("correctAnswered", "0")
            localStorage.setItem("incorrectAnswered", answers.incorrectAnswered.length.toString())
        } else if (answers.incorrectAnswered.length === 0) {
            localStorage.setItem("incorrectAnswered", "0")
            localStorage.setItem("correctAnswered", answers.correctAnswered.length.toString())
        } else {
            localStorage.setItem("incorrectAnswered", answers.incorrectAnswered.length.toString())
            localStorage.setItem("correctAnswered", answers.correctAnswered.length.toString())
        }

        result.countUnCorrect = answers.incorrectAnswered.length
        result.countCorrect = answers.correctAnswered.length
        $api.post("/results", result)
    }

    return (
        <div>
            {test.questions.map((question, index) => (
                <div key={index} className={(index !== activeQuestion ? " hidden" : "")}>
                    <QuestionCard key={question.question}
                                  countQuestions={test.questions.length}
                                  setActiveQuestion={setActiveQuestion}
                                  answers={answers}
                                  setAnswers={setAnswers}
                                  question={test.questions[activeQuestion]}
                                  questionNumber={activeQuestion}
                    />
                </div>

            ))}

            <div className={"flex mt-10 justify-center "}>
                {test.questions.map((question, index) => (
                    <button key={index}
                            onClick={() => {
                                setActiveQuestion(index)
                            }}
                            className={(activeQuestion === index ? "bg-blue-600 " : " ")
                                + " rounded border ml-2 px-4 py-2"
                                + (answers.correctAnswered.includes(index) ? " bg-green-600 " : "")
                                + (answers.incorrectAnswered.includes(index) ? " bg-red-600 " : "")}>{index + 1}</button>
                ))}

                <button
                    disabled={answers.correctAnswered.length + answers.incorrectAnswered.length !== test.questions.length}
                    className={((answers.correctAnswered.length + answers.incorrectAnswered.length === test.questions.length) ? "bg-blue-600 " : " bg-gray-400") + " border rounded flex items-center ml-3 text-white px-3"}
                    onClick={() => {
                        navigate(RouterNames.RESULTS)
                        writeResult()
                    }
                    }>
                    <p>Результат</p>
                    <i className="bi bi-arrow-right ml-2"></i>
                </button>

            </div>
        </div>

    );
};

export default TestComponent;