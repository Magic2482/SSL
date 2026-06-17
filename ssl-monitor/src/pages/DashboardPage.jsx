import style from "../style/DashboardPage.module.css"
import {useEffect} from "react";
import fetchDomains, {domainsThink} from "../store/domainsSlice.js";
import {useDispatch, useSelector} from "react-redux";
import DomainTable from "../components/DomainTable";

const DashboardPage = () =>{

    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(state => state.domains);
    useEffect(() => {
        dispatch(domainsThink())
    }, [dispatch])
    if(loading) return (
        <>
            <div className={style.text}>SSL Monitor </div>
            <div className={style.box}>
                <div className={style.loading}>Loading...</div>
            </div>
        </>

    )

    if(error) return <div>{error}</div>
    return(
        <>
            <div className={style.text}>SSL Monitor </div>
            <div className={style.box}>
                {items.map((item) => (
                    <DomainTable key={item.id} item={item}/>
                ))}

            </div>
        </>
    )

}

export default DashboardPage