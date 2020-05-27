import React from 'react';
import style from './Footer.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h2 className={style.name}>Роман Макаревич</h2>
                <div className={style.links}>
                    <div className={style.link}>
                        <a href={""}>
                            <FontAwesomeIcon className={style.icon} icon={faTelegramPlane} size={"2x"}/>
                        </a>
                    </div>
                    <div className={style.link}>
                        <a href={""}>
                            <FontAwesomeIcon className={style.icon} icon={faLinkedinIn} size={"2x"}/>
                        </a>
                    </div>
                    <div className={style.link}>
                        <a href={""}>
                            <FontAwesomeIcon className={style.icon} icon={faVk} size={"2x"}/>
                        </a>
                    </div>
                    <div className={style.link}>
                        <a href={""}>
                            <FontAwesomeIcon className={style.icon} icon={faFacebookF} size={"2x"}/>
                        </a>
                    </div>
                </div>
                <span className={style.rights}>©2020 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;
