import React from 'react';
import style from './Projects.module.css'

const Projects = () => {
    return (
        <div className={style.projects}>
            <div className={style.container}>
                <div className={style.text}>
                    <span>Мои проекты</span>
                </div>
                <div className={style.myProjects}>
                    <div className={style.network}>
                        <div className={style.present}>Cоциальная сеть</div>
                        <div className={style.description}>Описание</div>
                    </div>
                    <div className={style.toDo}>
                        <div className={style.present}>
                            <span>toDoList</span>
                            <button>Смотреть</button>
                        </div>
                        <div className={style.description}>
                            <span>Название проекта</span>
                            <span>Краткое описание</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
