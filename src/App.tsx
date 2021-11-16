import React from 'react';
import './styles/main.scss'
import Login from "./pages/Login/Login";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Chat from "./pages/Chat/Chat";

const App = () => {
    const {isAuth} = useTypedSelector(state => state.user)


    return (
        <>
            {
                isAuth ? <Chat /> : <Login />
            }
        </>
    );
};

export default App;