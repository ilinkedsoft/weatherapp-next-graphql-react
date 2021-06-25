/* eslint-disable @next/next/no-img-element */
import { FC, useState } from "react";
import Image from 'next/image';

import Layout from 'components/layout';
import SearchBar from 'components/SearchBar';


import icon1 from 'images/icons/icon-1.svg';
import iconUmberella from 'images/icon-umberella.png';
import iconWind from 'images/icon-wind.png';

import {getWeather} from 'apis';
import moment from "moment";

const Index: FC = () => {

  const [weather, setWeather] = useState<getCityByName | null>(null);
  const searchAction = async (cityName: string) => {
    var res = await getWeather(cityName);
    setWeather(res.getCityByName);
    console.log(res)
  }
  
  const Content = () => {
    return (
      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            <div className="today forecast">
              <div className="forecast-header">
                  <div className="day">{moment().format('dddd')}</div>
                  <div className="date">{moment().format('MMM YY')}</div>
              </div>
              <div className="forecast-content">
                  <div className="location">{weather?.name}</div>
                  <div className="degree">
                      <div className="num">{weather?.weather.temperature.actual}<sup> o</sup>C</div>
                      <span>{weather?.weather.temperature.min} ~ {weather?.weather.temperature.max}<sup> o</sup>C</span>
                      <div className="forecast-icon">
                          <img className="m-auto" height="90" width="90" src={`http://openweathermap.org/img/w/${weather?.weather.summary.icon}.png`} alt={weather?.weather.summary.description} />
                      </div>	
                  </div>
                  <span><Image src={iconUmberella} alt="" />{weather?.weather.clouds.humidity}%</span>
                  <span><Image src={iconWind} alt="" />{weather?.weather.wind.speed}m/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Layout>
      <SearchBar searchAction={searchAction}/>
      {weather && <Content />}
    </Layout>
  )
}

export default Index
