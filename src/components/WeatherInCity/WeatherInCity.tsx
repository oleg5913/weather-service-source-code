import weatherIcon from '../../img/weatherIconSnow.png'
import basketIcon from '../../img/basketIcon.png'
import './WeatherInCity.css'
import { weatherInCityInterface } from '../../types'
import { FC } from 'react'
import WeatherIcon from '../common/WeatherIcon'

const WeatherInCity: FC<weatherInCityInterface & any> = (props) => {
    return (
        <div className="weatherInCity">
            <p>{props.name}</p>
            <WeatherIcon weather={props.weather} width="10"/>
            <p>{props.temp}°С</p>
            <img className="deleteBtn" src={basketIcon} onClick={() => props.deleteCity(props.id)} />
        </div>
    )
}

export default WeatherInCity