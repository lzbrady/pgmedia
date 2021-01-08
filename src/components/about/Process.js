import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';
import ProcessStep from 'components/about/ProcessStep';

import { colors } from 'BaseTheme';

export default function Process({}) {
  const data = useStaticQuery(graphql`
    query Process {
      discovery: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      planning: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      production: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      distribution: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container id="process">
      <SectionHeader text="Our Process" />
      <Text margin="23px auto 0px" center>
        Our process is designed around efficiency. Our background started in computer science and data science, so we
        analyzed our own processes until we could streamline the process and strip away the nonsense. This is the
        approach we follow.
      </Text>

      <ProcessSteps>
        <ProcessStep
          title="Discovery"
          imageData={data.discovery.childImageSharp.fluid}
          description="We start by meeting with the client to figure out what exactly we are trying to create here. This step alone can make or break any project and any budget."
        />
        <ProcessStep
          title="Planning"
          imageData={data.planning.childImageSharp.fluid}
          description="Once we have an idea on the scope of what we’re actually making, our team sits down to plan it all out on paper. We want to know what it will look like before we make it."
        />
        <ProcessStep
          title="Production"
          imageData={data.production.childImageSharp.fluid}
          description="Once we have the project planned out, time to make it happen. This is the most rewarding step, as you being to see your project and ideas come to life."
        />
        <ProcessStep
          title="Distribution"
          imageData={data.distribution.childImageSharp.fluid}
          description="Now that we have our film created, let’s send it out. This varies by project, but whether you want your own digital copy, or to blast it out to the masses, we will work with you every step of the way."
        />
      </ProcessSteps>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 160px;
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
