import React from 'react';
import styled from 'styled-components';

const StyledWorkingHours = styled.div`
  display: flex;
  padding-right: 45px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const Icon = styled.img`
  width: 36px;
  height: 36px;
  background-color: transparent;
  margin: 41px 20px 41px 44px;
`;

const Container = styled.div`
  margin: 24px 0 14px 0;
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
    <Icon />
    <Container>
      <Text>
        ПН - ЧТ + ВС
        <br />
        {' '}
10:00 - 22:00
      </Text>
      <Text>
        ПТ - СБ
        <br />
        {' '}
10:00 - 23:00
      </Text>
    </Container>
  </StyledWorkingHours>
);

export default WorkingHours;
