import React from 'react';
import { Link as A } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  box-shadow: 0 0.0625rem 1rem 0.25rem ${p => p.theme.minBlack}; /* var(--min-black) */
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  color: ${p => p.theme.fullWhite}; /* var(--full-white) */
  background-color: ${p => p.isTransparent ? p.theme.middleWhite : p.theme.primaryColor1}; /* var(--primary-color-1); */
  z-index: 4;
  height: 4rem;
  max-height: 8rem;
  border-bottom: 0.0625rem solid ${p => p.theme.primaryColor2}; /* var(--primary-color-2) */
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 76rem;
  width: 100%;
  align-content: center;

  @media only screen and (max-width: 79.999rem) { /* width < 80rem */
    margin: 0 1rem;
  }
`;

const Brand = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
`;

const Link = styled(A)`
  display: block;
  font-weight: bold;
  padding: 1.3rem 0.5rem;
  padding-left: 0;
  font-size: 1.2rem;
  color: ${p => p.theme.fullWhite}; /* var(--full-white) */
  transition: 0.5s color;

  &:hover {
  color: ${p => p.theme.darkWhite};/* var(--dark-white) */
      text-decoration: none;
  }
`;

const NavbarList = styled.div`
  display: flex;
  align-items: stretch;
`;

const NavbarItem = styled(Link)`
  color: ${p => p.theme.fullWhite}; /* var(--full-white) */
  font-size: 1rem;
  padding: 1.35rem 0.5rem;
  transition: 0.5s background-color;

  &:hover {
      background-color: ${p => p.theme.primaryColor2}; /* var(--primary-color-2) */
      text-decoration: none;
  }
`;

const Wrapper = ({ brandText, isTransparent }) => (
  <Navbar isTransparent={isTransparent}>
    <Container>
      <Brand>
        <Link to="/">{brandText}</Link>
      </Brand>
      <NavbarList>
        <NavbarItem to="/what-is-this">
          <FormattedMessage id="app.menu.what-is-this" />
        </NavbarItem>
        <NavbarItem to="/about">
          <FormattedMessage id="app.menu.about" />
        </NavbarItem>
      </NavbarList>
    </Container>
  </Navbar>
);

Wrapper.displayName = 'Navbar';

export default Wrapper;
