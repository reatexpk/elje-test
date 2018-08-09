import React from 'react';
import styled from 'styled-components';

import iconArrowRight from './icon_arrow-right.svg';

const EmailWrapper = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled.p`
  margin: 32px 80px 4px 61px;
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
  margin: 0 45px;
  position: relative;
  border: 2px solid #656c81;
  border-radius: 19px;
  width: 200px;
  height: 36px;
`;
const Input = styled.input`
  width: 100%;
  padding-left: 16px;
  border: none;
  line-height: 16px;
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
