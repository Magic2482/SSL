import {useDispatch} from "react-redux";
import {logout} from "../store/authSlice.js";

const Header = () => {
    const dispatch = useDispatch();
    const handle = () => {
        dispatch(logout())
    }
    return (
        <>
            <h3 style={{color:'#643999'}}>SSL MONITOR</h3>
            <button onClick={handle } >logout</button>
        </>
    )
}

export default Header