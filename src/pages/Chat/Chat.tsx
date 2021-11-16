import React, {useEffect} from 'react';
import './chat.scss'
import MessageKeyboard from "../../components/MessageKeyboard/MessageKeyboard";
import MessageList from "../../components/Messages/MessageList";
import Header from "../../components/Header/Header";
import localstorageHelper from "../../utils/localstorageHelper";
import userActionCreators from "../../store/reducers/userReducer/userActionCreators";
import {useAppDispatch} from "../../hooks/useAppDispatch";



const Chat = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        const [username, img, id] = localstorageHelper.getMany(['username', 'img', 'id'])
        dispatch(userActionCreators.logIn({
            name: username,
            imageUrl: img,
            id
        }))
    }, [])


    return (
        <div className='chat-container'>
            <Header />
            <MessageList />
            <MessageKeyboard />
        </div>
    );
};

export default Chat;