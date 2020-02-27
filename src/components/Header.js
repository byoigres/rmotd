import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  margin: 0;
  padding: 0;
  z-index: 5;

  @media only screen and (max-width: 62rem) { /** width < 62rem */
    font-size: 2rem;
    margin: 2rem 1rem;
  }
`;

const Wrapper = ({ text }) => (
  <Header>
    {text}
  </Header>
);

Wrapper.displayName = 'Header';

export default Wrapper;
