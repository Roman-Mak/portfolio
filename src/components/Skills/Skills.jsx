import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>Мои навыки</h2>
                </div>
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
