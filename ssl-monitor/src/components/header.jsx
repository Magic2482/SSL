import {useDispatch} from "react-redux";
import {logout} from "../store/authSlice.js";
import style from "../style/header.module.css"
import {useSelector} from "react-redux";

export const Header = () => {
    return (
        <>
            <div className={style.header}>
                <h3>SSL MONITOR</h3>
            </div>
        </>
    )
}

export const HeaderProfil = () => {
    const dispatch = useDispatch();
    const email = useSelector(state => localStorage.user);
    const handle = () => {
        dispatch(logout())
    }

    return (
        <>
            <div className={style.header}>
                <h3>{email}</h3>
                <button onClick={handle}>logout</button>
            </div>
        </>
    )
}

