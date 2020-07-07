import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/Title/Title";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faJsSquare} from '@fortawesome/free-brands-svg-icons';
import {faFileCode} from '@fortawesome/free-regular-svg-icons';
import Fade from "react-reveal";
import {htmlCssDescription, JsDescription, reactDescription} from "../../assets/skillsDescription";

const Skills = () => {
    return (
        <div className={style.skills} id={"skills"}>
            <div className={style.container}>
                <Fade bottom>
                    <Title title={"My skills"}/>
                    <div className={style.mySkills}>
                        <Skill icon={faReact} title={"React"} description={reactDescription}/>
                        <Skill icon={faJsSquare} title={"JavaScript"} description={JsDescription}/>
                        <Skill icon={faFileCode} title={"HTML&CSS"} description={htmlCssDescription}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;
