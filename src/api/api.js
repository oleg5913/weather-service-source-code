import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
})

export const WeatherAPI = {
    getWeatherInCurrentGeo(lat, lon) {
        return instance.get(`onecall?lat=${lat}&lon=${lon}&appid=1aa45bcd909b2195526823ad2c6f6688&lang=ru&units=metric`)
            .then(response => response.data)
    },
    getWeatherInCity(city) {
        return instance.get(`weather?q=${city}&appid=1aa45bcd909b2195526823ad2c6f6688&lang=ru&units=metric`)
            .then(response => response.data)
    }
}

const geoInstance = axios.create({
    baseURL: 'https://geocode-maps.yandex.ru/',
})

export const GeoAPI = {
    getCity(lat, lon) {
        let geoData = {}
        return geoInstance.get(`1.x/?apikey=bf61d003-0e7d-4315-8343-f83374eff49e&geocode=${lat},${lon}&format=json&results=1&sco=latlong`)
            .then(response => geoData = {
                city: response.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName,
                country: response.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.AddressDetails.Country.CountryName
                }
            )
    }
}