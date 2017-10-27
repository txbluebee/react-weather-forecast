import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './../components/chart';
import _ from 'lodash';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), temp => temp*9/5 - 459.67);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="red" unit="F"/></td>
                <td><Chart data={pressures} color="green" unit="kPa"/></td>
                <td><Chart data={humidities} color="black" unit="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (F)</th>
                        <th>Pressure (kPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather
    };
}

export default connect(mapStateToProps)(WeatherList);