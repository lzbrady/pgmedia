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
      <ContentContainer>
        <TextContainer>
          <Text fontSize={36} center margin="0px auto 20px;">
            Destination Weddings
          </Text>
          <Text fontSize={18} margin="0px auto 20px;">
            We love seeing new locations, and know you chose to have a destination wedding because you do too. Scenery
            is very important to us, especially when shooting destinations. The scenery will play a huge role in your
            film so we can fully capture the beauty of your selected destination.
          </Text>
          <Text fontSize={18}>
            We only require travel to and from to be provided or compensated. The rest of the pricing remains consistent
            with our packages above. We encourage asking far in advance, as destination weddings typically require more
            time around the wedding itself.
          </Text>
        </TextContainer>
      </ContentContainer>
    </StyledBackgroundImage>
  );
}

const TextContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  padding: 20px;
  width: calc(100% - 80px);
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 40vh;
  width: calc(100% + 40px);
  margin-top: 120px;

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
