import React, { Component } from 'react';
import FlatList from './flat_list';
import flats from '../../data/flats';
import googleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats} selectFlat={this.selectFlat}/>
      </div>
      <div className='map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD2TYYUMfsDSaEY576cRd1dUd0HSMhnq98" }}
        >
          <AnyReactComponent
            lat={this.state.selectedFlat.lat}
            lng={this.state.selectedFlat.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;
