import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 80px;
  height: 34px;
  background-color: transparent;
  border: 2px solid #656c81;
  border-radius: 17px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  text-transform: uppercase;
  cursor: pointer;
`;

const MapButton = () => (
  <StyledButton>
Карта
  </StyledButton>
);

export default MapButton;
