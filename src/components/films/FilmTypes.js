import React from 'react';
import styled from 'styled-components';
import { useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Text from 'components/Text';

export default function FilmTypes({}) {
  const data = useStaticQuery(graphql`
    query VideoTypesQuery {
      commercials: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      promotions: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      documentaries: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      musicVideos: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container>
      <VideoType>
        <Img fixed={data.commercials.childImageSharp.fixed} />
        <Text>Commercials</Text>
      </VideoType>

      <VideoType>
        <Img fixed={data.commercials.childImageSharp.fixed} />
        <Text>Promotions</Text>
      </VideoType>

      <VideoType>
        <Img fixed={data.commercials.childImageSharp.fixed} />
        <Text>Documentaries</Text>
      </VideoType>

      <VideoType>
        <Img fixed={data.commercials.childImageSharp.fixed} />
        <Text>Music Videos</Text>
      </VideoType>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 40px auto 100px;
`;

const VideoType = styled.div`
  flex: 1;
  min-width: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
