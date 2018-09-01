import React, { Component } from 'react';
import CitiesContainer from './CitiesContainer';

class CityForm extends Component{
    state = {
        cities: []
    }

    addCity = async (e) => {
        e.preventDefault();
        e.persist();

        const country = e.target.elements.country.value;
        const city = e.target.elements.city.value;

        const weather = await this.props.getWeatherInfoByCityName(city, country);

        const extended = await this.props.getWeatherForecastByCityName(city, country);

        if(this.state.cities.length < 5){
            this.setState(prevState => ({
                cities: [...prevState.cities, {
                    countryCode: country,
                    cityName: city,
                    forecast: weather,
                    extended: extended
                }]
              }));
        }
        else{
            
            this.setState(prevState => ({
                ...prevState.cities.shift(),
                cities: [...prevState.cities, {
                    countryCode: country,
                    cityName: city,
                    forecast: weather,
                    extended: extended
                }]
              }));
        }
    }

    render() {
        return <div>
            <form onSubmit={this.addCity}>
                <label htmlFor="country">Pais</label>
                <input name="country" placeholder="Codigo de Pais ej: AR"></input>
                <label htmlFor="city">Ciudad</label>
                <input name="city" placeholder="Nombre de ciudad"></input>
                <button>Add</button>
            </form>
            <CitiesContainer cities={this.state.cities}/>
        </div>
    };
}

export default CityForm;