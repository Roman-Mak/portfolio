import React from 'react';
import style from './Slogan.module.css'

const Slogan = () => {
    return (
        <div className={style.slogan}>
            <div className={style.container}>
              <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
              <button>Нанять меня</button>
            </div>
        </div>
    );
};

export default Slogan;
