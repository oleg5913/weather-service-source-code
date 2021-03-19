import './HourlyWeather.css'
import { FC } from 'react'
import { hourlyItemWeatherInterface } from '../../../../types'
import WeatherIcon from '../../../common/WeatherIcon'

const HourlyWeather: FC<hourlyItemWeatherInterface> = (props) => {
    return (
        <div className="hourlyWeatherWrap">
            <p>{Math.round(props.temp)}°С</p>
            <WeatherIcon weather={props.weather} width="150"/>
            <p>{props.time}</p>
        </div>
    )
}

export default HourlyWeather