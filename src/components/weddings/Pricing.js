import React from 'react';
import styled from 'styled-components';

import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

import Button from 'components/Button';
import PricingCard from 'components/pricing/PricingCard';

import { colors } from 'BaseTheme';
import { SMALL_SCREEN_SIZE } from 'constants';

export default function Pricing({}) {
  return (
    <Container id="pricing">
      <SectionHeader text="Elegant Wedding Videos. Simple Pricing." />
      <TextContainer>
        <Text>
          Our packages are designed to not let the quality of the video suffer with our cheaper options. We'll work with
          you to figure out exactly what you are looking for.
        </Text>
        <Text margin="20px auto 0px">
          Transparency is our goal here. The biggest difference between our packages is the length of the video, and how
          much of the day we capture. The shorter the video, the cheaper the package.
        </Text>
        <Text margin="60px auto 40px" fontSize={24} color={colors.accentDark} center>
          Same great quality, no matter the package.
        </Text>
      </TextContainer>

      <PricingContainer>
        <PricingCard points={['3-6 minute video*', '8 Hour Day Limit', 'Single Shooter']} price={1000} title="Basic" />
        <PricingCard
          highlight
          points={['7-10 minute video*', '10 Hour Day Limit', '2nd Shooter']}
          price={1400}
          title="Value"
        />
        <PricingCard
          points={['10-20 minute video*', '12 Hour Day Limit', '2nd Shooter', 'Custom Titles & Animations']}
          price={1800}
          title="Premium"
        />
      </PricingContainer>

      <Text margin="10px auto 0px" center italic>
        *Video length is approximate, not a hard cutoff. It can also be shorter than the allowed time, if desired.
      </Text>

      <Button text="Check Availability" containerStyle={{ margin: '40px auto 0px' }} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;

const PricingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  width: 80%;
  min-width: 300px;
  margin
`;
