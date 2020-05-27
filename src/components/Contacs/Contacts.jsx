import React from 'react';
import style from './Contacts.module.css'
import Title from "../Title/Title";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <Title title={"Контакты"}/>
                <form className={style.form}>
                    <input className={style.input} placeholder={"Имя"} type={"text"}/>
                    <input className={style.input} placeholder={"E-mail"} type={"email"}/>
                    <textarea className={style.text} placeholder={"Сообщение"}/>
                </form>
                <button className={style.buttonSubmit} type={"submit"}>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;
