import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 80px;
  height: 34px;
  margin-left: 84px;
  background-color: transparent;
  border: 2px solid #656c81;
  border-radius: 17px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 1415px) {
    margin-left: 70px;
  }
  @media (max-width: 1199px) {
    margin: 0 10px;
  }
`;

const MapButton = () => (
  <StyledButton>
Карта
  </StyledButton>
);

export default MapButton;
