import React, { useEffect, useState } from 'react'
import './website.css'
import { MdOutlineDeleteForever } from "react-icons/md";
import EntryForm from './EntryForm ';
import { deleteWeblinksData, weblinksData } from '../../../../api/apiCall';
export function Website(props) {
    const [fetchDetail, setFetchDetail] = useState()
    const [linksdata, setData] = useState([])
    const [sms, setSms] = useState('')

    useEffect(() => {
        try {
            weblinksData().then((res) => {
                setData(res);
            })
        } catch (error) {
            console.error("plz login first");
        }
    }, [linksdata])
    const clickhandler = (item) => {
        setFetchDetail(item.details)
    }

    const deleteHandler = (id) =>{
        deleteWeblinksData(id)
        setTimeout(() => {
            setSms("")
        }, 3000)
        setSms("deleted successfull")
    }

    return (
        <>
            <div className='main-website-container'>
                <div className='sidebar-container'>

                    {linksdata?.map((item, index) =>
                        <div key={index} className='links-item-box' >
                            <span
                                className='item-box'
                                onClick={() => clickhandler(item)}
                            >
                                {item.links}
                            </span>
                            <span>
                                <MdOutlineDeleteForever className='icon' onClick={()=>deleteHandler(item._id)}/>
                            </span>
                        </div>
                    )}

                </div>
                <div className='main-website-box'>
                    <div>
                        <EntryForm sms={sms}/>
                    </div>
                    <div className='fetchdetail'>{fetchDetail}</div>
                </div>
            </div>
        </>
    )
}
