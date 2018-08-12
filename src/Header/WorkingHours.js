import React from 'react';
import styled from 'styled-components';
import iconClockDark from './icon_clock_dark.svg';

const StyledWorkingHours = styled.div`
  display: flex;
  margin-left: 48px;
`;

const StyledIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const Container = styled.div`
  margin-left: 15px;
`;

const Text = styled.p`
  margin: 0;
  color: #3d4252;
  font-family: Navigo;
  font-size: 11px;
  font-weight: 700;
  line-height: 13px;
`;

const Link = styled.a`
  margin: 0;
  color: #3d4252;
  font-family: Navigo;
  font-size: 11px;
  font-weight: 700;
`;

const WorkingHours = () => (
  <StyledWorkingHours>
    <StyledIcon src={iconClockDark} alt="iconClockDark" />
    <Container>
      <Text>
СЕГОДНЯ ОТКРЫТ ДО 22:00
      </Text>
      <Link href="localhost">
ВРЕМЯ РАБОТЫ
      </Link>
    </Container>
  </StyledWorkingHours>
);

export default WorkingHours;
