import React, {useCallback, useState} from 'react';
import {sendMessage} from "../../assets/contacts-api";
import Contacts from "./Contacts";

const ContactsContainer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isMessageSent, setIsMessageSent] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState("SOME ERROR");
    const [isDisable, setIsDisable] = useState(false);

    const onNameChange = useCallback((e) => {
        setName(e.currentTarget.value);
    }, [setName]);
    const onEmailChange = useCallback((e) => {
        setEmail(e.currentTarget.value);
    }, [setEmail]);
    const onMessageChange = useCallback((e) => {
        setMessage(e.currentTarget.value);
    }, [setMessage]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (name === "" || email === "" || message === "") {
            setIsError(true);
            setErrorText("ALL FIELDS ARE REQUIRED");
        } else {
            setIsDisable(true);
            sendMessage({name, email, message})
                .then(() => {
                    setName("");
                    setEmail("");
                    setMessage("");
                    setIsDisable(false);
                    setIsMessageSent(true);
                    setIsError(false);
                })
                .catch(() => {
                    setIsDisable(false);
                    setIsError(true);
                    setErrorText("SOME ERROR");
                })

        }
    }, [setIsError, setErrorText, setIsDisable, email, message, name]);

    return (
        <Contacts name={name}
                  email={email}
                  message={message}
                  isMessageSent={isMessageSent}
                  isError={isError}
                  errorText={errorText}
                  isDisable={isDisable}
                  onSubmit={onSubmit}
                  onNameChange={onNameChange}
                  onEmailChange={onEmailChange}
                  onMessageChange={onMessageChange}
        />
    );
};

export default ContactsContainer;
