import React from "react";
import style from "./Projects.module.css";
import Project from "./Project/Project";
import Title from "../common/Title/Title";
import Fade from "react-reveal";
import socialNetwork from "../../assets/img/social-network.png";
import todoList from "../../assets/img/todolist.png";
import {socilaNetworkDescription, todoListDescription} from "../../assets/projectsDescription";

const socialNetworkStyle = {
    backgroundImage: `url(${socialNetwork})`
};
const todoListStyle = {
    backgroundImage: `url(${todoList})`
};

const socialNetworkLink = "https://roman-mak.github.io/social_network";
const todoListLink = "https://roman-mak.github.io/todolist";

const Projects = () => {
    return (
        <div className={style.projects} id={"projects"}>
            <div className={style.container}>
                <Fade bottom>
                    <Title title={"My Projects"}/>
                    <div className={style.myProjects}>
                        <Project name={"Social Network"} style={socialNetworkStyle}
                                 description={socilaNetworkDescription} link={socialNetworkLink}/>
                        <Project name={"TodoList"} style={todoListStyle} description={todoListDescription}
                                 link={todoListLink}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Projects;
