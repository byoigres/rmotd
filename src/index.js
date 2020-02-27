import React from "react";
import ReactDOM from "react-dom";
import configureStore, { history } from './resources/store';
import App from './containers/App';

const store = configureStore({});

import messages from './resources/messages';

const mountNode = document.getElementById("app");

ReactDOM.render(
  <App
    store={store}
    history={history}
    messages={messages}
  />,
  mountNode
);
