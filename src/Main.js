import React, { Component } from 'react';
import ExtendedForecast from './ExtendedForecast'
import './css/Main.css';
import CityForm from './CityForm';

const API_KEY='c577ca33eb629f35897bcbc6be50597b';

class Main extends Component {

  state = {
    temperatura: undefined,
    pronostico: undefined,
    ciudadName: undefined,
    pais: undefined,
    extended: []
  }

  getWeatherInfoByCityName = async (cityName, countryCode) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+','+countryCode+'&APPID='+API_KEY)
    .then( (response) => {
      return response.json();
    })
    .then( (data) => data )
  }

  getWeatherForecastByCityName = async (cityName, countryCode) => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+cityName+','+countryCode+'&APPID='+API_KEY)
    .then( (response) => {
      return response.json();
    })
    .then( (data) => data )
  }

  getWeatherInfo = async (e) => {
    fetch('http://api.openweathermap.org/data/2.5/weather?id=3433955&APPID='+API_KEY)
    .then( (response) => {
      return response.json();
    })
    .then( (jsonData) => {
      this.setState({
        temperatura: jsonData.main.temp,
        pronostico: jsonData.weather[0].description,
        ciudadName: jsonData.name,
        pais: jsonData.sys.country
      });
    });
  };

  getForecastInfo = async (e) => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=3433955&APPID='+API_KEY)
    .then( (response) => {
      return response.json();
    })
    .then( (dataJson) => {
      this.setState({
        extended: dataJson.list
      });
    });
  };

  getLocalIp = async (e) => {
    fetch('http://localhost:3000/ip/1.2.3.4')
      .then( (data) => {
        return data;
      })
      .then( (data) => {
        console.log(data);
      });
  };

  componentWillMount() {
    this.getWeatherInfo();
    this.getForecastInfo();
    this.getLocalIp();
  }

  render() {
    return <div>
      <h1>{this.props.name}</h1>
      <table className="main-widget">
        <tbody>
          <tr>
            <th>Ciudad/Pais</th>
            <th>Temperatura</th>
            <th>Pronostico</th>
          </tr>
          <tr>
            <td>{this.state.ciudadName},{this.state.pais}</td>
            <td>{this.state.temperatura}</td>
            <td>{this.state.pronostico}</td>
          </tr>
          <tr>
            <th>Extendido</th>
            <div className="extended-container">
              <ExtendedForecast info={this.state.extended}/>
            </div>
          </tr>
        </tbody>
      </table>
      <CityForm 
        getWeatherInfoByCityName={this.getWeatherInfoByCityName} 
        getWeatherForecastByCityName={this.getWeatherForecastByCityName}
        />
    </div>
  }
}

export default Main;
