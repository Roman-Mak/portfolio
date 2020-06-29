import React from 'react';
import style from './Slogan.module.css'
import Title from "../common/Title/Title";
import Fade from "react-reveal";

const Slogan = () => {
    return (
        <div className={style.slogan}>
            <Fade bottom>
                <div className={style.container}>
                    <Title title={"Рассматриваю варианты удаленной работы"}/>
                    <a className={style.button} href={""}>Нанять меня</a>
                </div>
            </Fade>
        </div>
    );
};

export default Slogan;
