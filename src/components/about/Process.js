import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from 'styled-components';

import Button from 'components/Button';
import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';
import ProcessStep from 'components/about/ProcessStep';

import {colors} from 'BaseTheme';

export default function Process({}) {
  const data = useStaticQuery(graphql`
    query Process {
      discovery: file(relativePath: {eq: "about-discovery.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      planning: file(relativePath: {eq: "about-planning.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      production: file(relativePath: {eq: "about-production.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      feedback: file(relativePath: {eq: "about-feedback.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      distribution: file(relativePath: {eq: "about-distribute.jpg"}) {
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
      <TextContainer>
        <Text margin="23px auto 0px">
          Our process is designed around efficiency. Our background started in engineering, so we analyzed our own processes until we could streamline the process and strip away the nonsense. This is
          the approach we follow.
        </Text>
      </TextContainer>

      <ProcessSteps>
        <ProcessStep
          title="Discovery"
          imageData={data.discovery.childImageSharp.fluid}
          description="We start by meeting with you to figure out exactly what we are trying to create. This step alone can make or break any project and any budget."
          credit="Andrew Charney"
        />
        <ProcessStep
          title="Planning"
          imageData={data.planning.childImageSharp.fluid}
          description="Once we have an idea on the scope of what we’re actually making, our team sits down to plan it all out on paper. We want to know what it will look like before we make it."
          credit="Kelly Sikkema"
        />
        <ProcessStep
          title="Production"
          imageData={data.production.childImageSharp.fluid}
          description="With the project planned out, time to make it happen. This is the most rewarding step, as you begin to see your project and ideas come to life."
          credit="Lance Asper"
        />
        <ProcessStep
          title="Feedback"
          imageData={data.feedback.childImageSharp.fluid}
          description="Once we start to have a fully developed video, we want your feedback before we finalize it. We might not be able to meet over coffee, but we'll always loop you in on this step to make sure you get what you were looking for."
          credit="Simon Shim"
        />
        <ProcessStep
          title="Distribution"
          imageData={data.distribution.childImageSharp.fluid}
          description="Now that we have our film created, let’s send it out. This varies by project, but whether you want your own digital copy, or to blast it out to the masses, we will work with you every step of the way."
          credit="NASA"
        />

        <Text center h3 fontSize={24} margin="50px auto 0px">
          But first...
        </Text>
        <Button text="Contact Us" linkTo="/contact" containerStyle={{margin: '20px auto 20px'}} />
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

const TextContainer = styled.div`
  width: 80%;
  margin: auto;
`;
