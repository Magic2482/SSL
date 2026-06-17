
import StatusBadge from "../components/StatusBadge.jsx";
import style from "../style/table.module.css";

 const DomainTable = (props) => {
     const RuData = new Date(props.item.expires_at).toLocaleString('ru-RU')
    return(
        <>
            <table className={style.table}>
                <tbody>
                <tr>
                    <th>{props.item.domain}</th>
                    <th><StatusBadge item={props.item.status}/></th>
                    {props.item.expires_at ? <th>{RuData}</th> : <th>-</th>}
                    {props.item.days_left ? <th>{props.item.days_left}</th> : <th>-</th>}
                </tr>
                </tbody>
            </table>
        </>
    )
 }

export default DomainTable