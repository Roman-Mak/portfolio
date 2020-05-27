import React from 'react';
import style from './Slogan.module.css'
import Title from "../Title/Title";

const Slogan = () => {
    return (
        <div className={style.slogan}>
            <div className={style.container}>
              <Title title={"Рассматриваю варианты удаленной работы"}/>
              <button className={style.button}>Нанять меня</button>
            </div>
        </div>
    );
};

export default Slogan;
