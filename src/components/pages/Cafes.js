import {CenterWrapper, LoadingSpinner} from '../StyledComponents';
import Cards from '../Card';
import React from 'react';
import {DecideButton} from '../DecideButton';
import {getNearbyPlaces} from '../../backend/places';
import scriptLoader from 'react-async-script-loader';
import {getCurrentPosition, isValidArray} from '../../backend/utils';

class Cafes extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      scriptsLoaded: false,
      coords: null
    };
  }

  componentDidUpdate() {
    const {isScriptLoaded, isScriptLoadSucceed} = this.props;
    const google = window.google;
    if (!this.state.scriptsLoaded && isScriptLoaded && isScriptLoadSucceed && google && google.maps) {
      this.setState({scriptsLoaded: true});
    }
    if (!this.state.coords) {
      getCurrentPosition()
        .then(res => {
          this.setState({coords: res.coords})
        })
        .catch(err => {
          console.error(err);
        })
    }
  }

  render() {
    const {scriptsLoaded, coords} = this.state;

    if (scriptsLoaded && coords) {
      let results = getNearbyPlaces('cafe', coords);
      return isValidArray(results) &&
        <CenterWrapper margin>
          <DecideButton results={results}/>
          <Cards results={results} coords={coords}/>
        </CenterWrapper>
    }

    return <LoadingSpinner/>
  }
}

export default scriptLoader(['https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_PLACES_API_KEY + '&libraries=places'])(Cafes);