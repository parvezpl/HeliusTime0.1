
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Otherwork() {
  const [userData, setUserData] = useState([])

  const getData = async () => {
    // try {
    //   await axios.get("/api/getuser")
    //     .then((res) => {
    //       console.log(res.data)
    //       setUserData(res.data)
    //     })
    // } catch (error) {
    //   console.log("catch erro")
    // }
  }

  useEffect(() => {
    getData()
  }, [])
  //  console.log(userData)

  const clickhandle = async ()=>{
    await axios.get("/api/getuser")
    .then((res)=>{
      console.log(res.data)
    })
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

