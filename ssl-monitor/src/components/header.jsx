import {useDispatch} from "react-redux";
import {logout} from "../store/authSlice.js";
import style from "../style/header.module.css"
import {useSelector} from "react-redux";

const Header = () => {
    const email = useSelector(state => state.auth.user?.email);
    const dispatch = useDispatch();
    const handle = () => {
        dispatch(logout())
    }

    return (
        <>
            <div className={style.header}>
                <h3>{email ? email : "SSL MONITOR"}</h3>
                <button onClick={handle}>logout</button>
            </div>
        </>
    )
}

export default Header