import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

import { colors } from 'BaseTheme';

export default function SectionHeader({ text }) {
  return (
    <Container>
      <Text h1 center color="#ffffff" fontSize={36}>
        {text}
      </Text>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.primary};
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
