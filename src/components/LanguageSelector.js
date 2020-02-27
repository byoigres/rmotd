import React from 'react';
import styled from 'styled-components';

const LanguageSelector = styled.div`
  margin: 1rem;
`;

const Language = styled.span`
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 0.5rem;

    &:before {
      margin-right: 0.5rem;
      content: '|'
    }
  }
`;

const Wrapper = ({ languages, onChangeLanguage }) => (
  <LanguageSelector>
    {
      languages.map(lang => (
        <Language
          key={lang.id}
          onClick={() => onChangeLanguage(lang.id, lang.locale)}
        >
          {lang.text}
        </Language>
      ))
    }
  </LanguageSelector>
);

Wrapper.displayName = 'LanguageSelector';

export default Wrapper;
