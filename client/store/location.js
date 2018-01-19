//ACTION TYPES
const GET_LOCATION = 'GET_LOCATION';

//ACTION CREATORS
export const getLocation = location => ({type: GET_LOCATION, location});

export default function(state = {}, action) {

  switch(action.type) {
    case GET_LOCATION:
      return {
        latitude: location.latitude,
        longitude: location.longitude
      };
    default:
      return state;
  }
}
