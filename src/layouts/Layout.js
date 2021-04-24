import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import Credit from 'components/Credit';
import Header from 'components/Header';
import Footer from 'components/Footer';
import PageMap from 'components/PageMap';
import Text from 'components/Text';

import 'layouts/Layout.css';

import {colors} from 'BaseTheme';
import {SMALL_SCREEN_SIZE} from 'constants';

export default function Layout({children, credit, imageData, pageMapSections, subtitle, title}) {
  return (
    <div>
      <Header />

      {title && (
        <StyledBackgroundImage Tag="section" fluid={imageData} backgroundColor={`#040e18`}>
          <SectionHeader>
            <Text color={'#ffffff'} h1>
              {title}
            </Text>
            <Text color={'#d4d4d4'} fontSize={24} center>
              {subtitle}
            </Text>

            {credit && <Credit text={credit} />}
          </SectionHeader>
        </StyledBackgroundImage>
      )}

      <Body offsetTop={!title}>
        {pageMapSections && <PageMap sections={pageMapSections} />}
        <Content>{children}</Content>
      </Body>

      <Footer />
    </div>
  );
}

const Body = styled.div`
  background-color: ${colors.light};
  ${(props) => props.offsetTop && 'padding-top: 160px;'}
  padding-bottom: 40px;
`;

const Content = styled.div`
  margin: 0px auto 0px;
  max-width: 960px;
  padding: 20px 20px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-sizing: border-box;
  border-radius: 8px;
`;

const SectionHeader = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const SectionTitle = styled.h1`
  color: #ffffff;
  margin: 0px;
`;

const SectionSubtitle = styled.h3`
  color: #d4d4d4;
  margin: 0px;
`;

const StyledBackgroundImage = styled((props) => <BackgroundImage {...props} />)`
  height: 40vh;
  width: 100%;
  margin-top: 80px;

  ::before,
  ::after {
    background-attachment: fixed;
  }

  @media screen and (max-width: ${SMALL_SCREEN_SIZE}) {
    ::before,
    ::after {
      background-attachment: scroll;
    }
  }
`;
