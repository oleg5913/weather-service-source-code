import { FC } from 'react'
import { currentGeoInterface, currentGeoCurrentWeatherInterface } from '../../../types'
import WeatherIcon from '../../common/WeatherIcon'
import './CurrentWeather.css'

interface propsInterface {
    currentGeo: currentGeoInterface,
    currentWeather: currentGeoCurrentWeatherInterface
}

const CurrentWeather: FC<propsInterface> = (props) => {
    return (
        <div className="currentWeatherDataWrap">
                <WeatherIcon weather={props.currentWeather.weather} width="30"/>
                <div className="currentWeatherData">
                    <p className="tempSymbol">°С</p>
                    <h1>{props ? props.currentWeather.temp : null}</h1>
                    <p className="currentGeo">{props.currentGeo.city + ", " + props.currentGeo.country}</p>
                    <p className="currentWeatherValue">{props.currentWeather.weather}</p>
                    <p className="currentWeatherValue">Влажность {props.currentWeather.humidity}%</p>
                    <p className="currentWeatherValue">Давление {props.currentWeather.pressure}мм.рт.ст.</p>
                    <p className="currentWeatherValue">Ветер {props.currentWeather.windSpeed}м/с</p>
                </div>
            </div>
    )
}

export default CurrentWeather