import React, {useEffect, useState} from 'react';
import {Result} from "../../model/types";
import $api from "../../http";
import {HashLoader} from "react-spinners";
import ResultRow from "../../component/ResultRow/ResultRow";

const ResultsPage = () => {

    const [results, setResults] = useState<Result[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const getResults = () => {
        $api.get<Result[]>("/results").then(res => {
            setResults(res.data)
        }).then(() => {
        })
        setIsLoading(false)
    }

    useEffect(() => {
        getResults()
    }, []);

    return (
        isLoading ? <HashLoader/> :
        <div>
            {results.map(item=>(
                <ResultRow result={item}/>
            ))}
        </div>
    );
};

export default ResultsPage;