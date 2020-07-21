import React from "react";
import style from "./Main.module.css";
import photo from "./../../assets/img/photo.jpg";

const Main = () => {
    return (
        <div className={style.main} id={"main"}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Hi There!</span>
                    <div className={style.description}>
                        <span>I am </span>
                        <span className={style.firstName}>Roman </span>
                        <span className={style.secondName}>Makarevich</span>
                        <h1>A front-end developer</h1>
                    </div>
                </div>
                <div className={style.photo}>
                    <div className={style.image}>
                        <img src={photo} alt={""} className={style.myPhoto}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
