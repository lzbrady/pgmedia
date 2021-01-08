import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import InstagramIcon from '@icons/instagram.svg';
import YouTubeIcon from '@icons/youtube.svg';

export default function SocialMediaIcons({ color = 'black', size = 24, style }) {
  return (
    <IconContainer style={style}>
      <Icon
        href="https://www.youtube.com/channel/UCKgU9kCGe0Aq1qFUkPC2Y7w"
        icon={<YouTubeIcon width={size} height={size} fill={color} />}
        size={size}
      />
      <Icon
        href="https://www.instagram.com/aytchofficial/"
        icon={<InstagramIcon width={size} height={size} fill={color} />}
        size={size}
      />
    </IconContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 240px;
  justify-content: space-between;
  margin-top: 16px;
`;
