import React from "react";
import style from "./Project.module.css";

const Project = (props) => {
    return (
        <div className={style.project}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <div className={style.img} style={props.style}>
                    <span className={style.watch}>watch</span>
                </div>
            </a>
            <div className={style.description}>
                <span className={style.name}>{props.name}</span>
                <span className={style.shortDescr}>{props.description}</span>
            </div>
        </div>
    );
};

export default Project;
