

const StatusBadge = (props) => {
   if(props.item === 'valid'){
       return <span style={{padding:"0 20%",backgroundColor:"#EAF3DE", color:'#3B6D11'}}>Активен</span>
   }

    if(props.item === 'expiring_soon'){
        return <span style={{padding:"0 20%",backgroundColor:"#FAEEDA", color:'#854F0B'}}>Истекает</span>
    }

    if(props.item === 'expired'){
        return <span style={{padding:"0 20%",backgroundColor:"#FCEBEB", color:'#A32D2D'}}>Истёк</span>
    }

    if(props.item === 'pending'){
        return <span style={{padding:"0 20%", backgroundColor:"#F1EFE8", color:'#5F5E5A'}}>Ожидает</span>
    }

    if(props.item === 'error'){
        return <span style={{padding:"0 20%",backgroundColor:"#F1EFE8", color:'#5F5E5A'}}>Ошибка</span>
    }
}

export default  StatusBadge