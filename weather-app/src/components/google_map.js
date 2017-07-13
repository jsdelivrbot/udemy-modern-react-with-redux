import React, {Component} from 'react';

class GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        return (
            // this.refs.map <- gives a reference to the particular element
            <div ref="map" />
        );
    }

}

export default GoogleMap;