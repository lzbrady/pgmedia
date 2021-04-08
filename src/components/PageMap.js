import React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import Text from 'components/Text';

import { colors, shadows } from 'BaseTheme';

export default function PageMap({ sections }) {
  return (
    <Container numCols={sections.length}>
      {sections.map((section) => {
        return (
          <LinkContainer key={section.title}>
            <StyledLink to={section.link}>
              <Icon>{section.icon}</Icon>

              <Text color={colors.accent}>{section.title}</Text>
            </StyledLink>
          </LinkContainer>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.numCols}, 1fr)`};
  grid-gap: 20px;
  max-width: ${(props) => `${props.numCols * 200}px`};
  padding: 40px 10px 60px;
  margin: auto;
`;

const Icon = styled.div`
  border-radius: 80px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled((props) => <AnchorLink {...props} />)`
  width: 110px;
  height: 110px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.accent};
  background-color: white;
  padding: 10px;
  border-radius: 110px;
  transition: all 200ms ease;
  ${shadows.small};

  :hover {
    cursor: pointer;
    ${shadows.hover.subtleDark};
  }
`;
