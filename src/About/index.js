import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.section`
  margin: 104px 0 64px 0;
`;

const StyledText = styled.p`
  max-width: 980px;
  margin: 0 auto;
  padding: 16px 0;
  color: #3d4252;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
`;

const Divider = styled.div`
  margin: 64px auto;
  background-color: #3d4252;
  opacity: 0.1;
  width: 980px;
  height: 1px;
`;

const About = () => (
  <StyledAbout>
    <StyledText>
      АВИАПАРК – новый формат шоппинга! Это крупнейший торговый центр в Европе с широким выбором
      магазинов для всей семьи, т.е. универсальной площадкой для большинства рекламодателей.
      Уникальное расположение в районе Ходынского поля в непосредственной близости к ТТК
      обеспечивает легкий доступ как жителям центральных округов, так и близлежащих районов Москвы и
      области.
    </StyledText>
    <StyledText>
      Благодаря ритейл-зонам в торговом центре, разделённым 4 этажами, реклама в ТЦ становится
      уникальным способом донести ваше рекламное сообщение до ЦА. В торговом центре есть различные
      рекламные возможности для продвижения нового товара или бренда, увеличения базы данных и
      повышения лояльности к бренду.
    </StyledText>
    <Divider />
  </StyledAbout>
);

export default About;
