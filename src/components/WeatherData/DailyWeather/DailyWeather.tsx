import { FC } from 'react'
import { dailyWeatherInterface, hourlyItemWeatherInterface } from '../../../types'
import WeatherIcon from '../../common/WeatherIcon'
import './DailyWeather.css'
import HourlyWeather from './HourlyWeather/HourlyWeather'

interface propsInterface {
    dailyWeather: dailyWeatherInterface,
    hourlyWeatherData: Array<hourlyItemWeatherInterface>
}

const DailyWeather: FC<propsInterface> = (props) => {
    let now = new Date()
    const months: Array<string> = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    let currentData = {
        day: now.getDate(),
        month: months[now.getMonth()]
    }
    return (
        <div className="dailyWeatherData">
                <div className="dailyWeatherCurrentDate">
                    <h4 className="dailyWeatherCurentDay">Сегодня</h4>
                    <p>{currentData.month}, {currentData.day}</p>
                </div>
                <div className="hourlyWeatherPanel">
                    {props.hourlyWeatherData.map(item => {
                        return <HourlyWeather
                            weather={item.weather}
                            id={item.id} 
                            temp={item.temp}
                            time={item.time}
                            key={item.id}    
                        />
                    })}
                </div>
                <div className="dailyWeatherPanel">
                    <div className="dailyWeatherPanelItem">
                        <p className="tal">Сегодня</p>
                        <div>
                        <WeatherIcon weather={props.dailyWeather.today.weather} width="100"/>
                        </div>
                        <p className="tar">{Math.round(props.dailyWeather.today.temp)}°С</p>
                    </div>
                    <div className="dailyWeatherPanelItem">
                        <p className="tal">Завтра</p>
                        <div>
                        <WeatherIcon weather={props.dailyWeather.tomorrow.weather} width="100"/>
                        </div>
                        <p className="tar">{Math.round(props.dailyWeather.tomorrow.temp)}°С</p>
                    </div>
                    <div className="dailyWeatherPanelItem">
                        <p className="tal">Послезавтра</p>
                        <div>
                        <WeatherIcon weather={props.dailyWeather.aftertomorrow.weather} width="100"/>
                        </div>
                        <p className="tar">{Math.round(props.dailyWeather.aftertomorrow.temp)}°С</p>
                    </div>
                </div>
            </div>
    )
}

export default DailyWeather