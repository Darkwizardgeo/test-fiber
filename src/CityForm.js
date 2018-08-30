import React, { Component } from 'react';

class CityForm extends Component{
    state = {
        cities: []
    }

    addCity = (e) => {
        e.preventDefault();
        this.props.getWeatherInfoByCityName(e.target.elements.city.value, e.target.elements.country.value)
        .then( (data) => console.log(data));
        this.props.getWeatherForecastByCityName(e.target.elements.city.value, e.target.elements.country.value)
        .then( (data) => console.log(data));
    }

    render() {
        return <div>
            <form onSubmit={this.addCity}>
                <label htmlFor="country">Pais</label>
                <input name="country"></input>
                <label htmlFor="city">Ciudad</label>
                <input name="city"></input>
                <button>Add</button>
            </form>
        </div>
    };
}

export default CityForm;