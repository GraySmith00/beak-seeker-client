import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import './HotspotsMap.css';

class HotspotsMap extends Component {
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

    const { location, google, hotspots } = this.props;

    const displayMarkers = hotspots.map((hotspot, i) => (
      <Marker
        key={`${hotspot.locId}-${i}`}
        title={'The marker`s title will appear as a tooltip.'}
        name={hotspot.locName}
        position={{ lat: hotspot.lat, lng: hotspot.lng }}
      />
    ));

    return (
      <div>
        {location && (
          <Map
            google={google}
            zoom={11}
            style={style}
            initialCenter={{
              lat: location.latitude,
              lng: location.longitude
            }}
          >
            {displayMarkers}
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>San Francisco</h1>
              </div>
            </InfoWindow>
          </Map>
        )}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  hotspots: state.hotspots,
  location: state.location
});

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
})(connect(mapStateToProps)(HotspotsMap));
