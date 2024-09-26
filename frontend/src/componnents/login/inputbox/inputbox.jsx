import React from 'react'
import "./inputbox.css"

export function Inputbox ({
    placeholder,
}) {
    return (
        <>
            <input type="text" className='inputbox' placeholder={placeholder} />
        </>
    )
}

export function LoginButton ({
    placeholder,
    type
}){
    return <button className='loginbutton' type={type} >{placeholder}</button>
}
