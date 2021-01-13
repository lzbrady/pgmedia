import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { colors } from 'BaseTheme';

export default function Button({ children, href, linkTo, onClick, containerStyle, text }) {
  return (
    <Container style={containerStyle}>
      <StyledButton href={href} to={linkTo} onClick={onClick}>
        {children}
        {text}
      </StyledButton>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  ${(props) => props.style};
`;

const StyledButton = styled((props) =>
  props.href ? <a {...props} /> : props.to ? <Link {...props} /> : <button {...props} />
)`
  border: none;
  border-radius: 5px;
  background: ${colors.primary};
  color: #ffffff;
  padding: 10px 40px;
  transition: all 200ms ease;
  text-decoration: none;
  text-align: center;
  font-size: 24px;

  :hover {
    cursor: pointer;
    background: ${(props) => (props.color || props.light ? colors.primaryLight : colors.primaryDark)};
  }
`;
