const baseUrl = 'http://localhost:8080/places';

export const loadPlaces = () => {
  return fetch(baseUrl)
    .then(res => res.json());
}

export const createPlace = (place) => {
  return fetch(baseUrl, {
    metod: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(place)
  }).then(res => place.json())
}
