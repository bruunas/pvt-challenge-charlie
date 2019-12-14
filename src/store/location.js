// Actions 
const SET_LOCATION = 'SET_LOCATION'
const SET_LATLONG = 'SET_LATLONG'

export default function reducer (
  state = {
    location: '',
    latlong: []
  }, action = {}) {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.location
      }

    case SET_LATLONG:
      return {
        ...state,
        latlong: action.latlong
      }

    default:
      return state
  }
}

// Action Creators
export function setLocation (location) {
  return { type: SET_LOCATION, location}
}

export function setLatLong (latlong) {
  return { type: SET_LATLONG, latlong}
}