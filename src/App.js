import React from 'react';
import styled from 'styled-components';

import './fonts/fonts.css';
import Header from './Header/index';
import Navigation from './Navigation/index';
import CoverImage from './CoverImage/index';
import About from './About/index';

const StyledApp = styled.div`
  box-sizing: border-box;
  font-family: Navigo;
`;

const Main = styled.main``;

const App = () => (
  <StyledApp>
    <Header />
    <Navigation />
    <Main>
      <CoverImage />
      <About />
    </Main>
  </StyledApp>
);

export default App;
