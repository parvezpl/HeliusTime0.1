
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Otherwork() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    axios.get("/api/getuser")
      .then((res) => {
        console.log(res.data)
        setUserData(res.data)
      })
  }, [])

  return (
    <div>
      {
        userData.map((item) =>
          <div style={{ "display": "flex", "margin": "10px", gap: "300px" }}>
            <p>{item.name}</p>
            <p>{item._id}</p>
          </div>
        )
      }
    </div>
  )
}

