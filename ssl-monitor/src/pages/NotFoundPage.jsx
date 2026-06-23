import {Link} from "react-router-dom";
import style from "../style/PageNotFoundPage.module.css"
import {Header} from "../components/header.jsx";

const PageNotFoundPage = () => {
    return(
        <>
            <div className={style.box}>
                <Header/>
                <div className={style.Error}>ERROR 404</div>
                <Link className={style.buttonLogin} to={'/login'}>Вернутся</Link>
            </div>
        </>
    )
}

export default PageNotFoundPage