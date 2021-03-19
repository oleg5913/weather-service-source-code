//types for weather in select city
interface cloudsInterface {
    all: string
}

interface coordInterface {
    lat: number,
    lon: number
}

interface mainInterface {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
}

interface sysInterface {
    country: string,
    id: number,
    sunrise: number,
    sunset: number,
    type: number
}

interface weatherInterface {
    description: string,
    icon: string,
    id: number,
    main: string
}

interface windInterface {
    deg: number,
    speed: number
}

export interface selectedCityWeatherInterface {
    base: string,
    clouds: cloudsInterface,
    cod: number,
    coord: coordInterface,
    dt: number,
    id: number,
    main: mainInterface,
    name: string,
    sys: sysInterface,
    timezone: number,
    visibility: number,
    weather: Array<weatherInterface>,
    wind: windInterface
}

//types for weather in current geo 
interface alertsItemInterface {
    description: string,
    end: number,
    event: string,
    sender_name: string,
    start: number
}

interface currentWeatherItemInterface {
    description: string,
    icon: string,
    id: number,
    main: string
}

interface currentWeatherInterface {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: number,
    humidity: number,
    pressure: number,
    sunrise: number,
    sunset: number,
    temp: number,
    uvi: number,
    visibility: number,
    weather: Array<currentWeatherItemInterface>,
    wind_deg: number,
    wind_speed: number
}

interface feelsLikeDailyInterface {
    day: number,
    eve: number,
    morn: number,
    night: number
}

interface dailyTempInterface {
    day: number,
    eve: number,
    max: number,
    min: number,
    morn: number,
    night: number
}

interface dailyWeatherDataItemInterface {
    description: string,
    icon: string,
    id: number,
    main: string
}

interface dailyItemInterface {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: feelsLikeDailyInterface,
    humidity: number,
    pop: number,
    pressure: number,
    snow: number,
    sunrise: number,
    sunset: number,
    temp: dailyTempInterface,
    uvi: number,
    weather: dailyWeatherDataItemInterface,
    wind_deg: number,
    wind_speed: number
}



interface hourlyItemInterface {
    clouds: number,
    dew_point: number,
    dt: number,
    feels_like: number,
    humidity: number,
    pop: number,
    pressure: number,
    temp: number,
    uvi: number,
    visibility: number,
    weather: Array<dailyWeatherDataItemInterface>,
    wind_deg: number,
    wind_gust: number,
    wind_speed: number
}

interface minutelyItemInterface {
    dt: number,
    precopotation: number
}

export interface currentGeoWeatherInterface {
    alerts: Array<alertsItemInterface>,
    current: currentWeatherInterface,
    daily: Array<dailyItemInterface>,
    hourly: Array<hourlyItemInterface>,
    lat: number,
    lon: number,
    minutely: Array<minutelyItemInterface>,
    timezone: string,
    timezone_offset: number
}


//types for weather reducer 
export interface currentGeoInterface {
    city: string,
    country: string
}

export interface currentGeoCurrentWeatherInterface {
    temp: number,
    weather: string,
    humidity: number,
    pressure: number,
    windSpeed: number
}

interface dailyItemWeatherInterface {
    temp: number,
    weather: string
}

export interface dailyWeatherInterface {
    today: dailyItemWeatherInterface,
    tomorrow: dailyItemWeatherInterface,
    aftertomorrow: dailyItemWeatherInterface
}

export interface hourlyItemWeatherInterface {
    temp: number,
    weather: string,
    time: string,
    id: string
}

export interface weatherInCurrentGeoInterface {
    current: currentGeoCurrentWeatherInterface,
    daily: dailyWeatherInterface,
    hourly: Array<hourlyItemWeatherInterface>
}

export interface weatherInCityInterface {
    name: string,
    temp: number,
    weather: string,
    id: number
}

// types for Components