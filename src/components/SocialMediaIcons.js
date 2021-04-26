import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import YouTubeIcon from '@icons/youtube.svg';

export default function SocialMediaIcons({color = 'black', size = 24, style}) {
  return (
    <IconContainer style={style}>
      <Icon href="https://www.youtube.com/channel/UCkBaV1NYC3KDodCNmUpf7CQ" icon={<YouTubeIcon width={size} height={size} fill={color} />} size={size} />
    </IconContainer>
  );
}

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 240px;
  justify-content: space-around;
  margin-top: 16px;
`;
