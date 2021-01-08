import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Text from 'components/Text';

import { colors } from 'BaseTheme';

export default function TeamMember({ name, bio, imageData }) {
  return (
    <Container>
      <StyledImg fluid={imageData} />

      <NameContainer>
        <Text fontSize={24} color={colors.light}>
          {name}
        </Text>
      </NameContainer>

      <Text>{bio}</Text>
    </Container>
  );
}

const NameContainer = styled.div`
  background-color: ${colors.alpha.accent.replace('x', 0.7)};
  height: 50px;
  margin: -53px 3px 20px;
  z-index: 10;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 340px;

  :hover {
    ${NameContainer} {
      background-color: ${colors.accent};
    }
  }
`;

const StyledImg = styled((props) => <Img {...props} />)`
  border-radius: 8px;
  width: 100%;
  border: 3px solid ${colors.accentDark};
  box-sizing: border-box;
`;
