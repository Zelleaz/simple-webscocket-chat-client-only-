import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import './login.scss'
import localstorageHelper from "../../utils/localstorageHelper";
import {v4} from "uuid";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import userActionCreators from "../../store/reducers/userReducer/userActionCreators";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        img: ''
    })
    const dispatch = useAppDispatch()

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.getAttribute('name')
        const value = event.target.value

        setFormData(prev => ({
            ...prev,
            [`${name}`]: value
        }))
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (formData.username) {
            const id = v4()
            localstorageHelper.setMany([
                {key: 'username', value: formData.username},
                {key: 'img', value: formData.img ?? 'empty'},
                {key: 'id', value: id}
            ])
            dispatch(userActionCreators.logIn({
                id,
                imageUrl: formData.img,
                name: formData.username,
            }))
        }

        else {
            dispatch(userActionCreators.logIn({
                id: v4(),
                imageUrl: '',
                name: 'Anonymous',
            }))
        }
        setFormData({
            username: '',
            img: ''
        })
    }

    useEffect(() => {
        const [username, img, id] = localstorageHelper.getMany(['username', 'img', 'id'])
        if (username && id) {
            dispatch(userActionCreators.logIn({
                name: username,
                id,
                imageUrl: img === 'empty' ? '' : img
            }))
        }

    }, [])

    return (
        <div className='login-wrapper'>
            <form onSubmit={onSubmit} className='login'>
                <h1 className="login__title">Authorization</h1>
                <input type="text" value={formData.username} onChange={onChangeHandler} name='username' placeholder='Username' className="login__input"/>
                <input type="text" value={formData.img} onChange={onChangeHandler} name='img' placeholder='Image Url' className="login__input"/>
                <button className="login__btn">Start message!</button>
                <div className="login-info">
                    Btw, we use localstorage to keep your data
                </div>
            </form>
        </div>
    );
};

export default Login;