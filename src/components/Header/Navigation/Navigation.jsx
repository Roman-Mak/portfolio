import React from 'react';
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.nav}>
            <a href="" className={style.link}>Главная</a>
            <a href="" className={style.link}>Навыки</a>
            <a href="" className={style.link}>Проекты</a>
            <a href="" className={style.link}>Контакты</a>
        </div>
    );
};

export default Navigation;
