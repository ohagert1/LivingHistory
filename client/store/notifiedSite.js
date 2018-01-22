//ACTION TYPES
const SET_SITE = 'SET_SITE';

//ACTION CREATORS
export const setSite = location => {
  return {
  type: SET_SITE,
  location
  };
};

export default function(state = {}, action) {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case SET_SITE:
      newState = action.location;
      return newState;
    default:
      return state;
  }
}
