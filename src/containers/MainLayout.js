import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LanguageSelector from '../components/LanguageSelector';
import { changeLanguage } from '../actions/language';
import * as constants from '../constants';

const languages = [
  {
    id: constants.LANGUAGE_SPANISH,
    locale: 'es',
    text: <FormattedMessage id="language.spanish" />,
  },
  {
    id: constants.LANGUAGE_ENGLISH,
    locale: 'en',
    text: <FormattedMessage id="language.english" />,
  },
];

const MainLayout = styled.div`
  margin-top: 5rem;
  padding-bottom: 6rem;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 80rem) { /* width < 80rem (OK) */
    margin: 4rem 0 0 0; /* margin: 4rem 1rem 0 1rem; */
  }
`;

const Container = styled.div`
  flex: 1 0 auto;
  max-width: 76rem;
  width: 100%;

  & p {
    text-align: justify;
  }

  @media only screen and (max-width: 79.999rem) { /* width < 80rem */
    margin: 0 1rem;
    width: auto;
  }
`;

const Wrapper = ({ children }) => {
  const dispatch = useDispatch();
  const onChangeLanguage = (lang, locale) => {
    dispatch(changeLanguage(lang, locale));
  };

  return (
    <MainLayout>
      <Navbar brandText={<FormattedMessage id="app.brand-text" />} />
      <Container>
        {children}
      </Container>
      <Footer>
        <LanguageSelector
          languages={languages}
          onChangeLanguage={onChangeLanguage}
        />
      </Footer>
    </MainLayout>
  );
}

// export default connect(state => ({
//   selectedLanguage: state.language.selected,
// }), {
//   changeLanguage: _changeLanguage,
// })(MainLayout);

export default Wrapper;
