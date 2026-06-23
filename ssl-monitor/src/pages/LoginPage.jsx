import React, {useState} from 'react';
import style from '../style/login.module.css'
import {useDispatch} from 'react-redux'
import {loginThunk, setCredentials} from "../store/authSlice.js";
import {useNavigate} from "react-router-dom";
import { Header } from "../components/header.jsx";

export let  LoginPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState();

    const dispatch = useDispatch()
    const navigate = useNavigate()


    let clearInputEmail = (e) => {
    setEmail("")
    }

    let clearInputPassword = (e) => {
        setPassword("")
    }

    let handleSubmitEmail = (e) => {
        let value = e.target.value
        setEmail(value)
    }

    let handleSubmitPassword = (e) => {
        let value = e.target.value
        setPassword(value)
    }

    let handleSubmit = async (e) =>{
        e.preventDefault()
        if (email === '') {
            setError('Заполните все поля')
            return 0;
        }
        if (password === '') {
            setError('Заполните все поля')
            return 0;
        }
        if (!email.includes('@')) {
            setError('В адресе должен быть символ @')
            return 0;
        }
        try {
            setLoading("loading...")
            const resultAction = await dispatch(loginThunk({email, password})).unwrap();
            const {user, token} = resultAction

            await dispatch(setCredentials({user, token}))

            navigate('/dashboard');
        }

        catch(err){
            setError(err.message || 'ошибка при входе')
        }
    }



    return(
        <>
            <Header/>
            <div className={style.container}>
                <div className={style.userLogin}>LOGIN</div>
                <div className={style.formLogin}>
                    <form onSubmit={handleSubmit} noValidate>
                        <input type="email" value={email} onDoubleClick={clearInputEmail} placeholder='Email' onChange={handleSubmitEmail} required />
                        <input placeholder='Password'  type={"password"} onDoubleClick={clearInputPassword } value={password}  onChange={handleSubmitPassword}/><br/>
                    <button type="submit" disabled={loading}>{loading ? loading  : "войти"}</button>
                    <div className={style.error}>{error}</div>
                    </form>
                </div>
            </div>
        </>
    )
}
