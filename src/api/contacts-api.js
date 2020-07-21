import axios from "axios";

export const sendMessage = (userData) => {
    return axios.post("https://gmail-sender.herokuapp.com/send-message", userData);
};