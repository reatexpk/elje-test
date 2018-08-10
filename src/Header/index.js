import React from 'react';
import styled from 'styled-components';

import SwitchLang from './SwitchLang';
import WorkingHours from './WorkingHours';
import logo from './logotype_dark.svg';
import Socials from './Socials';
import triangle from './triangle.svg';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 13px 0;
`;

const Container = styled.div`
  display: flex;
`;

const Logo = styled.img`
  margin: 19px 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Arrow = styled.img`
  position: absolute;
  top: 107%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Header = () => (
  <div className="container">
    <HeaderWrapper>
      <Container>
        <SwitchLang />
        <WorkingHours />
      </Container>
      <Logo src={logo} />
      <Socials />
      <Arrow src={triangle} />
    </HeaderWrapper>
  </div>
);

export default Header;
