import style from "../style/DashboardPage.module.css"
import {useEffect, useState} from "react";
import fetchDomains, {domainsThink} from "../store/domainsSlice.js";
import {useDispatch, useSelector} from "react-redux";
import DomainTable from "../components/DomainTable";
import Pagination from "../components/Pagination.jsx";
import AddDomainModal from "../components/AddDomainModal.jsx";


const DashboardPage = () =>{

    let [isModalOpen, setIsModalOpen] = useState(false)
    let [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(state => state.domains);

    let Close = (e) => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        dispatch(domainsThink(page));
    }, [dispatch, page])
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
            {isModalOpen ? <AddDomainModal props={{Close, isModalOpen, setIsModalOpen}}/> : false}
            <div className={style.box}>

                {items.length === 0 ? <div>Доменов нет</div> : (
                    <table>
                        <tr>
                            <th>Домен</th>
                            <th>Статус</th>
                            <th>Истекает</th>
                            <th>Дней осталось</th>
                        </tr>
                    </table>)}
                {items.map((item) => (
                    <DomainTable key={item.id} item={item}/>
                ))}
                <div >
                    <button onClick={() => {setIsModalOpen(true)}}>Добавить домен</button>

                </div>
                <div className={style.pagination}>
                    <Pagination pagination={{page, setPage}}/>
                </div>
            </div>

        </>
    )

}

export default DashboardPage