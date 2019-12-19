export const isValidArray = array => Array.isArray(array) && array.length > 0;

export const isNonEmptyObject = object => object && Object.keys(object).length > 0;

export const roundToOneDecimal = n => n && Math.round(n * 10) / 10;

const queryReducer = (accumulator, curr) => accumulator + '+' + curr.replace(/ /gi, '+');

const getEncodedQuery = (...queries) => queries.reduce(queryReducer, '');

export const getMapUrl = (name, address) => name && address ? 'https://www.google.ca/maps/search/' + getEncodedQuery(name, address) : '#';

export const getDirectionsUrl = (coords, name, address) => name && address ? 'https://www.google.ca/maps/dir/' + coords.latitude + ',' + coords.longitude  + '/' + getEncodedQuery(name, address) : '#';

export function getSymbols(value, symbol) {
  return !value ? 'N/A' : symbol.repeat(value);
}

export function promisify(callback, options = {}) {
  return new Promise((resolve, reject) => {
    callback(resolve, reject, options);
  });
}