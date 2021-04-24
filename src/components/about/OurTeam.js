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
          bio="Luke started making videos during his middle school years on family vacations, and still captures his trips today. He finds passion in inspiring others. He leads with creativity and has the drive to bring it to life."
        />
        <TeamMember
          name="Connor Beauregard"
          imageData={data.connor.childImageSharp.fluid}
          bio="Connor’s mind never slows down. Every day he has a new idea, but that doesn’t slow him from creating. He’s always figuring out new ways to bring his ideas to life."
        />
        <TeamMember
          name="Arica Bartee"
          imageData={data.arica.childImageSharp.fluid}
          bio="Arica adds her originality to everything she does. She cares deeply about her projects, nailing down every little detail, while still able to convery the larger picture. She always has a vision and always delivers on it."
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
