import React from "react";
import style from "./Footer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h2 className={style.name}>Roman Makarevich</h2>
                <Fade bottom cascade>
                    <div className={style.links}>
                        <a className={style.link}
                           href={"https://t.me/markelmk"}
                           target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className={style.icon} icon={faTelegramPlane} size={"2x"}/>
                        </a>
                        <a className={style.link}
                           href={"https://www.linkedin.com/in/roman-makarevich-a334061b0/"}
                           target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className={style.icon} icon={faLinkedinIn} size={"2x"}/>
                        </a>
                        <a className={style.link}
                           href={"https://github.com/Roman-Mak"}
                           target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className={style.icon} icon={faGithub} size={"2x"}/>
                        </a>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Footer;
