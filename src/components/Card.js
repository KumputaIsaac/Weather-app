import React from 'react'
import './Card.css'

export default function Card({name,wind_speed,pressure,humidity,precip, temperature,country,image}) {
    return (
        <div>
            <div className='flex even'>
                <div className='width'>
                    <h1>{temperature} °C</h1>
                    <p>{name}</p>
                    <p>{country}</p>
                </div>
                <div>
                    <img src={image} alt='pics' />
                </div>
            </div>

            <div className="flex space wrap center">
                <div>
                    <p>wind speed(km/hr)</p>
                    <h2>{wind_speed}</h2>
                </div>
                <div>
                    <p>pressure(millibar)</p>
                    <h2>{pressure}</h2>
                </div>
                <div>
                    <p>precipitation(mm)</p>
                    <h2>{precip}</h2>
                </div>
                <div>
                    <p>Humidity(%)</p>
                    <h2>{humidity}</h2>
                </div>
            </div>
        </div>
    )
}
