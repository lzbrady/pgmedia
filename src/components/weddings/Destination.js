import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import Text from 'components/Text';

import { colors } from 'BaseTheme';
import { SMALL_SCREEN_SIZE } from 'constants';

export default function Destination({}) {
  const data = useStaticQuery(graphql`
    query DestinationWedding {
      image: file(relativePath: { eq: "beach.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <StyledBackgroundImage Tag="section" fluid={data.image.childImageSharp.fluid} backgroundColor={colors.primary}>
      <TextContainer>
        <Text fontSize={36}>Destination Weddings</Text>
        <Text fontSize={36}>We love to travel!</Text>
      </TextContainer>
    </StyledBackgroundImage>
  );
}

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 40vh;
  width: calc(100% + 40px);
  margin: 120px 0px;

  ::before,
  ::after {
    background-attachment: fixed;
  }

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    ::before,
    ::after {
      background-attachment: scroll;
    }
  }
`;
