import React, {useEffect, useState} from 'react';
import css from "./TestsCardsPage.module.css"
import ContentLayout from "../../component/ContentLayout/ContentLayout";
import {Test} from "../../model/types";
import $api from "../../http";
import TestCard from "../../component/TestCard/TestCard";
import {HashLoader} from "react-spinners";

const TestsCardsPage = () => {

    const [tests, setTests] = useState<Test[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const getTests = () => {
        $api.get<Test[]>("/tests").then(res => {
            setTests(res.data)
        }).then(() => {
            setIsLoading(false)
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {
        getTests()
    }, []);

    return (
        <ContentLayout>
            {isLoading ? <HashLoader/> :
                <div className={css.container}>
                    {tests.map(item => (
                        <TestCard test={item}/>
                    ))}
                </div>
            }
        </ContentLayout>
    );
};

export default TestsCardsPage;