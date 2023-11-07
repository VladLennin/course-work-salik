import React from 'react';
import css from "./Header.module.css"
import logo from "../../../assets/logo.png"
import {Link} from "react-router-dom";
import {RouterNames} from "../../../router/RouterNames";

const Header = () => {
    return (
        <div className={css.container}>

            <div className={css.logoContainer}>
                <span className={css.title}>
                    Центр тестування
                </span>
                <Link to={RouterNames.HOME}>
                    <img className={css.logo} src={logo} alt=""/>
                </Link>
                <span className={css.title}>Морального Стану</span>
            </div>

            <div className={css.linksContainer}>
                <Link to={RouterNames.TESTS_DO}>
                    Пройти тести
                </Link>
                <Link to={RouterNames.RESULTS}>
                    Переглянути результати
                </Link>
                <Link to={RouterNames.TEST_CREATE}>
                    Створити тест
                </Link>
                <Link to={RouterNames.TESTS}>
                    Переглянути тести
                </Link>

            </div>
        </div>
    );
};

export default Header;