import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider as StoreProvider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConnectedRouter as RouterProvider } from 'connected-react-router';
import Routes from '../components/Routes';
import GlobalStyle from '../components/GlobalStyle';
import theme from '../resources/theme';
import selectLanguage from '../selectors/selectLanguage'

const IntlContainer = ({ messages }) => (
  <IntlProvider locale="en" messages={messages[selectLanguage()]}>
    <Routes />
  </IntlProvider>
);

const App = ({ store, history, messages }) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <RouterProvider history={history}>
          <IntlContainer messages={messages} />
        </RouterProvider>
      </StoreProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
