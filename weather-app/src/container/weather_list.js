import React, {Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    renderWeather(data) {

        const name = data.city.name;

        return (
            <tr key={name}>
                <td>
                    { name }
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