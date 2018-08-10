import React from 'react';
import styled from 'styled-components';

import iconClockWhite from './icon_clock_white.svg';

const StyledWorkingHours = styled.div`
  display: flex;
  padding: 0 45px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 1416px) {
    padding: 0 20px;
  }
  @media (max-width: 1199px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
  background-color: transparent;
  margin: 41px 20px 41px 0;

  @media (max-width: 1416px) {
    margin-right: 10px;
  }
  @media (max-width: 1199px) {
    margin: 0 auto;
  }
`;

const Container = styled.div`
  margin: 24px 0 14px 0;

  @media (max-width: 1199px) {
    margin: 5px 0 0 0;
    text-align: center;
  }
`;

const Text = styled.p`
  margin: 0 0 8px 0;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
`;

const WorkingHours = () => (
  <StyledWorkingHours>
    <Icon src={iconClockWhite} />
    <Container>
      <Text>
        ПН - ЧТ + ВС
        <br />
        10:00 - 22:00
      </Text>
      <Text>
        ПТ - СБ
        <br />
        10:00 - 23:00
      </Text>
    </Container>
  </StyledWorkingHours>
);

export default WorkingHours;
