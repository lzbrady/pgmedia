import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import SEO from 'components/seo';
import Text from 'components/Text';
import LogoIcon from '@icons/logo.svg';

import {colors} from 'BaseTheme';
import {SMALL_SCREEN_SIZE} from 'constants';

export default function Index() {
  const data = useStaticQuery(graphql`
    query IndexBackgroundQuery {
      indexBackground: file(relativePath: {eq: "hot-air-balloon.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <StyledBackgroundImage
        Tag="section"
        fluid={data.indexBackground.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        style={{
          filter: 'grayscale(0.6)',
          height: '100vh',
          width: '100%',
        }}>
        <Particles width="100%" height="40vh" style={{position: 'absolute', top: 0, left: 0, right: 0}} />
        <SEO title="PG Media" keywords={[`custom`, `website`, `graphics`, `video`, `production`, `social`, `media`, `indiana`, `indianapolis`]} />
        <ContentContainer>
          <Content>
            <LogoContainer>
              <LogoIcon width={160} height={160} />
            </LogoContainer>

            <Title>Pretty Good Media</Title>
            <Text fontSize={18} light center>
              Video Production in Boston, Massachusetts
            </Text>

            <MenuOptions>
              <MenuItemLink to="/weddings">Weddings</MenuItemLink>
              <MenuItemLink to="/films">Films</MenuItemLink>
              <MenuItemLink to="/about">About</MenuItemLink>
              <MenuItemLink to="/contact">Contact</MenuItemLink>
            </MenuOptions>
          </Content>

          <Footer>
            <Text light center>
              © {new Date().getFullYear()} | Boston, MA
            </Text>
          </Footer>
        </ContentContainer>
      </StyledBackgroundImage>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-between;
`;

const Footer = styled.div`
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  width: 164px;
  height: 164px;
  padding: 20px;
`;

const MenuItemLink = styled((props) => <Link {...props} />)`
  font-size: 20px;
  margin: 4px 20px;
  text-align: center;
  padding: 6px 0px;
  box-sizing: border-box;
  color: white;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  font-family: 'Source Sans Pro';

  :hover {
    color: ${colors.primary};
    border-color: ${colors.primary};
  }
`;

const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
`;

const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 100vh;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-family: 'Montserrat';
  margin: 20px auto 10px;

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    font-size: 28px;
  }
`;
