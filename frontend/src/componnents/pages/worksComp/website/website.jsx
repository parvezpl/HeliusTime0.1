import React, { useEffect, useState } from 'react'
import './website.css'
import axios from 'axios';
export function Website(props) {
    const [fetchDetail, setFetchDetail] = useState(null)
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get("/api/weblinks")
            console.log(response)
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect( ()=>{
        fetchData()
    },[])

    const clickhandler =(item)=>{
        setFetchDetail(item.details)
    }
    return (
        <>
            <div className='main-website-container'>
                <div className='sidebar-container'>
                    <div>
                        {data.map((item) => <span key={item._id} className='item-box' onClick={()=>clickhandler(item)} >{item.links}</span>)}
                    </div>
                </div>
                <div className='main-website-box'>
                    <div>{fetchDetail}</div>
                </div>
            </div>
        </>
    )
}
