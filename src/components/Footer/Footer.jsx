import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h2 className={style.name}>Роман Макаревич</h2>
                <div className={style.links}>
                    <div className={style.link}/>
                    <div className={style.link}/>
                    <div className={style.link}/>
                    <div className={style.link}/>
                </div>
                <span className={style.rights}>2020 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;
