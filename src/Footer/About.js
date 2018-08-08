import React from 'react';
import styled from 'styled-components';

// import logoWhite from './logotype_white.svg';

const AboutWrapper = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.h2`
  margin: 15px 0 16px 0;
  background-color: transparent;
  color: #fff;
  width: 167px;
  height: 22px;
  text-transform: uppercase;
`;

const Text = styled.p`
  padding: 0;
  margin: 16px 0;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
`;

const Rules = styled.a`
  margin-bottom: 1px;
  color: #a8f0de;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-decoration: none;
`;

const About = () => (
  <AboutWrapper>
    <Logo>
Авиапарк
    </Logo>
    <Text>
Наш адрес: г. Москва, ул. Ходынский бульвар, д.4 Тел.: +7 (495) 644-45-44
    </Text>
    <Rules href="rules">
Правила ТЦ АВИАПАРК
    </Rules>
  </AboutWrapper>
);

export default About;
