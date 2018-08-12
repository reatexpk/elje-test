import React from 'react';
import styled from 'styled-components';

import SearchButton from './SearchButton';
import MapButton from './MapButton';
import Menu from './Menu';
import AccountButton from './AccountButton';

const NavWrapper = styled.nav`
  background-color: #3d4252;
`;

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;
`;

const Container = styled.div`
  display: flex;
`;

const Navigation = () => (
  <NavWrapper>
    <div className="container">
      <StyledNav>
        <Container>
          <SearchButton />
          <MapButton />
        </Container>
        <Menu />
        <AccountButton />
      </StyledNav>
    </div>
  </NavWrapper>
);

export default Navigation;
