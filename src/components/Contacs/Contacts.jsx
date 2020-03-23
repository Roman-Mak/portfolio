import React from 'react';
import style from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <span>Контакты</span>
                <form className={style.form}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.text}></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default Contacts;
