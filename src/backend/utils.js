export const isValidArray = array => Array.isArray(array) && array.length > 0;

export const isNonEmptyObject = object => object && Object.keys(object).length > 0;

export const roundToOneDecimal = n => n && Math.round(n * 10) / 10;

const queryReducer = (accumulator, curr) => accumulator + '+' + curr.replace(/ /gi, '+');

const getEncodedQuery = (...queries) => queries.reduce(queryReducer, '');

export const getMapUrl = (name, address) => name && address ? 'https://www.google.ca/maps/search/' + getEncodedQuery(name, address) : '#';

export const getDirectionsUrl = (coords, name, address) => name && address ? 'https://www.google.ca/maps/dir/' + coords.latitude + ',' + coords.longitude  + '/' + getEncodedQuery(name, address) : '#';

export function getSymbols(value, symbol) {
  if (!value) {
    return 'N/A';
  }
  let symbols = '';
  for (let i = 1; i <= value; i++) {
    symbols += symbol;
  }
  return symbols;
}

export function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

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
 * @param coords the user's current geographic coordinates
 * @return Promise<number> the distance to the given location from the user's current location in km
 */
export const calculateDistance = (location, coords) => {
  // Convert coordinates to radians
  const {latitude, longitude} = coords;
  const toRad = Math.PI / 180;
  let latDiff = (location.lat - latitude) * toRad;  // Δφ
  let lngDiff = (location.lng - longitude) * toRad; // Δλ

  // Apply Haversine formula
  let a = sin2(latDiff / 2) + (Math.cos(latitude) * Math.cos(location.lat) * sin2(lngDiff / 2));
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = 6371 * c;

  // Round to 2 decimal places
  return Math.round(d * 100) / 100;
};

function sin2(value) {
  const sin = Math.sin(value);
  return sin * sin;
}