import React from 'react';
import styled from 'styled-components';

import './fonts/fonts.css';
import Header from './Header/index';

const StyledApp = styled.div`
  box-sizing: border-box;
  font-family: Navigo;
`;

const App = () => (
  <StyledApp>
    <Header />
  </StyledApp>
);

export default App;
