import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.project}>
            <a href={""}>
                <div className={style.img} style={props.style}>
                    <a className={style.watch} href={""}>Смотреть</a>
                </div>
            </a>
            <div className={style.description}>
                <span className={style.name}>{props.name}</span>
                <span className={style.shortDescr}>Краткое описание</span>
            </div>
        </div>
    );
};

export default Project;
