import React from 'react';
import styled from 'styled-components';

import { colors } from 'BaseTheme';

export default function Text({ children, h1, h2, h3, center, color, fontSize, italic, light, margin = '0px', style }) {
  // HTML Element
  let element = 'p';
  if (h1) {
    element = 'h1';
  } else if (h2) {
    element = 'h2';
  } else if (h3) {
    element = 'h3';
  }

  let heading = h1 || h2 || h3;
  return (
    <StyledText
      as={element}
      center={center}
      color={color}
      fontSize={fontSize}
      heading={heading}
      italic={italic}
      light={light}
      margin={margin}
      style={style}
    >
      {children}
    </StyledText>
  );
}

const StyledText = styled.p`
  color: ${(props) => props.color || (props.light ? colors.light : props.heading ? colors.accentDark : colors.dark)};
  ${(props) => props.center && 'text-align: center;'}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
  ${(props) => props.italic && 'font-style: italic;'}
`;
