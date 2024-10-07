import React, { useEffect, useState } from 'react'
import './website.css'
import axios from 'axios';
import EntryForm from './EntryForm ';
export function Website(props) {
    const [fetchDetail, setFetchDetail] = useState()
    const [linksdata, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/weblinks")
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const updates = localStorage.getItem("update")
    useEffect( ()=>{
        fetchData()
    },[updates])

    const clickhandler =(item)=>{
        setFetchDetail(item.details)
    }

    return (
        <>
            <div className='main-website-container'>
                <div className='sidebar-container'>
                    <div>
                        {linksdata?.map((item) => <span key={item._id} className='item-box' onClick={()=>clickhandler(item)} >{item.links}</span>)}
                    </div>
                </div>
                <div className='main-website-box'>
                    <div>
                        <EntryForm/>
                    </div>
                    <div>{fetchDetail}</div>
                </div>
            </div>
        </>
    )
}
