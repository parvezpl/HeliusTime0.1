import React, { useState } from 'react'
import './tigrim.css'
export function Tigrim(props) {
    const divsArrays = Array.from({ length: 49 }, (_, index) => index + 1)
    const displayArrays = [1, 4, 7, 9, 11, 13, 17, 18, 19, 22, 23, 24, 26, 27, 28, 31, 32, 33, 37, 39, 41, 43, 46, 49]
    const notDisplayArrays = [[2, 3, 5, 6], [10, 12], [16, 20, 21], [25], [29, 30, 34, 35], [38, 40], [44, 45, 47, 48]]
    const notDisplayRows = [2, 3, 5, 6, 44, 45, 47, 48, 10, 12, 38, 40]
    const notDisplayColumn = [8, 14, 36, 42, 15, 16, 20, 21, 29, 30, 34, 35]

    const clickhandler =(e)=>{
        console.log("click handler",e)
    }
    return (
        <div className='main-box'>
            <div className='main-container'>
                {
                    divsArrays.map(num => (
                        <div key={num}
                            className='box'
                            defaultValue={[]}
                        >
                            <button className='button-x' style={{ display: !displayArrays.includes(num) && "none" }}
                            onClick={()=>clickhandler(num)}
                            >Div{num}</button>
                            {
                                num == 25 && <>
                                    <div className='button-25-1'>
                                        <div className='button-25-2'>
                                            <div className='button-25-3'>
                                                <div className='button-25-3-1'></div>
                                                <div className='button-25-3-2'></div>
                                                <div className='button-25-3-3'></div>
                                                <div className='button-25-3-4'></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
