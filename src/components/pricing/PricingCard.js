import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

import {colors, shadows} from 'BaseTheme';

export default function PricingCard({highlight, points, price, title}) {
  return (
    <Card highlight={highlight}>
      <TitleContainer>
        <Text fontSize={28} color={'#FFFFFF'} center>
          {title}
        </Text>
      </TitleContainer>

      <PointsContainer>
        {points.map((point) => {
          return (
            <Text margin="10px 0px" center key={point}>
              {point}
            </Text>
          );
        })}
      </PointsContainer>

      <Text color={colors.primaryDark} fontSize={36} margin="10px 0px">
        ${price}
      </Text>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.highlight ? '#FFFFFF' : '#F1F1F1')};
  border-radius: 8px;
  flex: 1;
  align-items: center;
  margin: 15px;
  margin: ${(props) => (props.highlight ? '0px 15px 15px' : '25px')};
  max-width: 275px;
  height: ${(props) => (props.highlight ? '325px' : '275px')};
  ${shadows.primary}

  :hover {
    ${shadows.large}
  }
`;

const PointsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TitleContainer = styled.div`
  background-color: ${colors.accent};
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-bottom: 10px;
`;
