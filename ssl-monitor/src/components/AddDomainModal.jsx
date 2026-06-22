import style from '../style/AddDomainModal.module.css'
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addDomainThunk, domainsThink} from "../store/domainsSlice.js";

const AddDomainModal = (props) => {

    let [data, setData] = React.useState("")
    let [disabled, setDisabled] = React.useState(false)
    const dispatch = useDispatch();
    let clearInputEmail = () => {
        setData("")
    }

    let handleSubmit = (e) => {
       let data = e.target.value
        setData(data)
    }
    const submitJson = async (e) => {
        e.preventDefault()
        if(data === ""){
            setData("Поле пустое")
            return
        }
        if(data.includes(" ")){
            setData( "Есть пробел")
            return
        }
        if(!data.includes(".")){
            setData( "не содержит точку")
            return
        }
        if(data.includes("http://")){
            setData( "напишите домен без http://")
            return
        }
        try {
            setDisabled(true)
            await dispatch(addDomainThunk(data))
            setData("")
            setDisabled(false)
            props.props.setIsModalOpen(false)


        }
        catch(e) {}
    }


    return(
        <>
            <div onClick={props.props.Close} className={style.box}>
                <form onClick={(e) => e.stopPropagation()} onSubmit={submitJson} className={style.form}>
                    <input className={style.domainInput} placeholder="example.com" value={data} onDoubleClick={clearInputEmail} onChange={handleSubmit}/>
                    <div>Только домен без https:// (например: example.com)</div>
                    <button disabled={disabled} type="submit" >Добавить</button>
                    <button onClick={props.props.Close}>Отмена</button>
                </form>
            </div>
        </>
    )
}

export default AddDomainModal