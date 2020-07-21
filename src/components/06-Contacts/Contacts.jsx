import React from "react";
import style from "./Contacts.module.css";
import Title from "../common/Title/Title";
import Fade from "react-reveal";

const Contacts = (props) => {
    const {
        name, email, message, isMessageSent, isError, errorText, isDisable,
        onSubmit, onNameChange, onEmailChange, onMessageChange
    } = props;
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
                        <button className={style.buttonSubmit} type={"submit"} disabled={isDisable}>Send</button>
                    </form>
                </Fade>
                {isMessageSent &&
                <Fade>
                    <span>MESSAGE SENT</span>
                </Fade>}
                {isError &&
                <Fade>
                    <span>{errorText}</span>
                </Fade>}
            </div>
        </div>
    );
};

export default React.memo(Contacts);
