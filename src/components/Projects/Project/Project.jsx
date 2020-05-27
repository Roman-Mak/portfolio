import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.img}>
                <button className={style.watch}>Смотреть</button>
            </div>
            <div className={style.description}>
                <span className={style.name}>{props.name}</span>
                <span className={style.shortDescr}>Краткое описание</span>
            </div>
        </div>
    );
};

export default Project;
