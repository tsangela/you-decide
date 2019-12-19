import {Button, CenterWrapper, Emoji, PlainSpinner} from '../StyledComponents';
import Cards from '../Cards';
import React from 'react';
import scriptLoader from 'react-async-script-loader';
import {decide} from "../../backend/decide";

const mockCafes = require("../../data/test/nearby-cafes-ubc.json");
const mockRestaurants = require("../../data/test/nearby-restaurants-ubc");

class Places extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.getNearbyPlaces = this.getNearbyPlaces.bind(this);

    this.state = {
      scriptsLoaded: false,
      coords: null,
      results: null
    };
  }

  getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  /**
   * Retrieves the places of the specified type (e.g. restaurant, cafe) within 1000m radius of the user
   * Uses Google Place Search API {@link https://developers.google.com/maps/documentation/javascript/places}
   *
   * @param coords The coordinates of the user's current geolocation
   * @return Promise<Array> An array of the retrieved places
   */
  getNearbyPlaces(coords) {
    const {type} = this.props;
    const google = window.google;

    // Attack to empty node since we're not displaying the map
    let map = new google.maps.Map(document.createElement('div'));
    let service = new google.maps.places.PlacesService(map);

    // Promisify callback
    return new Promise((resolve, reject) => {
      // Grab coordinate components
      let lat = coords.latitude;
      let lng = coords.longitude;
      let here = new google.maps.LatLng(lat, lng);
      let request = {
        location: here,
        radius: '1000',
        type: type
      };

      // Get places matching type near coords
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(type.includes('cafe') ? mockCafes : mockRestaurants); // Mock values for now
          // reject(results); // Renders `No results found!` card
        }
      });
    });
  }

  componentDidUpdate() {
    const {scriptsLoaded, coords, results} = this.state;
    const {isScriptLoaded, isScriptLoadSucceed} = this.props;

    // Check if Google Maps script loaded
    const google = window.google;
    if (!scriptsLoaded && isScriptLoaded && isScriptLoadSucceed && google && google.maps) {
      this.setState({scriptsLoaded: true});
    }

    // Capture user's coordinates
    if (!coords) {
      this.getCurrentPosition()
        .then(res => {
          this.setState({coords: res.coords});
        })
        .catch(err => {
          console.error(err);
        })
    }

    // Capture results
    if (!results && coords && scriptsLoaded) {
      this.getNearbyPlaces(coords)
        .then(res => {
          // console.log(JSON.stringify(res));
          this.setState({results: res});
        })
        .catch(err => {
          console.error(err);
          this.setState({results: err});
        });
    }
  }

  render() {
    const {scriptsLoaded, coords, results} = this.state;

    return scriptsLoaded && coords && Array.isArray(results) ?
      <CenterWrapper margin>
        {results.length > 0 && <DecideButton results={results}/>}
        <Cards results={results} coords={coords}/>
      </CenterWrapper> :
      <PlainSpinner/>;
  }
}

const DecideButton = ({ results }) => (
  <Button
    key="decide"
    onClick={() => decide(results)}
  >
    hit me up <Emoji input={'✨'}/>
  </Button>
);

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_PLACES_API_KEY + '&libraries=places'])(Places);