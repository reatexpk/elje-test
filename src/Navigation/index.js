import React from 'react';
import styled from 'styled-components';

import SearchButton from './SearchButton';
import MapButton from './MapButton';
import Menu from './Menu';
import AccountButton from './AccountButton';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;
  background-color: #3d4252;
`;

const Navigation = () => (
  <StyledNav>
    <SearchButton />
    <MapButton />
    <Menu />
    <AccountButton />
  </StyledNav>
);

export default Navigation;
