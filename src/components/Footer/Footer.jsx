import React from 'react';
import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <span>Роман Макаревич</span>
                <div className={style.links}>
                    <div className={style.link}>link</div>
                    <div className={style.link}>link</div>
                    <div className={style.link}>link</div>
                    <div className={style.link}>link</div>
                </div>
                <span>2020 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;
