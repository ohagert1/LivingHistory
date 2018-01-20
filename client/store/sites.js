import axios from 'axios';

//ACTION TYPES
const GET_SITES = 'GET_SITES';

//ACTION CREATORS
export const getSites = sites => {
  return {
  type: GET_SITES,
  sites
  };
};

export const fetchSites = (self) =>{
  console.log('self in thunk creator', self);
  let queryStr;
  if(self) {
    queryStr = '?location=' + self.latitude + '!' + self.longitude;
  }
  return function(dispatch) {
    axios.get('http://172.16.21.80:8080/api/sites' + (queryStr ? queryStr : ''))
    .then(res => res.data)
    .then(sites => {
      dispatch(getSites(sites));
    })
    .catch(err => console.log(err));
  };
};

export default function(state = [], action) {
  switch(action.type) {
    case GET_SITES:
      newState = action.sites;
      return newState;
    default:
      return state;
  }
}
