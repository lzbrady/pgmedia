import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Text from 'components/Text';

import {colors} from 'BaseTheme';

export default function TeamMember({name, bio, imageData}) {
  return (
    <Container>
      <ImageContainer>
        <StyledImg fluid={imageData} />
        <NameContainer>
          <Text fontSize={24} color={colors.light} center>
            {name}
          </Text>
        </NameContainer>
      </ImageContainer>

      <Text margin="10px 0px 20px">{bio}</Text>
    </Container>
  );
}

const NameContainer = styled.div`
  background-color: ${colors.alpha.accent.replace('x', 0.7)};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;

  :hover {
    ${NameContainer} {
      background-color: ${colors.accent};
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const StyledImg = styled((props) => <Img {...props} />)`
  border-radius: 8px;
  width: 100%;
  border: 3px solid ${colors.accentDark};
  box-sizing: border-box;
`;
