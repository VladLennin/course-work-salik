import React, {FC, useState} from 'react';
import css from "./RegForm.module.css"
import {RouterNames} from "../../router/RouterNames";
import {Ranks} from "../../enum/Ranks";
import Modal from "../Modal/Modal";
import {Result} from "../../model/types";

interface RegFormProps {
    modal: boolean;
    close: () => void;
    fillResult: (any: any) => any;
}

const RegForm: FC<RegFormProps> = ({modal, close, fillResult}) => {

    const [result, setResult] = useState({rank: "Солдат", name:"", surname:""} as Result)

    const create = () => {
        fillResult(result)
        close()
    }

    return (
        <Modal withoutClose={true} closeModal={close} showModal={modal}>
            <div className={css.form}>
                <div className={css.inputForm}>
                    <span>Імʼя</span>
                    <input onChange={(e) => {
                        setResult({...result, name: e.target.value})
                    }} className={css.input} type="text"/>
                </div>
                <div className={css.inputForm}>
                    <span>Прізвище</span>
                    <input onChange={(e) => {
                        setResult({...result, surname: e.target.value})
                    }} className={css.input} type="text"/>
                </div>

                <div className={css.inputForm}>
                    <span>Звання</span>
                    <select onChange={(e) => {
                        setResult({...result, rank: e.target.value})
                    }} className={css.input} defaultValue={0} name="">
                        {Ranks.map((item, index) => (
                            <option value={index}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className={css.startBtn}>
                    <button onClick={create}>Почати тестування</button>
                </div>
            </div>
        </Modal>
    );
};

export default RegForm;