import React,{useState, useEffect} from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Particle from './components/Particles/Particles';
import './App.css'



export default function App() {
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('lagos')

  console.log()
  

  useEffect(()=>{
    async function getReport() {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=bb0f75e46270405397c151931202510&q=${query}`)
    const data = await response.json()
    setData(data)
    
  }
  getReport()
  },[query])

  const getChange =(e)=>{
    setSearch(e.target.value)
  }

  const passSearch=(e)=>{
    e.preventDefault();
    setQuery(search)
  }


  

  return (
    <div className='app'>
      <Particle className='particles' />
      
      
      <Header getChange={getChange}  passSearch={passSearch}/>
      <div className='apple'>
        <Card
          name={data&&data.location&&data.location.name} 
          country={data&&data.location&&data.location.country} 
          temperature={data&&data.current&&data.current.temp_c} 
          image={data&&data.current&&data.current.condition.icon}
          wind_speed={data&&data.current&&data.current.wind_kph}
          pressure={data&&data.current&&data.current.pressure_mb}
          humidity={data&&data.current&&data.current.humidity}
          precip={data&&data.current&&data.current.precip_mm}
      />
      </div>
      
    </div>
  )
}
