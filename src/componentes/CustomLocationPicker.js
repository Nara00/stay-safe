import React, { Component } from "react";
import ReactDOM from "react-dom";
import LocationPicker from "react-location-picker";

/* Default position */
const defaultPosition = {
  lat: -31.417,
  lng: -64.183
};

class CustomLocationPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "Buenos Aires 30, X5022AAA Córdoba, Argentina",
      position: {
        lat: 0,
        lng: 0
      }
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange({ position, address }) {
    // Set new location
    this.setState({ position, address });
  }

  render() {
    return (
      <div>
        <div>
          <LocationPicker
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "400px" }} />}
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
            zoom={13}
            radius={30}
          />
        </div>
        <p class="direccion">{this.state.address}</p>
      </div>
    );
  }
}


export default CustomLocationPicker;