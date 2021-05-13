import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 23.760186,
      lng: 90.36476
    },
    zoom: 11
  };

  render() {
    return (

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCKa0RriqRSclSZAi8B0d7fiRiRlOhR1nA' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
