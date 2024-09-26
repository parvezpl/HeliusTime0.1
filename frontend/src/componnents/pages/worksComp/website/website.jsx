import React, { useState } from 'react'
import './website.css'
import { Outlet } from 'react-router-dom'
export function Website(props) {
    const [fetchDetail, setFetchDetail] = useState(null)
    const sidebarstore = [
        {
            id: 1,
            webName: "moveItem",
            details: "this is test"
        },
        {
            id: 2,
            webName: "portfolio",
            details: "this is test2"
        }
    ]

    const clickhandler =(item)=>{
        setFetchDetail(item.details)
    }
    return (
        <>
            <div className='main-website-container'>
                <div className='sidebar-container'>
                    <div>
                        {sidebarstore.map((item) => <span key={item.id} className='item-box' onClick={()=>clickhandler(item)} >{item.webName}</span>)}
                    </div>
                </div>
                <div className='main-website-box'>
                    <div>{fetchDetail}   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ipsam quia non earum suscipit autem! Maiores tenetur doloribus obcaecati hic quas incidunt, laudantium aliquid distinctio magnam modi necessitatibus quae ipsa.</div>
                </div>
            </div>
        </>
    )
}
