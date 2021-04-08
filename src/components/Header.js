import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'styled-components';

import MenuIcon from 'components/header/MenuIcon';

import { colors } from 'BaseTheme';
import LogoIcon from '@icons/logo.svg';

const ABBREVIATED_TITLE_THRESHOLD = 520;
const MOBILE_MENU_THRESHOLD = 870;

export default function Header() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <Container>
      <Link to="/">
        <TitleContainer>
          <LogoContainer>
            <LogoIcon width={50} height={50} />
          </LogoContainer>

          <Title />
          {/* <Title>Pretty Good Media</Title> */}
        </TitleContainer>
      </Link>

      <StyledMenuIcon
        fill={colors.light}
        isExpanded={isMenuExpanded}
        onClick={() => setIsMenuExpanded((_isMenuExpanded) => !_isMenuExpanded)}
        size={48}
      />

      <Menu isExpanded={isMenuExpanded}>
        <MenuItemLink to="/weddings">Weddings</MenuItemLink>
        <MenuItemLink to="/films">Films</MenuItemLink>
        <MenuItemLink to="/about">About</MenuItemLink>
        <MenuItemLink to="/contact">Contact</MenuItemLink>
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 80px;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
  background-color: ${colors.primaryDark};
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

const LogoContainer = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid transparent;
  box-sizing: border-box;
  z-index: 200;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: stretch;
  flex-direction: row;
  transition: top 200ms ease;
  z-index: 100;

  @media screen and (max-width: ${MOBILE_MENU_THRESHOLD}px) {
    flex-direction: column;
    position: absolute;
    top: ${(props) => (props.isExpanded ? '80px' : '-220px')};
    left: 0;
    right: 0;
    background-color: ${colors.primaryDark};
  }
`;

const menuItemStyle = css`
  flex: 1;
  margin: 4px 20px;
  text-align: center;
  padding: 6px 0px;
  box-sizing: border-box;
  color: ${colors.light};
  border-bottom: 1px solid transparent;
  font-family: 'Source Sans Pro';

  :hover {
    color: ${colors.primary};
    border-color: ${colors.primary};
  }
`;

const MenuItemLink = styled((props) => <Link {...props} />)`
  ${menuItemStyle}
`;

const StyledMenuIcon = styled((props) => <MenuIcon {...props} />)`
  display: none;

  @media screen and (max-width: ${MOBILE_MENU_THRESHOLD}px) {
    display: flex;
  }
`;

const Title = styled.h1`
  color: ${colors.light};
  text-decoration: none;
  margin: 0px 20px;
  font-weight: normal;
  z-index: 200;
  font-family: 'Montserrat';

  ::before {
    content: 'Pretty Good Media';
  }

  @media screen and (max-width: ${ABBREVIATED_TITLE_THRESHOLD}px) {
    ::before {
      content: 'PGM';
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 20px;

  :hover {
    ${LogoContainer} {
      border-color: ${colors.primary};
    }
  }
`;
