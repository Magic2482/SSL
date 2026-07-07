
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
                    <tr className={style.table}>
                        <td>{props.item.domain}</td>
                        <td><StatusBadge item={props.item.status}/></td>
                        <td>{props.item.expires_at ? RuData : '-'}</td>
                        <td>{props.item.days_left ? props.item.days_left : '-'}</td>
                        <td><button onClick={confirm}>Удалить</button></td>
                    </tr>
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