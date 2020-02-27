import { useSelector, shallowEqual } from 'react-redux';

export default () => useSelector(state => {
  return state.language.locale
}, shallowEqual);
