import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart";

class WeatherList extends Component {

    renderWeather(data) {

        const name = data.city.name;
        const temps = data.list.map(entry => entry.main.temp);
        const pressures = data.list.map(entry => entry.main.pressure);
        const humidities = data.list.map(entry => entry.main.humidity);

        return (
            <tr key={name}>
                <td>
                    { name }
                </td>
                <td>
                    <Chart data={temps} color="blue" units="K" />
                </td>
                <td>
                    <Chart data={pressures} color="orange" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="green" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        )
    }

}

// function mapStateToProps(state) {
//     return {
//         weather: state.weather
//     }
// }

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);