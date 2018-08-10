import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
`;
const MenuItem = styled.li`
  margin-right: 27px;
  display: inline;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 1199px) {
    margin-right: 15px;
  }
`;

const Menu = () => (
  <StyledMenu>
    <MenuItem>
Магазины
    </MenuItem>
    <MenuItem>
Рестораны
    </MenuItem>
    <MenuItem>
Развлечения
    </MenuItem>
    <MenuItem>
Дети
    </MenuItem>
    <MenuItem>
Услуги
    </MenuItem>
    <MenuItem>
Акции
    </MenuItem>
    <MenuItem>
Новости
    </MenuItem>
    <MenuItem>
Мероприятия
    </MenuItem>
    <MenuItem>
Блог
    </MenuItem>
  </StyledMenu>
);

export default Menu;
