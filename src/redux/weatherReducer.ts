import { Dispatch } from "react"
import { ThunkAction } from "redux-thunk"
import { GeoAPI, WeatherAPI } from "../api/api"
import { currentGeoInterface, weatherInCityInterface, weatherInCurrentGeoInterface, selectedCityWeatherInterface, currentGeoWeatherInterface } from "../types"
import { SET_WEATHER_IN_CURRENT_GEO, SET_WEATHER_IN_CITY, SET_GEOCODE_IN_CURRENT_GEO, DELETE_CITY } from "./actionTypes"
import { appStateType } from "./rootReducer"



const initialState = {
    currentGeo: {} as currentGeoInterface,
    weatherInCurrentGeo: {} as weatherInCurrentGeoInterface,
    weatherInCity: [] as Array<weatherInCityInterface> 
}

const weatherReducer = (state = initialState, action: any): typeof initialState => {
    switch(action.type) {
        case SET_GEOCODE_IN_CURRENT_GEO:
            return {
                ...state,
                currentGeo: {...action.geo}
            }
        case SET_WEATHER_IN_CURRENT_GEO:
            const weather = {
                current: {
                    temp: Math.round(action.weather.current.temp),
                    weather: action.weather.current.weather[0].description,
                    humidity: action.weather.current.humidity,
                    pressure: action.weather.current.pressure,
                    windSpeed: Math.round(action.weather.current.wind_speed)
                },
                daily: {
                    today: {
                        temp: Math.round(action.weather.daily[0].temp.day),
                        weather: action.weather.daily[0].weather[0].description
                    },
                    tomorrow: {
                        temp: Math.round(action.weather.daily[1].temp.day),
                        weather: action.weather.daily[1].weather[0].description
                    },
                    aftertomorrow: {
                        temp: Math.round(action.weather.daily[2].temp.day),
                        weather: action.weather.daily[2].weather[0].description
                    }
                },
                hourly: action.weather.hourly.map((item: any) => {
                    return {
                        temp: item.temp,
                        weather: item.weather[0].description,
                        time: new Date(item.dt * 1000).toString().slice(-45, -40),
                        id: item.dt
                    }
                })
            }
            return {
                ...state,
                weatherInCurrentGeo: {...weather}
            }
        case SET_WEATHER_IN_CITY:
            let newCity = {
                name: action.weather.name,
                temp: Math.round(action.weather.main.temp),
                weather: action.weather.weather[0].description,
                id: action.weather.id
            }
            return {
                ...state,
                weatherInCity: [
                    ...state.weatherInCity,
                    newCity
                ]
            }
        case DELETE_CITY:
            return {
                ...state,
                weatherInCity: 
                    state.weatherInCity.filter(item => {
                        return item.id != action.id
                    })
            }
        default: return state
    }
}

type actionTypes= setGeocodeInCurrentGeoActionInterface | setWeatherInCityActionInterface | setWeatherInCurrentGeoActionInterface | deleteCityActionInterface 

interface setGeocodeInCurrentGeoActionInterface {
    type: typeof SET_GEOCODE_IN_CURRENT_GEO,
    geo: currentGeoInterface
}

interface setWeatherInCityActionInterface {
    type: typeof SET_WEATHER_IN_CITY,
    weather: selectedCityWeatherInterface
}

interface setWeatherInCurrentGeoActionInterface {
    type: typeof SET_WEATHER_IN_CURRENT_GEO,
    weather: currentGeoWeatherInterface
}

interface deleteCityActionInterface {
    type: typeof DELETE_CITY,
    id: number
}

const setGeocodeInCurrentGeo = (geo: currentGeoInterface): setGeocodeInCurrentGeoActionInterface =>
    ({type: SET_GEOCODE_IN_CURRENT_GEO, geo: geo})

const setWeatherInCity = (weather: selectedCityWeatherInterface): setWeatherInCityActionInterface => 
    ({type: SET_WEATHER_IN_CITY, weather: weather})

const setWeatherInCurrentGeo = (weather: currentGeoWeatherInterface): setWeatherInCurrentGeoActionInterface =>
    ({type: SET_WEATHER_IN_CURRENT_GEO, weather: weather})

type thunkType = ThunkAction<Promise<void>, appStateType, any, actionTypes>

export const deleteCity = (id: number): deleteCityActionInterface =>
    ({type: DELETE_CITY, id: id})

export const getWeatherInCity = (city: string): thunkType => async (dispatch: Dispatch<actionTypes>) => {
    const response = await WeatherAPI.getWeatherInCity(city)
    dispatch(setWeatherInCity(response))
}

export const getWeatherInGeo = (latitude: number, longitude: number): thunkType => async (dispatch: Dispatch<actionTypes>) => {
    const weatherData = await WeatherAPI.getWeatherInCurrentGeo(latitude, longitude)
    const geoData = await GeoAPI.getCity(latitude, longitude)
    dispatch(setWeatherInCurrentGeo(weatherData))
    dispatch(setGeocodeInCurrentGeo(geoData))
}

export default weatherReducer