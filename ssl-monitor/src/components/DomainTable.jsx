
 const DomainTable = (props) => {
    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>Домен</th>
                    <th>Статус</th>
                    <th>Истекает</th>
                    <th>Дней осталось</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{props.item.domain}</th>
                        <th>{props.item.status}</th>
                    </tr>
                </tbody>
            </table>
        </>
    )
 }

 export default DomainTable