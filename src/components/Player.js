import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import Text from 'components/Text';

import { colors } from 'BaseTheme';

export default function Player({ border, description, title, tags, url }) {
  return (
    <Container border={border}>
      {title && (
        <Text h3 fontSize={24} color={colors.accentDark}>
          {title}
        </Text>
      )}
      {description && <Text margin="20px 0px">{description}</Text>}
      <ReactPlayer url={url} />

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
  border-bottom: ${(props) => (props.border ? `1px solid ${colors.accent}` : 'none')};
`;

const Tag = styled.p`
  border-radius: 26px;
  background-color: ${colors.accent};
  color: ${colors.light};
  padding: 3px 12px;
  margin: 10px 5px;
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
`;
