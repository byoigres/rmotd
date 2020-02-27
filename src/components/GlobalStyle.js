import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      font-size: ${p => p.theme.baseFontSize};
  }

  body {
      color: ${p => p.theme.baseColor};
      font-family: ${p => p.theme.baseFontFamily}, Arial;
      font-size: ${p => p.theme.baseFontSize};
      & > div {
          height: 100%;
          width: 100%;
      }
  }

  blockquote {
      display: block;
      text-align: center;
      font-style: italic;
      font-size: 2.3rem;
      font-family: "Slabo 27px";
      padding: 0 5rem;

      & p {
          font-size: 2.3rem!important;
          text-align: center!important;
      }
  }

  p {
      margin: 0.3rem;
      font-size: 1.3rem;
      line-height: 2rem;
  }

  p + p {
      margin-top: 1rem;
  }

  a {
      color: ${p => p.theme.primaryColor1};
      text-decoration: none;

      &:hover {
          color: ${p => p.theme.primaryColor2};
          text-decoration: underline;
          text-decoration-style: dashed;
      }
  }

  @media only screen and (max-width: 79.999rem) { /* width < 80rem */
      h1 {
          font-size: 1.8em;
          text-align: center;
      }

      blockquote {
          padding: 0;
          margin: 2rem 0;
          font-size: 2rem;
      }
  }
`;

export default GlobalStyle;