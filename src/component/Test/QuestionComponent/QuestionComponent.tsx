import React, {FC, useState} from 'react';
import {Question} from "../../../model/types";
import AnswerComponent from "../AnswerComponent/AnswerComponent";
import css from "./QuestionComponent.module.css"
import ImageComponent from "../../ImageComponent/ImageComponent";

interface QuestionProps {
    question: Question;
    onClickAnswer: (any: any) => any;
}

const QuestionComponent: FC<QuestionProps> = ({question, onClickAnswer}) => {

    const [isAnswered, setIsAnswered] = useState<boolean>(false)

    const click = (any: any) => {
        onClickAnswer(any)
        setIsAnswered(true)
    }

    return (
        <div className={css.container}>
            <div className={css.questionContainer}>
                <div>
                    <ImageComponent image={question.image}/>
                </div>
                <div>
                    <span className={css.questionText}>{question.question}</span>
                </div>
            </div>
            <div className={css.answersContainer}>
                {question.answers.map(item => (
                    <AnswerComponent isAnswered={isAnswered} onClick={click} answer={item}/>
                ))}
            </div>
        </div>
    );

};


export default QuestionComponent;