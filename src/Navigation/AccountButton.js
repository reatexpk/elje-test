import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 131px;
  height: 34px;
  padding-left: 18px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid #656c81;
  border-radius: 17px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
`;

const Counter = styled.span`
  width: 22px;
  height: 22px;
  margin-left: 8px;
  display: inline-block;
  background-color: #2694f7;
  border-radius: 100%;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  line-height: 20px;
`;

const AccountButton = () => (
  <StyledButton>
    Кабинет
    <Counter>
2
    </Counter>
  </StyledButton>
);

export default AccountButton;
