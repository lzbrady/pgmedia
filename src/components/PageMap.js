import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import { colors, shadows } from 'BaseTheme';

export default function PageMap({ sections }) {
  return (
    <Container>
      {sections.map((section) => {
        return (
          <LinkContainer key={section.title}>
            <StyledLink to={section.link} isAnchor={section.link.includes('#')}>
              <Icon>{section.icon}</Icon>

              <Text>{section.title}</Text>
            </StyledLink>
          </LinkContainer>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  min-width: 280px;
  width: 60%;
  margin: 20px auto;
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

const Text = styled.p`
  color: colors.dark;
  margin: 4px;
`;

const StyledLink = styled((props) => (props.isAnchor ? <AnchorLink {...props} /> : <Link {...props} />))`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid transparent;

  :hover {
    cursor: pointer;
    border-color: ${colors.primary};

    ${Icon} {
      ${shadows.hover.subtleDark};
    }
  }
`;
