import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import './header.scss'

const Header = () => {
    const { name, imageUrl } = useTypedSelector(state => state.user)
    return (
        <div className='header'>
            <div className="header-data">
                {
                    (name !== 'Anonymous' && name ) ? <img src={`${(imageUrl?.length > 0 && imageUrl !== 'empty') ? imageUrl : '/user.png'}`} alt="Your Avatar" className="header__img"/>
                    : <img src="/spyware.png" alt="Your Avatar" className="header__img"/>
                }
                <h2 className="header__title">Hello, {name ?? 'Anonymous'}</h2>
            </div>
        </div>
    );
};

export default Header;