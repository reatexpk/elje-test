import React from 'react';
import styled from 'styled-components';

import './fonts/fonts.css';
import Header from './Header/index';
import Navigation from './Navigation/index';
import CoverImage from './CoverImage/index';

const StyledApp = styled.div`
  box-sizing: border-box;
  font-family: Navigo;
`;

const App = () => (
  <StyledApp>
    <Header />
    <Navigation />
    <CoverImage />
  </StyledApp>
);

export default App;
