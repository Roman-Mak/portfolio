import React from 'react';
import style from './Slogan.module.css'
import Title from "../common/Title/Title";
import Fade from "react-reveal";
import { Link, animateScroll as scroll } from "react-scroll";

const Slogan = () => {
    return (
        <div className={style.slogan}>
            <Fade bottom>
                <div className={style.container}>
                    <Title title={"I Am Available For Freelancer"}/>
                    <Link to="contacts" className={style.button} smooth={true}>Hire me</Link>
                </div>
            </Fade>
        </div>
    );
};

export default Slogan;
