import './WeatherData.css'
import CurrentWeather from './CurrentWeather/CurrentWeather'
import DailyWeather from './DailyWeather/DailyWeather'
import SunPosition from './SunPosition/SunPosition'
import { currentGeoCurrentWeatherInterface, currentGeoInterface, currentGeoWeatherInterface, dailyWeatherInterface, hourlyItemWeatherInterface } from '../../types'
import { FC } from 'react'

interface propsInterface {
    currentGeo: currentGeoInterface,
    currentWeather: currentGeoCurrentWeatherInterface,
    dailyWeather: dailyWeatherInterface,
    hourlyWeatherData: Array<hourlyItemWeatherInterface>
}

const WeatherData: FC<propsInterface> = (props) => {
    return (
        <>
            <CurrentWeather
                currentGeo={props.currentGeo}
                currentWeather={props.currentWeather}
            />
            <DailyWeather
                dailyWeather={props.dailyWeather}
                hourlyWeatherData={props.hourlyWeatherData}
            />
            <SunPosition />
        </>
    )
}

export default WeatherData