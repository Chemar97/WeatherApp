import React from 'react';

const AppContent = ({dropshadow, infoWeather, imgWeather,nomImgWeather , changeDegrees, buttonDegrees }) => {
    
    return (

        <div className="card" style={{filter: `drop-shadow(5px 8px 4px ${dropshadow})`}}>
    
            <section className="principal-weather ">
            <h2><b>{infoWeather.sys?.country}</b>, {infoWeather.name}</h2>
            <img 
            className='weather-img' 
            src={imgWeather[nomImgWeather]} 
            alt="weather-img" 
            />
            <p className='description'>{infoWeather.weather?.[0].main} </p>
            <p>{infoWeather.main?.temp}{changeDegrees ? ' °F': ' °C'}</p>
            </section>

            <section className="info-weather">
            <div className="description">
                <h3>Description: </h3>
                <p>{infoWeather.weather?.[0].description}</p>
                <img src= {`http://openweathermap.org/img/wn/${infoWeather.weather?.[0].icon}.png`} alt="icon" style={{width: `25px`}} />
            </div>
            <div className="windchill">
                <h3>Windchill: </h3>
                <p>{infoWeather.main?.feels_like}{changeDegrees ? ' °F': ' °C'}</p>
                <img src= './thermometer.png' alt="icon" style={{width: `25px`}} />
            </div>
            <div className="humidity">
                <h3>Humidity: </h3>
                <p>{infoWeather.main?.humidity}%</p>
                <img src= './humidity.png' alt="icon" style={{width: `25px`}} />
            </div>
            <div className="wind-speed">
                <h3>Wind speed: </h3>
                <p>{infoWeather.wind?.speed}{changeDegrees ? ' mph': ' m/s'}</p>
                <img src= './wind.png' alt="icon" style={{width: `25px`}} />
            </div>
            </section>
            <button onClick={buttonDegrees}>Change to... {changeDegrees ? '°C'  : '°F'}</button>
        </div>
    )
};

export default AppContent;