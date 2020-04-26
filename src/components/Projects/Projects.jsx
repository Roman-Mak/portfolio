import React from 'react';
import style from './Projects.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={style.projects}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>Мои проекты</h2>
                </div>
                <div className={style.myProjects}>
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    );
};

export default Projects;
