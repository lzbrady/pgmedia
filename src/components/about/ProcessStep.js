import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Credit from 'components/Credit';
import Text from 'components/Text';

export default function ProcessStep({credit, title, description, imageData}) {
  return (
    <Container>
      <Text h3 fontSize={24} margin="3px" center>
        {title}
      </Text>

      <ImageContainer>
        <StyledImg fluid={imageData} />
        <Credit text={credit} />
      </ImageContainer>

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

const ImageContainer = styled.div`
  position: relative;
`;

const StyledImg = styled((props) => <Img {...props} />)`
  border-radius: 8px;
  width: 100%;
  height: 180px;
  box-sizing: border-box;
`;
