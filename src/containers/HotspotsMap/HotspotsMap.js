import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import './HotspotsMap.css';

class HotspotsMap extends Component {
  constructor() {
    super();
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick = (props, marker, e) => {
    console.log(marker);
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

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
        onClick={this.onMarkerClick}
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
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <h5>{this.state.selectedPlace.name}</h5>
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

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAP_KEY
})(connect(mapStateToProps)(HotspotsMap));
