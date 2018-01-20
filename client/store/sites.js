import axios from 'axios';
import { Notifications } from 'expo';
import filterSites from './utils';

//ACTION TYPES
const GET_SITES = 'GET_SITES';
const homeIP = '192.168.50.250';
const fsIP = '172.16.21.80';

//ACTION CREATORS
export const getSites = sites => {
  return {
  type: GET_SITES,
  sites
  };
};

export const fetchSites = (self, currentSites) =>{
  let queryStr;
  if(self) {
    queryStr = '?location=' + self.latitude + '!' + self.longitude;
  }
  return function(dispatch) {
    axios.get(`http://${fsIP}:8080/api/sites` + (queryStr ? queryStr : ''))
    .then(res => res.data)
    .then((sites) => {
      if(queryStr) {
        let newSites = filterSites(sites, currentSites);
        newSites.forEach((site) => {
          let notification = {
            title: 'There is a historic location nearby!',
            body: site.name,
            ios: {sound: true},
            android: {sound: true, vibrate: true}
          };
          Notifications.presentLocalNotificationAsync(notification);
          let EventSubscription = Notifications.addListener((list) => {
          })
        });
        console.log('newSites', newSites);
        dispatch(getSites(newSites));
      } else {
        dispatch(getSites(sites));
      }
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
