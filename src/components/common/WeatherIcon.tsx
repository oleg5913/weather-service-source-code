import sunny from '../../img/sun.png'
import cloudy from '../../img/cloudy.png'
import cloudySun from '../../img/cloudySun.png'
import drizzle from '../../img/drizzle.png'
import snow from '../../img/weatherIconSnow.png'

import { FC } from "react";

interface propsInterface {
    weather: string,
    width: string
}

const WeatherIcon: FC<propsInterface> = (props) => {
    const weather = () => {
        switch (props.weather) {
            case "ясно":
                return sunny
            case "пасмурно":
                return cloudy
            case "облачно с прояснениями":
                return cloudySun
            case "переменная облачность":
                return cloudySun
            case "небольшая облачность":
                return cloudySun
            case "небольшой снег":
                return snow
            default:
                break;
        }
    }
    return (
        <img style={{width: props.width + '%'}} src={weather()}/>
    )
}

export default WeatherIcon