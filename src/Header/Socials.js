import React from 'react';
import styled from 'styled-components';

import iconSocialVK from './icon_social_vk.svg';
import iconSocialFB from './icon_social_fb.svg';
import iconSocialInstagram from './icon_social_instagram.svg';
import iconSocialYoutube from './icon_social_youtube.svg';

const StyledSocials = styled.div`
  display: flex;
`;

const Link = styled.a`
  width: 36px;
  height: 36px;
  display: flex;
  margin-left: 6px;
  border: 1px solid #8088a3;
  border-radius: 100%;
  overflow: hidden;
`;
const Icon = styled.img`
  margin: 0 auto;
`;

const Socials = () => (
  <StyledSocials>
    <Link href="https://vk.com">
      <Icon src={iconSocialVK} />
    </Link>
    <Link href="https://facebook.com">
      <Icon src={iconSocialFB} />
    </Link>
    <Link href="https://instagram.com">
      <Icon src={iconSocialInstagram} />
    </Link>
    <Link href="https://youtube.com">
      <Icon src={iconSocialYoutube} />
    </Link>
  </StyledSocials>
);

export default Socials;
