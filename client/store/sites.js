import axios from 'axios';
import { Notifications } from 'expo';

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

export const fetchSites = (self) =>{
  let queryStr;
  if(self) {
    queryStr = '?location=' + self.latitude + '!' + self.longitude;
  }
  return function(dispatch) {
    axios.get(`http://${fsIP}:8080/api/sites` + (queryStr ? queryStr : ''))
    .then(res => res.data)
    .then(sites => {
      dispatch(getSites(sites));
      return sites
    })
    .then((sites) => {
      if(queryStr) {
        sites.forEach((site) => {
          let notification = {
            title: 'There is a historic location nearby!',
            body: site.name,
            ios: {sound: true},
            android: {sound: true, vibrate: true}
          };
          Notifications.presentLocalNotificationAsync(notification);
          Notifications.addListener(() => console.log('tapped', notification.title))
        });
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
