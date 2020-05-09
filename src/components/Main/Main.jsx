import React from 'react';
import style from './Main.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Привет!</span>
                    <div className={style.description}>
                        <span>Меня зовут </span>
                        <span className={style.firstName}>Роман </span>
                        <span className={style.secondName}>Макаревич</span>
                        <h1>Я front-end разработчик</h1>
                    </div>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    );
};

export default Main;
