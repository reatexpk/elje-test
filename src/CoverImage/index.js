import React from 'react';
import styled from 'styled-components';
import coverImage from './coverImage.png';

const StyledImage = styled.div`
  background: url('${coverImage}') no-repeat;
  background-size: cover;
  height: 380px;
`;

const TitleSmall = styled.h1`
  margin: 0;
  padding-top: 116px;
  text-align: center;
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 42px;
  text-transform: uppercase;
`;
const TitleBig = styled.h1`
  margin: 16px 0 0 0;
  text-align: center;
  color: #ffffff;
  font-size: 52px;
  font-weight: 300;
  letter-spacing: 3px;
  line-height: 78px;
  text-transform: uppercase;
`;

const CoverImage = () => (
  <StyledImage>
    <TitleSmall>
Рекламные услуги
    </TitleSmall>
    <TitleBig>
Торгового центра
    </TitleBig>
  </StyledImage>
);

export default CoverImage;
