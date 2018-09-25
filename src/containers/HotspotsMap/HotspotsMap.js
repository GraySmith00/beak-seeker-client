import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './HotspotsMap.css';

class HotspotsMap extends Component {
  // componentDidMount() {
  //   this.renderMap();
  // }

  // renderMap = () => {
  //   const url = `https://maps.googleapis.com/maps/api/js?key=${
  //     process.env.REACT_APP_MAP_KEY
  //   }&callback=initMap`;
  //   loadScript(url);
  //   window.initMap = this.initMap;
  // };

  // initMap = () => {
  //   const map = new window.google.maps.Map(document.getElementById('map'), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8
  //   });
  //   return map;
  // };

  render() {
    const style = {
      width: '100%',
      height: '300px',
      top: '60px',
      left: '-50%'
    };
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={style}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>San Francisco</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

// function loadScript(url) {
//   const index = window.document.getElementsByTagName('script')[0];
//   const script = window.document.createElement('script');
//   script.src = url;
//   script.async = true;
//   script.defer = true;
//   index.parentNode.insertBefore(script, index);
// }

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(HotspotsMap);
