import React from 'react';
import style from './Skill.module.css'

const Skill = () => {
    return (
        <div className={style.skill}>
            <div className={style.img} />
            <span>React</span>
            <div className={style.skillItem}>Подробное описание навыка</div>
        </div>

    );
};

export default Skill;
