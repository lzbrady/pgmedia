import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import Particles from 'react-particles-js';

import SEO from 'components/seo';
import logo from '@icons/logo.svg';

import { colors } from 'BaseTheme';
import { SMALL_SCREEN_SIZE } from 'constants';

export default function Index() {
  const data = useStaticQuery(graphql`
    query IndexBackgroundQuery {
      indexBackground: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      indexLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed
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
        }}
      >
        <Particles width="100%" height="40vh" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <SEO
          title="PG Media"
          keywords={[
            `custom`,
            `website`,
            `graphics`,
            `video`,
            `production`,
            `social`,
            `media`,
            `indiana`,
            `indianapolis`,
          ]}
        />
        <ContentContainer>
          <LogoContainer>
            <Logo fixed={data.indexLogo.childImageSharp.fixed} />
          </LogoContainer>

          <Title>Pretty Good Media</Title>
          <MenuOptions>
            <MenuItemLink to="/weddings">Weddings</MenuItemLink>
            <MenuItemLink to="/films">Films</MenuItemLink>
            <MenuItemLink to="/about">About</MenuItemLink>
            <MenuItemLink to="/contact">Contact</MenuItemLink>
          </MenuOptions>
        </ContentContainer>
      </StyledBackgroundImage>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Logo = styled((props) => <Img {...props} />)`
  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.3);
  border-radius: 160px;
  background-color: black;
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

  :hover {
    color: ${colors.primary};
    border-color: ${colors.primary};
  }
`;

const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 100vh;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    font-size: 36px;
  }
`;
