import React, {FC, useState} from 'react';
import {Answer} from "../../../model/types";
import css from "./AnswerComponent.module.css"
interface AnswerProps {
    answer:Answer;
    onClick:(any:any) => any;
    isAnswered: boolean;
}

const AnswerComponent:FC<AnswerProps> = ({answer, onClick, isAnswered}) => {

    return (
        <button disabled={isAnswered} onClick={()=>{
        }} className={css.answerContainer}>
            {answer.text}
        </button>
    );
};

export default AnswerComponent;