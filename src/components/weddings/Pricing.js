import React from 'react';
import styled from 'styled-components';

import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

import PricingCard from 'components/pricing/PricingCard';

import { colors } from 'BaseTheme';
import { SMALL_SCREEN_SIZE } from 'constants';

export default function Pricing({}) {
  return (
    <Container id="pricing">
      <SectionHeader text="Elegant Wedding Videos. Simple Pricing." />
      <TextContainer>
        <Text>
          Our packages are designed to not let the quality of the video suffer with our cheaper options. The same
          equipment is used across the board. Rather, we work with you to figure out how to work with the time
          associated with each package.
        </Text>
        <Text margin="20px auto 0px">
          Transparency is our goal here. Although we don’t charge by the hour, we try to keep the hourly wage about even
          across each package. This means the cheaper the option, the less hours we have to put in to make it happen.
        </Text>
        <Text margin="60px auto 40px" fontSize={24} color={colors.accentDark} center>
          Same great quality, no matter the package.
        </Text>
      </TextContainer>

      <PricingContainer>
        <PricingCard points={['3-6 minute video*', '8 Hour Work Limit', 'Single Shooter']} price={100} title="Basic" />
        <PricingCard
          highlight
          points={['7-10 minute video*', '10 Hour Work Limit', '2nd Shooter']}
          price={100}
          title="Value"
        />
        <PricingCard
          points={['10-30 minute video*', '14 Hour Work Limit', '2nd Shooter', 'Custom Titles & Animations']}
          price={100}
          title="Premium"
        />
      </PricingContainer>

      <Text margin="10px auto 0px" center italic>
        *Video length is approximate, not a hard cutoff. It can also be shorter than the allowed time, if desired.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
