import React from 'react';
import styled from 'styled-components';

import About from './About';
import WorkingHours from './WorkingHours';
import Email from './Email';
import Menu from './Menu';
import Contacts from './Contacts';

const StyledFooter = styled.footer`
  background-color: #3d4252;
  padding-bottom: 32px;
`;

const Divider = styled.div`
  padding-top: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 32px;
`;

const FooterContainer = styled.div`
  display: flex;
`;

const Footer = () => (
  <StyledFooter>
    <div className="container">
      <Divider />
      <FooterContainer>
        <About />
        <WorkingHours />
        <Email />
        <Menu />
        <Contacts />
      </FooterContainer>
    </div>
  </StyledFooter>
);

export default Footer;
