import React, { Component } from 'react';

class ExtendedForecast extends Component{
    state = {
        select: 'none',
        selectedInfo:<div></div>
    }

    setExtendedDay = (e) => {
        this.setState({
            select: e.target.value,
            selectedInfo: <div><tr>
                <th>Temperatura</th>
                <th>Pronostico</th>
                </tr>
                <tr>
                <td>{this.props.info[e.target.value].main.temp}</td>
                <td>{this.props.info[e.target.value].weather[0].description}</td>
            </tr></div>
        });
    };

    render() {
        const extendedList = this.props.info.map((forecast, index) =>
            <option key={index} value={index}>
                Dia:{forecast.dt_txt},
            </option>
        );

        return <tr>
                <select onChange={this.setExtendedDay} value={this.state.select}>
                    {extendedList}
                </select>
                {this.state.selectedInfo}
            </tr>
    };
}

export default ExtendedForecast;