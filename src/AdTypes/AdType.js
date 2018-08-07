import React from 'react';
import styled from 'styled-components';

const StyledAdType = styled.div`
  flex-basis: 20%;
  max-width: 20%;
`;

const Icon = styled.img``;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #a8f0de;
  border-radius: 100%;
  width: 124px;
  height: 124px;
  margin: 66px auto 26px auto;
`;

const Label = styled.h3`
  margin: 0 16px;
  color: #3d4252;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
`;

const AdType = ({ src, label }) => (
  <StyledAdType>
    <IconContainer>
      <Icon src={src} />
    </IconContainer>
    <Label>
      {label}
    </Label>
  </StyledAdType>
);

export default AdType;
