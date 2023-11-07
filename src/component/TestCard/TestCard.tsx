import React, {FC} from 'react';
import {Test} from "../../model/types";
import css from './TestCard.module.css'
import ImageComponent from "../ImageComponent/ImageComponent";
import {Link} from "react-router-dom";
import {RouterNames} from "../../router/RouterNames";

interface TestProps {
    test: Test;
}

const TestCard: FC<TestProps> = ({test}) => {
    return (
        <div className={css.card}>
            <div className={css.cardTitle}>
                {test.name}
            </div>
            <div className={css.cardImg}>
                <ImageComponent image={test.image}/>
            </div>
            <div className={css.cardCount}>
                К-ть питань: {test.questions.length}
            </div>
            <Link className={css.cardLink} to={`${RouterNames.TESTS}/${test.id}`}>Пройти</Link>
        </div>
    );
};

export default TestCard;