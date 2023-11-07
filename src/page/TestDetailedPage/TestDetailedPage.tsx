import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Question, Result, Test} from "../../model/types";
import $api from "../../http";
import ContentLayout from "../../component/ContentLayout/ContentLayout";
import {HashLoader} from "react-spinners";
import RegForm from "../../component/RegForm/RegForm";
import TestComponent from "../TestComponent/TestComponent";

const TestDetailedPage = () => {

    const {id} = useParams()
    const [test, setTest] = useState<Test>({} as Test)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [modal, setModal] = useState<boolean>(true)
    const [result, setResult] = useState({} as Result)
    const closeModal = () => {
        setModal(false)
    }

    const fillResult = (result: Result) => {
        result.testId = Number(id)
        setResult(result)
    }

    const openModal = () => {
        setModal(true)
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
        <>
            <RegForm fillResult={fillResult} modal={modal} close={closeModal}/>
            <ContentLayout>
                {isLoading ? <HashLoader color="#333333"/> :
                    <TestComponent result={result} test={test}/>
                }
            </ContentLayout>
        </>
    )
}

export default TestDetailedPage;