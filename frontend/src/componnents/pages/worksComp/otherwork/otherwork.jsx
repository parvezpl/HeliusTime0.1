
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { fetchData } from './apidata'

export function Otherwork() {
  const [userData, setUserData] = useState([])

   const clickhandle = async ()=>{
    
    const res= await fetchData()
    console.log(res)
    console.log("hell")
 
  }
  return (
    <div >
      <button onClick={clickhandle}>hello</button>
      {/* {
        userData?.map((item, index) =>
          <div key={index} style={{ "display": "flex", "margin": "10px", gap: "300px" }}>
            <p>{item.name}</p>
            <p>{item._id}</p>
          </div>
        )
      } */}
    </div>
  )
}

