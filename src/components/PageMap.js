import React from 'react';
import styled from 'styled-components';
import {AnchorLink} from 'gatsby-plugin-anchor-links';

import Text from 'components/Text';

import {colors, shadows} from 'BaseTheme';

export default function PageMap({sections}) {
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
  grid-gap: 30px;
  max-width: ${(props) => `${props.numCols * 150}px`};
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
  background-color: white;
  height: 0;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 100%;
  ${shadows.small};
  transition: all 200ms ease;

  :hover {
    ${shadows.hover.subtleDark};
  }
`;

const StyledLink = styled((props) => <AnchorLink {...props} />)`
  flex: 1;
  align-self: baseline;
  height: 0;
  padding-bottom: 50%;
  padding-top: 50%;
  text-decoration: none;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${colors.accent};

  :hover {
    cursor: pointer;
  }
`;
