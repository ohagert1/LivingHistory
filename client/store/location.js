//ACTION TYPES
const GET_LOCATION = 'GET_LOCATION';

//ACTION CREATORS
export const getLocation = location => {
  return {
  type: GET_LOCATION,
  location
  };
};

export default function(state = {}, action) {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case GET_LOCATION:
      newState = action.location;
      return newState;
    default:
      return state;
  }
}
