import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoLocation } from 'react-icons/go';
import { API_KEY } from '../../constants/api';

const key = API_KEY;
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.051121831520526, 
      lng: 10.008143135200116
    },
    zoom: 17
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="googlemap" style={{ height: '300px', width: '400px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          
        >
          <GoLocation size={30} color="red"/>
          <AnyReactComponent
            lat={59.051121831520526}
            lng={10.008143135200116}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;