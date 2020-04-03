import React from 'react';
import style from './Slogan.module.css'

const Slogan = () => {
    return (
        <div className={style.slogan}>
            <div className={style.container}>
              <span className={style.text}>Рассматриваю варианты удаленной работы</span>
              <button>Нанять меня</button>
            </div>
        </div>
    );
};

export default Slogan;
