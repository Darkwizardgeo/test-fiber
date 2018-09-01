import React, {Component} from 'react';
import ExtendedForecast from './ExtendedForecast';

class CitiesContainer extends Component {

    render(){
        console.log(this.props.cities)
        const citylist = this.props.cities.map( (content, index) => {
            return <li key={index}>
                <div>
                    <p><strong>Ciudad:</strong>{content.cityName}</p>
                    <p><strong>Pais:</strong>{content.countryCode}</p>
                    <h5>Clima Actual:</h5>
                    <p><strong>Temperatura:</strong>{content.forecast.main.temp}</p>
                    <p><strong>Descripcion:</strong>{content.forecast.weather[0].description}</p>

                </div>
                <ExtendedForecast info={content.extended.list}/>
            </li>
        })
        return <ul>
                {citylist}
            </ul>
    }

}

export default CitiesContainer;