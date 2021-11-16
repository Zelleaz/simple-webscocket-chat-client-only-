import React, {useState} from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import './messageKeyboard.scss';
import SendButton from "./SendButton/SendButton";

const MessageKeyboard = () => {
    const [message, setMessage] = useState('')

    return <div className='keyboard-controller'>
        <TextareaAutosize
            maxRows={5}
            placeholder='Enter text message...'
            className='keyboard'
            value={message}
            onChange={e => setMessage(e.target.value)}
        />
        <SendButton setMessage={setMessage} message={message} />
    </div>;
};

export default MessageKeyboard;