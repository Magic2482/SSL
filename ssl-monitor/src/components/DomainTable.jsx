
import StatusBadge from "../components/StatusBadge.jsx";
import style from "../style/table.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {delDomainThunk} from "../store/domainsSlice.js";



 const DomainTable = (props) => {
     const dispatch = useDispatch();
     const RuData = new Date(props.item.expires_at).toLocaleString('ru-RU')
     const [Confirm, setConfirm] = React.useState(false);
     const [disabled, setDisabled] = React.useState(false);

     const Delete = async () => {
         setDisabled(true)
         await dispatch(delDomainThunk(props.item.id))
         setDisabled(false)
     }

     const confirm = () => {
         setConfirm(true)
     }
     return (
         <>
             <table className={style.table}>
                 <thead>
                    <tr>
                        <th>{props.item.domain}</th>
                        <th><StatusBadge item={props.item.status}/></th>
                        <th>{props.item.expires_at ? RuData : '-'}</th>
                        <th>{props.item.days_left ? props.item.days_left : '-'}</th>
                        <th><button onClick={confirm}>Удалить</button></th>
                    </tr>
                 </thead>
             </table>
             {Confirm ? <>
                 <div className={style.confirm}>
                     <div> Удалить домен {props.item.domain}?</div>
                     <button disabled={disabled} onClick={Delete}>Удалить</button>
                     <button onClick={() => setConfirm(false)}>Отмена</button>
                 </div>
             </> : ''}
         </>
     )
 }

export default DomainTable