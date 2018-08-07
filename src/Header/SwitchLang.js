import React from 'react';
import styled from 'styled-components';

const StyledSwitchLang = styled.div``;

const Button = styled.button`
  width: 36px;
  height: 36px;
  padding: 0;
  text-align: center;
  background-color: ${({ active }) => (active ? '#3D4252' : 'transparent')};
  color: ${({ active }) => (active ? '#FFFFFF' : '#3D4252')};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
`;

const SwitchLang = () => (
  <StyledSwitchLang>
    <Button active>
РУС
    </Button>
    <Button>
ENG
    </Button>
  </StyledSwitchLang>
);

export default SwitchLang;
