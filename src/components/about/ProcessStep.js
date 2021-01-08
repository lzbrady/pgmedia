import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

import { colors } from 'BaseTheme';

export default function ProcessStep({ title, description, imageData }) {
  return (
    <Container>
      <Text h3 fontSize={24} margin="3px" center>
        {title}
      </Text>

      <StyledImg fluid={imageData} />

      <Text margin="10px 5px 0px">{description}</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 490px;
  margin-top: 50px;
`;

const StyledImg = styled((props) => <Img {...props} />)`
  border-radius: 8px;
  width: 100%;
  height: 180px;
  box-sizing: border-box;
`;
