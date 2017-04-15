import * as constants from '../constants';

function calculateTime() {
  const totalMinutes = 1440;
  const currentDate = new Date();
  const elapsedMinutes = (currentDate.getHours() * 60) + currentDate.getMinutes();
  const remainingSeconds = currentDate.getSeconds();
  const remainingMinutes = totalMinutes - elapsedMinutes;

  return {
    remainingMinutes,
    remainingSeconds,
  };
}

const initialState = calculateTime();

export default (state = initialState, action) => {
  if (action.type === constants.UPDATE_TIME) {
    return Object.assign({}, state, calculateTime());
  }

  return state;
};
