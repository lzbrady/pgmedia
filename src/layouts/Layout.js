import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

import 'layouts/Layout.css';
import { colors } from 'BaseTheme';

export default function Layout({ alignTop = false, children, ignoreContentBounds = false }) {
  return (
    <div>
      <Header />
      <Body>
        <Content ignoreContentBounds={ignoreContentBounds} alignTop={alignTop}>
          {children}
        </Content>
      </Body>

      <Footer />
    </div>
  );
}

const Body = styled.div`
  background-color: ${colors.primary};
`;

const Content = styled.div`
  margin: ${(props) => (props.alignTop ? '0px' : '80px') + ' auto 0px'};
  max-width: ${(props) => (props.ignoreContentBounds ? 'none' : '1366px')};
  padding-bottom: ${(props) => (props.ignoreContentBounds ? '0px' : '100px')};
`;
