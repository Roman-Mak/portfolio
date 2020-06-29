import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";
import Title from "../common/Title/Title";
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {faJsSquare} from '@fortawesome/free-brands-svg-icons';
import {faFileCode} from '@fortawesome/free-regular-svg-icons';
import Fade from "react-reveal";

const Skills = () => {
    return (
        <div className={style.skills} id={"skills"}>
            <div className={style.container}>
                <Fade bottom>
                    <Title title={"Мои навыки"}/>
                    <div className={style.mySkills}>
                        <Skill icon={faReact} title={"React"}/>
                        <Skill icon={faJsSquare} title={"JavaScript"}/>
                        <Skill icon={faFileCode} title={"HTML&CSS"}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Skills;
