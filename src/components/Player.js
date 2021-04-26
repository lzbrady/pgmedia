import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import Text from 'components/Text';

import { colors } from 'BaseTheme';
import { MEDIUM_SCREEN_SIZE } from 'constants';

export default function Player({ containerStyle, description, title, tags, url }) {
  return (
    <Container style={containerStyle}>
      {title && (
        <Text h3 fontSize={24} color={colors.accentDark}>
          {title}
        </Text>
      )}
      {description && <Text margin="20px 0px">{description}</Text>}

      <PlayerContainer>
        <StyledReactPlayer url={url} width={'100%'} height={'100%'} />
      </PlayerContainer>

      {tags && (
        <Tags>
          {tags.map((tag) => {
            return <Tag key={tag}>#{tag}</Tag>;
          })}
        </Tags>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px;
`;

const PlayerContainer = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

const StyledReactPlayer = styled((props) => <ReactPlayer {...props} />)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Tag = styled.p`
  border-radius: 26px;
  background-color: ${colors.primary};
  color: ${colors.light};
  padding: 3px 12px;
  margin: 10px 5px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
`;
