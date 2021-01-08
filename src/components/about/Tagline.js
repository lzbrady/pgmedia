import React from 'react';
import styled from 'styled-components';

import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

export default function Tagline({}) {
  return (
    <>
      <SectionHeader text="Tagline" />
      <TextContainer>
        <Text>We started Pretty Good Media with one idea in mind: we want to inspire people. Lorem ipsum... </Text>
        <Text margin="35px auto 0px">
          Integer sit amet facilisis ipsum. Aliquam sodales lorem quis sodales facilisis. Duis ullamcorper at sapien ac
          maximus. Sed iaculis odio non arcu malesuada, vel auctor augue pulvinar. Donec tincidunt elit mi, ut venenatis
          nisl vehicula sit amet. Donec commodo pulvinar imperdiet. Nunc lobortis porttitor ultricies. Praesent a
          porttitor leo.{' '}
        </Text>
      </TextContainer>
    </>
  );
}

const TextContainer = styled.div`
  width: 80%;
`;
