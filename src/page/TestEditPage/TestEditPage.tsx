import React, {useEffect, useState} from 'react';
import css from "./TestEditPage.module.css"
import {useNavigate, useParams} from "react-router-dom";
import {Answer, Question, Test} from "../../model/types";
import $api from "../../http";
import ContentLayout from "../../component/ContentLayout/ContentLayout";
import {HashLoader} from "react-spinners";
import {RouterNames} from "../../router/RouterNames";

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const TestEditPage = () => {
    const {id} = useParams()
    const [test, setTest] = useState<Test>({} as Test)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [rerenderToggle, setRerenderToggle] = useState(false);
    const navigate = useNavigate()
    const save = () => {
        $api.put(`/tests/${id}`, test)
        navigate(RouterNames.TESTS_DO)
        window.location.reload()
    }
    const forceRerender = () => {
        setRerenderToggle(prev => !prev);
    };


    const addNewQuestion = () => {
        setTest({
            ...test, questions: [...test.questions, {
                question: "",
                answers: [] as Answer[],
                image: `${getRandomNumber(1, 26)}.png`,
                correctAnswer: 1
            } as Question]
        })
    }

    const getTest = () => {
        $api.get<Test>(`/tests/${id}`).then(res => {
            setTest(res.data)
        }).then(() => {
            setIsLoading(false)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getTest()
    }, []);

    return (
        <ContentLayout>
            {isLoading ? <HashLoader color="#333333"/> :
                <>
                    <div>
                        <div className={css.nameContainer}>
                            <span className={css.valueName}>Назва</span>
                            <input className={css.nameInput} onChange={(e) => {
                                setTest({...test, name: e.target.value})
                            }} type="text" value={test.name}/>
                        </div>
                        {test.questions.map((question, index) => (
                            <div className={css.foo}>
                                {index + 1})
                                <div className={css.question}>

                                    <div className={css.nameContainer}>
                                        <span>Питання</span>
                                        <input defaultValue={question.question} onChange={(e) => {
                                            question.question = e.target.value
                                            setTest(test)
                                        }} className={css.nameInput}/>
                                        <button onClick={() => {
                                            test.questions = test.questions.filter(item => item.question !== question.question)
                                            setTest(test)
                                            forceRerender()
                                        }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                <path
                                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div>
                                        {question.answers.map((answer, index) => (
                                            <div className={css.answer}>
                                                <input defaultValue={answer.text} onChange={(e) => {
                                                    answer.text = e.target.value
                                                    setTest(test)
                                                }} className={css.nameInput}/>
                                                <input onChange={(e) => {
                                                    question.correctAnswer = answer.number
                                                    setTest(test)
                                                }} defaultChecked={question.correctAnswer === answer.number}
                                                       name={String(question.id)} type={"radio"}/>
                                                <button onClick={() => {
                                                    question.answers = question.answers.filter(item => item.text !== answer.text)
                                                    setTest(test)
                                                    forceRerender()
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-trash3"
                                                         viewBox="0 0 16 16">
                                                        <path
                                                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <div className={css.addBtnContainer}>
                                        <button className={css.addBtn} onClick={() => {
                                            question.answers.push({
                                                text: "",
                                                questionId: question.id,
                                                number: question.answers.length + 1
                                            } as Answer)
                                            setTest(test)
                                            forceRerender()
                                        }}>Додати відповідь
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className={css.addBtnContainer}>
                            <button className={css.addBtn} onClick={addNewQuestion}>Додати питання</button>
                        </div>
                    </div>
                    <div className={css.addBtnContainer}>
                        <button className={css.addBtn} onClick={save}>Зберегти</button>
                    </div>
                </>
            }
        </ContentLayout>
    );
};

export default TestEditPage;