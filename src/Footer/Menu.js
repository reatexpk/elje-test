import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.ul`
  margin: 0;
  padding: 7px 45px 1px 45px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 22px;
  list-style-type: none;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
`;

const Item = styled.li``;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Menu = () => (
  <StyledMenu>
    <Item>
      <Link href="localhost">
АРЕНДАТОРАМ
      </Link>
    </Item>
    <Item>
      <Link href="localhost">
ЗАКУПКИ
      </Link>
    </Item>
    <Item>
      <Link href="localhost">
ВАКАНСИИ
      </Link>
    </Item>
    <Item>
      <Link href="localhost">
РЕКЛАМНЫЕ УСЛУГИ
      </Link>
    </Item>
    <Item>
      <Link href="localhost">
КОНТАКТЫ
      </Link>
    </Item>
  </StyledMenu>
);

export default Menu;
