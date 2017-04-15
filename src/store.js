import { createStore, compose } from 'redux';
import reducers from './reducers';

const middlewaresCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore);

const configureStore = initialState => middlewaresCreateStore(
  reducers(initialState),
  initialState,
);

export default configureStore;
