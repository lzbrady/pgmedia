import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

import { colors } from 'BaseTheme';

export default function SectionHeader({ text }) {
  return (
    <Container>
      <Text h1 color={colors.dark} fontSize={36}>
        {text}
      </Text>
      <BottomBorder />
    </Container>
  );
}

const BottomBorder = styled.div`
  height: 10px;
  background-color: ${colors.primary};
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 25px;
  box-sizing: border-box;
`;
