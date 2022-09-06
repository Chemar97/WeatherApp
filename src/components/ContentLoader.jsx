import React from 'react';

const ContentLoader = () => {
    return (
        <div>
            <div className="card1  card-skeleton">
            <section className="principal-weather-skeleton">
              <div className="weather-img-skeleton skeleton"></div>
              <div className="description1-skeleton skeleton"></div>
            </section>
            <section className="info-weather-skeleton skeleton">
              <div className="description2-skeleton"></div>
              <div className="windchill-skeleton"></div>
              <div className="humidity-skeleotn"></div>
              <div className="wind-speed-skeleton"></div>
            </section>
          </div>
        </div>
    );
};

export default ContentLoader;