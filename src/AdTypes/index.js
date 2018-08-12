import React from 'react';
import styled from 'styled-components';

import AdType from './AdType';
import iconStars from './icon_stars.svg';
import iconElevator from './icon_elevator.svg';
import iconShowcase from './icon_showcase.svg';
import iconRadio from './icon_radio.svg';
import iconBanner from './icon_banner.svg';
import iconStairs from './icon_stairs.svg';
import iconFacade from './icon_facade.svg';
import iconBranding from './icon_branding.svg';
import iconWall from './icon_wall.svg';
import iconFood from './icon_food.svg';
import iconAd from './iconAd.svg';
import iconEscalator from './icon_escalator.svg';
import iconColumn from './icon_column.svg';
import iconStop from './icon_stop.svg';
import icon3D from './icon_3d.svg';

const AdTypesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OrderButton = styled.button`
  width: 283px;
  height: 56px;
  margin: 96px auto 120px auto;
  display: block;
  border: 4px solid #a8f0de;
  border-radius: 28px;
  background: transparent;
  color: #3d4252;
  letter-spacing: 1.5px;
  line-height: 24px;
  text-transform: uppercase;
  cursor: pointer;
`;

const AdTypes = () => (
  <div className="container">
    <AdTypesWrapper>
      <AdType
        src={iconStars}
        label="Проведение промо
мероприятий"
      />
      <AdType src={iconElevator} label="Внутренние лифты" />
      <AdType src={iconShowcase} label="Реклама на витринах" />
      <AdType src={iconRadio} label="Радиореклама" />
      <AdType src={iconBanner} label="Подвесные баннеры" />
      <AdType
        src={iconStairs}
        label="Проведение промо
мероприятий"
      />
      <AdType src={iconFacade} label="Фасадные Баннеры" />
      <AdType src={iconBranding} label="Брендирование стен лифта со стороны эскалаторов" />
      <AdType src={iconWall} label="Полная лифтовая стена" />
      <AdType src={iconFood} label="Фуд корт" />
      <AdType src={iconAd} label="Брендинг входных групп" />
      <AdType src={iconEscalator} label="Травалаторы и эскалаторы" />
      <AdType src={iconColumn} label="Брендинг колон в зоне ресторанного дворика" />
      <AdType src={iconStop} label="Остановки" />
      <AdType src={icon3D} label="3D-наклейки" />
    </AdTypesWrapper>
    <OrderButton>
Отправить заявку
    </OrderButton>
  </div>
);

export default AdTypes;
