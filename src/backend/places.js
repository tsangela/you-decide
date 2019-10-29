const emptyNode = document.createElement('div');
const mockDetails = require('../data/test/details.json');
const mockRestaurants = require("../data/test/nearby-restaurants-ubc.json");
const mockCafes = require("../data/test/nearby-cafes-ubc.json");

/**
 * Retrieves the places of the specified type within 500m radius of the user
 * Uses Google Place Search API {@link https://developers.google.com/places/web-service/search}
 *
 * @param type The type of food place to look for, e.g. restaurant, cafe
 *             See {@link https://developers.google.com/places/web-service/supported_types}
 * @param coords The coordinates of the user's current geolocation
 * @return Array An array of the retrieved places
 */
export function getNearbyPlaces(type, coords) {
  if (!coords) {
    console.error('Invalid geolocation coordinates', coords);
    return null;
  }

  console.log('in getNearbyPlaces', coords);
  const google = window.google;

  let lat = coords.latitude;
  let lng = coords.longitude;
  let here = new google.maps.LatLng(lat, lng);
  let request = {
    location: here,
    radius: '500',
    type: [type]
  };

  let map = new google.maps.Map(emptyNode);
  let service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(JSON.stringify(results));
      return results;
    }
  });

  // todo - gets here prematurely because api call is async?
  return mockCafes;
}

/**
 * Retrieves place details mapped to the given place ID
 * Uses Google Place Details API {@link https://developers.google.com/places/web-service/details}
 *
 * @param id The Google Place ID
 */
export function getPlaceDetails(id) {
  const google = window.google;

  if (id) {
    let request = {
      placeId: id,
      fields: ['place_id', 'name', 'formatted_address', 'price_level', 'rating']
    };
    console.log(JSON.stringify(request));

    let map = new google.maps.Map(emptyNode);
    let service = new google.maps.places.PlacesService(map);

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(JSON.stringify(place));
        return place;
      }
    });
  } else {
    console.error('Invalid place id! ', id);
  }

  return mockDetails;
}