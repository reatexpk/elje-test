import React from 'react';
import styled from 'styled-components';

import iconArrowRight from './icon_arrow-right.svg';

const EmailWrapper = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0 45px;

  @media (max-width: 1416px) {
    padding: 0 20px;
  }
  @media (max-width: 1199px) {
    padding: 0 10px;
  }
`;

const Title = styled.p`
  margin: 32px 0 4px 0;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 16px;
  text-transform: uppercase;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  width: 200px;
  position: relative;
  border: 2px solid #656c81;
  border-radius: 19px;
  height: 36px;
`;
const Input = styled.input`
  padding-left: 16px;
  border: none;
  background-color: transparent;
  color: #ffffff;
  &::placeholder {
    color: #ffffff;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    opacity: 0.5;
  }
`;
const Button = styled.button`
  position: absolute;
  right: -1%;
  border: none;
  background-color: #a8f0de;
  border-radius: 19px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const ButtonImage = styled.img`
  background-color: transparent;
`;

const Email = () => (
  <EmailWrapper>
    <Title>
Получать новости
    </Title>
    <InputContainer>
      <Input placeholder="E-MAIL" />
      <Button>
        <ButtonImage src={iconArrowRight} />
      </Button>
    </InputContainer>
  </EmailWrapper>
);

export default Email;
