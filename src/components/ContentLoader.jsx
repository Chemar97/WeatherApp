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
            </section>
          </div>
        </div>
    );
};

export default ContentLoader;