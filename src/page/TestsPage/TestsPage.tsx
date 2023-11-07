import React, {useEffect, useState} from 'react';
import {Test} from "../../model/types";
import $api from "../../http";
import ContentLayout from "../../component/ContentLayout/ContentLayout";
import TestRow from "../../component/TestRow/TestRow";
import css from "./TestsPage.module.css"

const TestsPage = () => {

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
        isLoading ? <div>Loading...</div> :
            <ContentLayout>
                <div className={css.header}>
                    <div>id</div>
                    <div>Назва</div>
                    <div>К-ть питань</div>
                </div>
                <ol type={"1"}>
                    {tests.map((item, index) => (
                        <li><TestRow custom={index % 3 === 0} test={item}/></li>
                    ))}x
                </ol>

            </ContentLayout>
    );
};

export default TestsPage;