import React from 'react';
import style from './Contacts.module.css'
import Title from "../common/Title/Title";
import Fade from "react-reveal";

const Contacts = () => {
    return (
        <div className={style.contacts} id={"contacts"}>
            <div className={style.container}>
                <Fade bottom cascade>
                    <Title title={"Контакты"}/>
                    <form className={style.form}>
                        <input className={style.input} placeholder={"Имя"} type={"text"}/>
                        <input className={style.input} placeholder={"E-mail"} type={"email"}/>
                        <textarea className={style.text} placeholder={"Сообщение"}/>
                        <button className={style.buttonSubmit} type={"submit"}>Отправить</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;
