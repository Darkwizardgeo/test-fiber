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
    return await fetch('http://api.openweathermap.org/data/2.5/weather?q='+cityName+','+countryCode+'&APPID='+API_KEY)
    .then( (response) => {
      return response.json();
    })
  }

  getWeatherForecastByCityName = async (cityName, countryCode) => {
    return await fetch('http://api.openweathermap.org/data/2.5/forecast?q='+cityName+','+countryCode+'&APPID='+API_KEY)
    .then( (response) => {
      return response.json();
    })
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
    return <div className="container-fluid">
      <div className="jumbotron">
        <h1>{this.props.name}</h1>
      </div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Ciudad/Pais:</strong> {this.state.ciudadName},{this.state.pais}</h3>
        </div>
        <div className="panel-body">
          <div className="col-sm-6">
            Temperatura: {this.state.temperatura}
          </div>
          <div className="col-sm-6">
            Pronostico: {this.state.pronostico}
          </div>
          <div className="container-fluid">
            <ExtendedForecast info={this.state.extended}/>
          </div>
        </div>
      </div>
      <CityForm 
        getWeatherInfoByCityName={this.getWeatherInfoByCityName} 
        getWeatherForecastByCityName={this.getWeatherForecastByCityName}
        />
    </div>
  }
}

export default Main;
