import React from "react";
import style from "./Skill.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.img}>
                <FontAwesomeIcon icon={props.icon} className={style.icon} size={"4x"}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.skillItem}>
                <span>{props.description}</span>
            </div>
        </div>
    );
};

export default Skill;
