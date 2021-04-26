import React from 'react';
import styled from 'styled-components';

import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

export default function Tagline({}) {
  return (
    <>
      <SectionHeader text="About Pretty Good Media" />
      <TextContainer>
        <Text>
          We started Pretty Good Media with a few guiding principals. If we really wanted to get into filmmaking, we had to do it right. We haven't quit our day jobs, so if we were going to pursue
          this in our free time, it had to be fulfilling. That meant no shortcuts, give it your all, and above all else, find enjoyment from it. That's what we strive for here: for both parties to
          enjoy the process. We have found that when we truly enjoy a project, then we're fully in it, and it leads to our most creative work.
        </Text>
        <Text margin="20px auto 0px">
          Video is an art, and we never want to produce something that we're not proud of. At the end of the day, it's not about the money, it's about pursuing a passion and finding fulfillment in
          life. We're passionate about filmmaking, and we work with people who are passionate about that they do. Whether that's a video for your business, a project you've always wanted to create, or
          your wedding day is just around the corner, we're there with you every step of the way.
        </Text>
      </TextContainer>
    </>
  );
}

const TextContainer = styled.div`
  width: 80%;
`;
