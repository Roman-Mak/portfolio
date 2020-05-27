import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";
import Title from "../Title/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';



const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={style.container}>
                <Title title={"Мои навыки"} />
                <div className={style.mySkills}>
                    <Skill icon={faReact} title={"React"}/>
                    <Skill icon={faJsSquare} title={"JavaScript"}/>
                    <Skill icon={faFileCode} title={"HTML&CSS"}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;
