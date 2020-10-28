import React from 'react'
import './Header.css'

export default function Header({passSearch,getChange}) {
    return (
        <div>
            <div className="flex even wrap">
                <h1>Weather app</h1>
                <form onSubmit={passSearch}>
                    <input placeholder="enter city" onChange={getChange}/>
                </form>
            </div>
            
        </div>
    )
}
