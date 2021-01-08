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
  ${'' /* background-color: ${colors.primary}; */}
  background: linear-gradient(to right, ${colors.primaryDark} -10%, ${colors.primary} 10%, ${colors.primary} 90%, ${colors.primaryDark} 110%);
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 25px;
  box-sizing: border-box;
`;
