import React from 'react';
import style from './Skills.module.css'

const Skills = () => {
    return (
        <div className={style.skills}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Мои навыки</span>
                </div>
                <div className={style.mySkills}>
                    <div className={style.skill}>skill1</div>
                    <div className={style.skill}>skill2
                        <div className={style.skillItem}>skill2.2</div>
                    </div>
                    <div className={style.skill}>
                        <span>React</span>
                        <span className={style.skillItem}>Подробное описание навыка</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
