import {Link} from "react-router-dom";

const PageNotFoundPage = () => {
    return(
        <>
            <div style={{color: 'red'}}>ERROR 404</div>
            <Link to={'/login'}>вернутся</Link>
        </>
    )
}

export default PageNotFoundPage