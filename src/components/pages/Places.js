import {CenterWrapper, LoadingSpinner} from '../StyledComponents';
import Cards from '../Card';
import React from 'react';
import {DecideButton} from '../DecideButton';
import scriptLoader from 'react-async-script-loader';
import {getCurrentPosition, isValidArray} from '../../backend/utils';

// todo - make + replace with empty data
const mockCafes = require("../../data/test/nearby-cafes-ubc.json");
const mockRestaurants = require("../../data/test/nearby-restaurants-ubc");

class Cafes extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.getNearbyPlaces = this.getNearbyPlaces.bind(this);

    this.state = {
      scriptsLoaded: false,
      coords: null,
      results: null
    };
  }

  /**
   * Retrieves the places of the specified type within 500m radius of the user
   * Uses Google Place Search API {@link https://developers.google.com/places/web-service/search}
   *
   * @param coords The coordinates of the user's current geolocation
   * @return Array An array of the retrieved places
   */
  getNearbyPlaces(coords) {
    const {type} = this.props;
    const google = window.google;

    // Attack to empty node since we're not displaying the map
    let map = new google.maps.Map(document.createElement('div'));
    let service = new google.maps.places.PlacesService(map);

    // Promisify callback
    let promise = new Promise((resolve, reject) => {
      // Grab coordinate components
      let lat = coords.latitude;
      let lng = coords.longitude;
      let here = new google.maps.LatLng(lat, lng);
      let request = {
        location: here,
        radius: '500',
        type: [type]
      };

      // Get places matching type near coords
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(type === 'cafe' ? mockCafes : mockRestaurants);
          // reject(new Error(results));
        }
      });
    });

    // Handle promise
    promise
      .then(results => {
        console.log(JSON.stringify(results));
        this.setState({results});
      })
      .catch(err => {
        console.error(err);
        this.setState({results: err});
      });
  }

  componentDidUpdate() {
    const {scriptsLoaded, coords, results} = this.state;
    const {isScriptLoaded, isScriptLoadSucceed} = this.props;
    console.log(this.state);

    // Check if Google Maps script loaded
    const google = window.google;
    if (!scriptsLoaded && isScriptLoaded && isScriptLoadSucceed && google && google.maps) {
      this.setState({scriptsLoaded: true});
    }

    // Capture user's coordinates
    if (!coords) {
      getCurrentPosition()
        .then(res => {
          this.setState({coords: res.coords});
        })
        .catch(err => {
          console.error(err);
        })
    }

    // Load results
    if (!results && coords && scriptsLoaded) {
      this.getNearbyPlaces(coords);
    }
  }

  render() {
    const {scriptsLoaded, coords, results} = this.state;

    return scriptsLoaded && coords && isValidArray(results) ?
      <CenterWrapper margin>
        <DecideButton results={results}/>
        <Cards results={results} coords={coords}/>
      </CenterWrapper> : <LoadingSpinner/>;
  }
}

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_PLACES_API_KEY + '&libraries=places'])(Cafes);