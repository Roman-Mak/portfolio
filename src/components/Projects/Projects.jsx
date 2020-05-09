import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";
import Title from "../Title/Title";

const Projects = () => {
    return (
        <div className={style.projects}>
            <div className={style.container}>
                <Title title={"Мои проекты"}/>
                <div className={style.myProjects}>
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    );
};

export default Projects;
