import React from 'react';
import style from './Navigation.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
    return (
        <div className={style.nav}>
            <Link to="main" className={style.link} smooth={true}>Главная</Link>
            <Link to="skills" className={style.link} smooth={true}>Навыки</Link>
            <Link to="projects" className={style.link} smooth={true}>Проекты</Link>
            <Link to="contacts" className={style.link} smooth={true}>Контакты</Link>
        </div>
    );
};

export default Navigation;
