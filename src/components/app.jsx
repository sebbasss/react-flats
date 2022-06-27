import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import Marker from './marker';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }
  render() {
    return(
      <div>
        <FlatList flats={this.state.flats} selectFlat={this.selectFlat}/>
      <div className='map-container'>
        <GoogleMapReact defaultCenter={this.center()} defaultZoom={12} >
          <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
        </GoogleMapReact>
      </div>
    </div>
    )
  }
}

export default App;
