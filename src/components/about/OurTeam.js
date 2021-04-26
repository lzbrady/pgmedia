import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';

import Text from 'components/Text';
import TeamMember from 'components/about/TeamMember';

import {colors} from 'BaseTheme';

export default function OurTeam({}) {
  const data = useStaticQuery(graphql`
    query OurTeam {
      luke: file(relativePath: {eq: "luke.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 340) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      connor: file(relativePath: {eq: "connor.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 340) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      arica: file(relativePath: {eq: "arica.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 340) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container id="team">
      <Text h1 margin="160px auto 34px" center>
        Meet the Team
      </Text>

      <TeamMembers>
        <TeamMember
          name="Luke Brady"
          imageData={data.luke.childImageSharp.fluid}
          bio="Luke started making videos during his middle school years on family vacations, and still captures his trips today. He loves using video as a way to share his experiences with the world."
        />
        <TeamMember
          name="Connor Beauregard"
          imageData={data.connor.childImageSharp.fluid}
          bio="Connor always sees a place to add his creativity. Whether he's working on his own projects, or collaborating on another, he is consistently able to add his unique perspective."
        />
        <TeamMember
          name="Arica Bartee"
          imageData={data.arica.childImageSharp.fluid}
          bio="Arica adds her originality to everything she does. She has a grand vision for each project she does, but still has the ability to nail down every last detail."
        />
      </TeamMembers>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const TeamMembers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  max-width: 750px;
  margin: 0px auto;
`;
