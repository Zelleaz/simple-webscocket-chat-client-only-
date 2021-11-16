import React, {useEffect} from 'react';
import Message from "./Message";
import './messages.scss'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {toggleScroll} from "../../utils/toggleScroll";
import useWebSocket from "react-use-websocket";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import messageActionCreators from "../../store/reducers/messageReducer/messageActionCreators";

const MessageList = () => {
    const {messages} = useTypedSelector(state => state.messages)
    const dispatch = useAppDispatch()
    const {lastJsonMessage} = useWebSocket('wss://ws.qexsystems.ru ')

    useEffect(() => {
        if (lastJsonMessage) {
            dispatch(messageActionCreators.sendMessage(lastJsonMessage))
        }
    }, [lastJsonMessage])

    useEffect(() => {
        toggleScroll()
    }, [messages])

    return (
        <div className='messages'>
            {
                messages.map(msg => <Message key={msg.id} {...msg} />)
            }
        </div>
    );
};

export default MessageList;