import React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import styled from 'styled-components';

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  background-color: ${p => p.theme.darkBlack}; /* var(--dark-black) */
  color: ${p => p.theme.darkWhite}; /* var(--dark-white) */
  box-shadow: 0.125rem -0.0625rem 1rem 0.25rem ${p => p.theme.minBlack}; /* var(--min-black) */

  @media only screen and (max-width: 80rem) { /* width < 80rem */
    height: 6rem;
  }
`;

const Container = styled.div`
  height: 8rem;
  max-width: 76rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 80rem) { /* width < 80rem */
    height: 6rem;
  }
`;

const Wrapper = ({ children }) => (
  <Footer>
    <Container>
      <FormattedHTMLMessage id="app.footer.text" />
      {children}
    </Container>
  </Footer>
);

Wrapper.displayName = 'Footer';

export default Wrapper;
