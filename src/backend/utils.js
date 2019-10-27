export const isValidArray = array => Array.isArray(array) && array.length > 0;

export const isNonEmptyObject = object => object && Object.keys(object).length > 0;

export const roundToOneDecimal = n => Math.round(n * 10) / 10;

export const getMapUrl = address => address ? 'https://www.google.ca/maps/search/' + address.replace(/ /gi, '+') : '#';

export function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

export const getDistance = location => {
  let distance = NaN;
  calculateDistance(location)
    .then(res => {
      distance = res;
    })
    .catch(err => {
      console.error(err);
    });
  return distance;
};

/**
 * Uses the Haversine formula to calculate the distance between two geographic coordinates.
 *
 * Formula:
 *    a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
 *    c = 2 ⋅ atan2( √a, √(1−a) )
 *    d = R ⋅ c
 *    where φ is latitude, λ is longitude, R is earth’s radius
 *
 * @param location the destination coordinates
 * @return Promise<number> the distance to the given location from the user's current location
 */
export const calculateDistance = location =>
  // Get the user's current geographic coordinates
  getCurrentPosition()
    .then(res => {
      const { coords } = res;
      const { latitude, longitude } = coords;

      // Convert coordinates to radians
      const toRad = Math.PI/180;
      let latDiff = (location.lat - latitude) * toRad;  // Δφ
      let lngDiff = (location.lng - longitude) * toRad; // Δλ

      // Apply Haversine formula
      let a = sin2(latDiff/2) + (Math.cos(latitude) * Math.cos(location.lat) * sin2(lngDiff/2));
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      let d = 6371 * c;

      // Round to 2 decimal places
      return Math.round(d * 100) / 100;
    })
    .catch(err => {
      console.error(err);
    });

function sin2(value) {
  const sin = Math.sin(value);
  return sin * sin;
}