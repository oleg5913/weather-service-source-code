import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import WeatherData from './components/WeatherData/WeatherData';
import { getWeatherInCity, getWeatherInGeo, deleteCity } from './redux/weatherReducer';
import Preloader from './components/Preloader/Preloader'
import WeatherInCity from './components/WeatherInCity/WeatherInCity';
import Modal from './components/Modal/Modal'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      showModal: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentDidMount() {
    const options = {
      enableHighAccuracy: true
    }
    const coords = async (position) => {
      await this.props.getWeatherInGeo(position.coords.latitude, position.coords.longitude)
      await this.props.getWeatherInCity("Нью-Йорк")
      await this.props.getWeatherInCity("Москва")
      await this.props.getWeatherInCity("Токио")
      this.setState({ isLoading: false })
    }

    const error = (err) => {
      console.warn(err.message)
    }

    navigator.geolocation.getCurrentPosition(coords, error, options)
  } //initialize, thunks and geo

  toggleModal() {
    this.setState((state) => {
      return { showModal: !state.showModal }
    })
  } // enable/disable modal window

  render() {
    return (
      <div className="App">
        {this.state.showModal ?
          <Modal
            getWeatherInCity={this.props.getWeatherInCity}
            toggleModal={this.toggleModal}
          /> : null}
        <header>
          <button onClick={() => this.toggleModal()}>
            +
            </button>
        </header>
        <div className="appWrap">
          <div className="weatherDataWrap">
            {this.state.isLoading ? <Preloader /> :

              <WeatherData
                isLoading={this.state.isLoading}
                currentGeo={this.props.currentGeo}
                currentWeather={this.props.weatherInCurrentGeo.current}
                dailyWeather={this.props.weatherInCurrentGeo.daily}
                hourlyWeatherData={this.props.weatherInCurrentGeo.hourly}
              />

            }
          </div>
          <div className="weatherWidgets">
            {this.props.weatherInCity.map(item => {
              return <WeatherInCity
                temp={item.temp}
                name={item.name}
                weather={item.weather}
                id={item.id}
                deleteCity={this.props.deleteCity}
              />
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGeo: state.weather.currentGeo,
    weatherInCurrentGeo: state.weather.weatherInCurrentGeo,
    weatherInCity: state.weather.weatherInCity
  }
}

export default connect(mapStateToProps, {
  getWeatherInGeo,
  getWeatherInCity,
  deleteCity
})(App);
