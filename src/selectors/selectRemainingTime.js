import { useSelector, shallowEqual } from 'react-redux';

export default () => useSelector(
  ({
    time: {
      remainingMinutes,
      remainingSeconds,
    },
  }) => ({
    remainingMinutes,
    remainingSeconds
  }),
  shallowEqual
);
