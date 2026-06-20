import style from "../style/Pagination.module.css"
import {useSelector} from "react-redux";


const Pagination = (props) => {
    let total =  useSelector(state => state.domains.pagination.total)
    let firstPage =  useSelector(state => state.domains.pagination.firstPage)
    let pages = []
    let countItems = Math.ceil(total / 3)
    for (let i = 1; i < countItems + 1; i++) {
        pages.push(i)
    }

    let backPage = () => {
        if(props.pagination.page !== firstPage) {
            props.pagination.setPage(props.pagination.page - 1)
        }
    }

    let nextPage = () => {
        if(props.pagination.page !== Math.ceil(countItems)) {
            props.pagination.setPage(props.pagination.page + 1)
        }

    }
debugger
    return(
        <>
            <div className={style.pagination}>
                <button onClick={backPage} disabled={props.pagination.page === 1}>назад</button>
                {pages.map((page) => {
                    if(page === props.pagination.page){
                        return(<div style={{fontWeight:900}}>{page}</div>)
                    }else{
                        return(<div>{page}</div>)
                    }
                })}
                <button onClick={nextPage} disabled={props.pagination.page >= countItems}>вперёд</button>
            </div>
        </>
    )
}

export default Pagination