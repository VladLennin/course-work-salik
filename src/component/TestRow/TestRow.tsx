import React, {FC} from 'react';
import {Test} from "../../model/types";
import css from "./TestRow.module.css"
import {Link} from "react-router-dom";
import {RouterNames} from "../../router/RouterNames";

interface TestRowProps {
    test: Test;
    custom: boolean;
}

const TestRow: FC<TestRowProps> = ({test, custom}) => {
    return (

        <Link to={`${RouterNames.TEST_EDIT}/${test.id}`} className={`${css.container} ${custom && css.custom}`}>
            <div>{test.id}</div>
            <div>{test.name}</div>
            <div>{test.questions.length}</div>
        </Link>
    );
};

export default TestRow;