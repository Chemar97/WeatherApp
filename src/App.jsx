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
    Atmosphere: 'https://media.giphy.com/media/ftfVpeWsm95QgGfOZ8/giphy.gif',
    Atmosphere1: 'https://media.giphy.com/media/yhZr5Wx7CBFbq/giphy.gif',
    Clear: 'https://media.giphy.com/media/7LLviNCYAmMWA/giphy.gif',
    Clear1: 'https://media.giphy.com/media/67uxmHhIF3uh6Ph8ew/giphy-downsized-large.gif',
    Clouds: 'https://media.giphy.com/media/gs2ubveMcc2zPVNceK/giphy.gif',
    Clouds1: 'https://media.giphy.com/media/jOafPZq6WvCZIjXka3/giphy.gif',
    Drizzle: 'https://media.giphy.com/media/n0Zt16UrMKNFu/giphy.gif',
    Drizzle1: 'https://media.giphy.com/media/xUA7bjscVZopwlB1zq/giphy.gif',
    Rain: 'https://media.giphy.com/media/3osxYmUhBUjzd430tO/giphy.gif',
    Rain1: 'https://media.giphy.com/media/oSaLJmbUgZQm4/giphy.gif',
    Snow: 'https://media.giphy.com/media/3oKIP7W2zOcac3RvFe/giphy.gif',
    Snow1: 'https://media.giphy.com/media/7Bgpw7PwdxoDC/giphy.gif',
    Thunderstorm: 'https://media.giphy.com/media/CKlafeh1NAxz35KTq4/giphy-downsized-large.gif',
    Thunderstorm1: 'https://media.giphy.com/media/xaZCqV4weJwHu/giphy.gif',

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
  document.body.style.backgroundSize=  '100%';

  return (
    <div className="App">
      <img src="" alt="" />
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
