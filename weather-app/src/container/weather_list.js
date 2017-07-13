import React, {Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>City</tr>
                    <tr>Temperature</tr>
                    <tr>Pressure</tr>
                    <tr>Humidity</tr>
                </thead>
                <tbody>

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