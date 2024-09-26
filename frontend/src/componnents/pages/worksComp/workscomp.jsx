import React from 'react'
import './workcomp.css'
import { Link, Outlet } from 'react-router-dom'

export function Workscomp(props) {
    const worknav = [{
        name: "website link",
        className: "work-nav-child",
        to: "website"
    },
    {
        name: "game",
        className: "work-nav-child",
        to: "game"
    },
    {
        name: "other work",
        className: "work-nav-child",
    },

    {
        name: "tigrim",
        className: "work-nav-child",
        to: "tigrim"
    }
    ]

    return (
        <>
            <div className='workcomp-container'>
                <nav className='work-nav'>
                    <div>
                        {
                            worknav.map((li) => {
                                return <Link
                                    key={li.name}
                                    style={li.styles}
                                    className={li.className}
                                    to={li.to}
                                >
                                    {li.name}{console.log(li.styles)}
                                </Link>
                            })
                        }
                    </div>
                    <div className='right-float'>
                        <span>
                            {">"}
                        </span>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    )
}
