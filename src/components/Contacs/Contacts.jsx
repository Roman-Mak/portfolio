import React, {useState} from 'react';
import style from './Contacts.module.css'
import Title from "../common/Title/Title";
import Fade from "react-reveal";

const Contacts = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onNameChange = (e) => {
        setName(e.currentTarget.value);
    };
    const onEmailChange = (e) => {
        setEmail(e.currentTarget.value);
    };
    const onMessageChange = (e) => {
        setMessage(e.currentTarget.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({name, email, message});
    };

    return (
        <div className={style.contacts} id={"contacts"}>
            <div className={style.container}>
                <Fade bottom cascade>
                    <Title title={"Contacts"}/>
                    <form className={style.form} onSubmit={onSubmit}>
                        <input className={style.input} placeholder={"Name"} type={"text"} name={"name"}
                               value={name}
                               onChange={onNameChange}/>
                        <input className={style.input} placeholder={"E-mail"} type={"email"} name={"email"}
                               value={email}
                               onChange={onEmailChange}/>
                        <textarea className={style.text} placeholder={"Your Message"} name={"message"}
                                  value={message}
                                  onChange={onMessageChange}/>
                        <button className={style.buttonSubmit} type={"submit"}>Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
};

export default Contacts;
