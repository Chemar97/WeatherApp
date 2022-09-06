import axios from 'axios'
import {useEffect, useState } from 'react'
import './App.css'
import AppContent from './components/AppContent'
import ContentLoader from './components/ContentLoader'


function App() {
  
  const [infoWeather, setInfoWeadther] = useState ({})

  const [changeDegrees, setChangeDegrees] = useState(true)

  const[isLoading, setIsLoading] = useState(true)
  
  const buttonDegrees = () => setChangeDegrees(!changeDegrees)

  const wheatherColors = {
    Thunderstorm: '#4C4500',
    Drizzle: '#008E9B',
    Rain: '#0F5298',
    Snow: '#ABCDF6',
    Atmosphere: '#5E3C9C',
    Clear: '#FAC700',
    Clouds: '#1f3c5c'
  }

  const imgWeather = {
    Atmosphere: './src/assets/Atmosphere.gif',
    Atmosphere1: './src/assets/Atmosphere1.gif',
    Clear: './src/assets/Clear.gif',
    Clear1: './src/assets/Clear1.gif',
    Clouds: './src/assets/Clouds.gif',
    Clouds1: './src/assets/Clouds1.gif',
    Drizzle: './src/assets/Drizzle.gif',
    Drizzle1: './src/assets/Drizzle1.gif',
    Rain: './src/assets/Rain.gif',
    Rain1: './src/assets/Rain1.gif',
    Snow: './src/assets/Snow.gif',
    Snow1: './src/assets/Snow1.gif',
    Thunderstorm: './src/assets/Thunderstorm.gif',
    Thunderstorm1: './src/assets/Thunderstorm1.gif',

  }

  useEffect(() => {

    function success(pos) {
      const crd = pos.coords;
      axios.get(changeDegrees ? 
        `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=5471f225dd94fbccb6581b1297a92873&units=imperial`:
        `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=5471f225dd94fbccb6581b1297a92873&units=metric`)
      .then(res => {
        setInfoWeadther(res.data)
        
      })
      .finally(()=> setIsLoading(false))
    }

    navigator.geolocation.getCurrentPosition(success)
    
  }, [changeDegrees])


  const dropshadow = wheatherColors[infoWeather.weather?.[0].main]

  
  let nomImgWeather = String(infoWeather.weather?.[0].main)
  
  console.log(imgWeather[nomImgWeather])
  
  document.body.style.background= `url(${imgWeather[nomImgWeather + '1']}) no-repeat center center `;
  document.body.style.backgroundSize=  'cover';

  return (
    <div className="App">
      {
        isLoading ? (
            <ContentLoader/>
                ) : (
                  <AppContent dropshadow={dropshadow} infoWeather={infoWeather} imgWeather={imgWeather} nomImgWeather={nomImgWeather} changeDegrees={changeDegrees} buttonDegrees={buttonDegrees}/>
                )
        }
    </div>
  )
}

export default App
