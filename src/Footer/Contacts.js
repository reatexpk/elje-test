import React from 'react';
import styled from 'styled-components';

import iconPhone from './icon_phone.svg';

const ContactsWrapper = styled.div``;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const Icon = styled.img`
  margin: 3px 8px 0 48px;
  background-color: #a8f0de;
  width: 16px;
  height: 16px;
`;

const Text = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
`;

const Button = styled.button`
  width: 188px;
  height: 34px;
  margin: 20px 0 0 45px;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 19px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 16px;
`;

const Contacts = () => (
  <ContactsWrapper>
    <Container>
      <Icon src={iconPhone} />
      <Text>
+7 (495) 644 45 44
      </Text>
    </Container>
    <Button>
ОБРАТНАЯ СВЯЗЬ
    </Button>
  </ContactsWrapper>
);

export default Contacts;
