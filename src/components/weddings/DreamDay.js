import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

export default function DreamDay({}) {
  const data = useStaticQuery(graphql`
    query DreamVideo {
      image: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <SectionHeader text="Your Dream Day deserves a Dream Video" />
      <RowContainer>
        <StyledImg fluid={data.image.childImageSharp.fluid} />
        <TextContainer>
          <Text>
            No jargon. No confusing packages.
            <br />
            Just quality video from people you can trust.
          </Text>
          <Text margin="20px auto 0px">
            Our passion for storytelling captures the essence of the day. Every wedding video will capture the ceremony,
            the toasts, the reception, all the big parts.
          </Text>
          <Text margin="20px auto 0px">
            The parts we love are the candid laughs during the speeches, the tears being shed by grandparents, and the
            parts that break the mold of a template and make your wedding video yours.
          </Text>
        </TextContainer>
      </RowContainer>
    </>
  );
}

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`;

const StyledImg = styled((props) => <Img {...props} />)`
  flex: 2;
  min-width: 300px;
`;

const TextContainer = styled.div`
  flex: 3;
  width: 80%;
  min-width: 300px;
  padding: 0px 0px 20px 40px;
`;
