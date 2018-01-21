//ACTION TYPES
const START_TEST = 'START_TEST';
const STOP_TEST = 'STOP_TEST';

//ACTION CREATORS
export const startTest = (location) => {
  return {
  type: START_TEST
  };
};

export const stopTest = () => {
  return {
  type: STOP_TEST
  };
};

export default function(state = false, action) {
  switch(action.type) {
    case START_TEST:
      return true;
    case STOP_TEST:
      return false;
    default:
      return state;
  }
}
