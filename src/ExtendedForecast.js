import React, { Component } from 'react';

class ExtendedForecast extends Component{
    state = {
        select: 'none',
        selectedInfo:<div></div>
    }

    setExtendedDay = (e) => {
        this.setState({
            select: e.target.value,
            selectedInfo: <div className="panel-body">
                    <div className="col-sm-6">
                        Temperatura: {this.props.info[e.target.value].main.temp}
                    </div>
                    <div className="col-sm-6">
                        Pronostico: {this.props.info[e.target.value].weather[0].description}
                    </div>
                </div>
        });
    };

    render() {
        const extendedList = this.props.info.map((forecast, index) =>
            <option key={index} value={index}>
                Dia:{forecast.dt_txt},
            </option>
        );

        return <div className="panel panel-default">
                <select onChange={this.setExtendedDay} value={this.state.select}>
                    {extendedList}
                </select>
                {this.state.selectedInfo}
            </div>
    };
}

export default ExtendedForecast;