import React from 'react';
import style from './Contacts.module.css'
import Title from "../Title/Title";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <Title title={"Контакты"}/>
                <form className={style.form}>
                    <input className={style.input} placeholder={"Имя"}/>
                    <input className={style.input} placeholder={"e-mail"}/>
                    <textarea className={style.text}></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;
