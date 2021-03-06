import React, {Dispatch, FC, SetStateAction} from 'react';
import {v4} from 'uuid';
import './sendButton.scss'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import useWebSocket from "react-use-websocket";

interface SendButtonProps {
    message: string
    setMessage: Dispatch<SetStateAction<string>>
}

const SendButton: FC<SendButtonProps> = ({ message, setMessage }) => {
    const { name, id, imageUrl } = useTypedSelector(state => state.user)
    const {sendJsonMessage} = useWebSocket('wss://ws.qexsystems.ru')

    const send = () => {
        if (message.trim().length > 0) {
            setMessage('');

            const msg = {
                author: name,
                id: v4(),
                text: message,
                time: new Date().toISOString(),
                userId: id,
                imageUrl: (imageUrl && imageUrl?.length > 0) ? imageUrl : null
            }

            sendJsonMessage(msg)
        }
    }
    
    return (
        <svg onClick={send} width="36" className={`send ${message.trim().length > 0 ? 'send_active' : ''}`} height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M34.9229 1.5002C35.0024 1.30144 35.0219 1.08369 34.9789 0.873962C34.9359 0.664233 34.8323 0.471742 34.6809 0.320352C34.5295 0.168963 34.337 0.0653336 34.1273 0.0223111C33.9175 -0.0207115 33.6998 -0.00123505 33.501 0.0783258L33.2932 0.161451L1.67945 12.8052L1.67727 12.8074L0.688515 13.2011C0.501244 13.2758 0.338265 13.4008 0.217581 13.5624C0.0968965 13.7239 0.0232045 13.9156 0.00464454 14.1164C-0.0139154 14.3171 0.0233791 14.5191 0.112409 14.7C0.201438 14.8809 0.338737 15.0337 0.50914 15.1414L1.40602 15.7102L1.4082 15.7146L11.3898 22.0649L12.3348 22.6665L12.9363 23.6115L19.2866 33.593L19.291 33.5974L19.8598 34.4943C19.9679 34.664 20.1207 34.8006 20.3015 34.8891C20.4823 34.9776 20.6839 35.0144 20.8843 34.9957C21.0847 34.9769 21.276 34.9032 21.4372 34.7827C21.5984 34.6622 21.7232 34.4996 21.7979 34.3127L22.1938 33.3218L34.8398 1.70583L34.9229 1.49801V1.5002ZM30.9132 5.63458L31.9435 3.0577L29.3666 4.08801L12.9735 20.4811L13.7129 20.9515C13.8486 21.0376 13.9636 21.1526 14.0498 21.2883L14.5201 22.0277L30.9132 5.63458Z" fill="#9B9B9B"/>
        </svg>
    );
};

export default SendButton;