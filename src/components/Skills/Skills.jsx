import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";
import Title from "../Title/Title";

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={style.container}>
                <Title title={"Мои навыки"} />
                <div className={style.mySkills}>
                    <Skill />
                    <Skill />
                    <Skill />
                </div>
            </div>
        </div>
    );
};

export default Skills;
