import React from 'react';
import styled from 'styled-components';

import Player from 'components/Player';
import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

export default function Examples({ data, title = 'See Our Work' }) {
  return (
    <Container>
      <SectionHeader text="Needing a Video?" text={title} />

      <PlayersContainer>
        {data?.map((item, index) => {
          return (
            <Player
              border={index < data.length - 1}
              key={item.url}
              title={item.title}
              description={item.description}
              tags={item.tags}
              url={item.url}
            />
          );
        })}
      </PlayersContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayersContainer = styled.div`
  max-width: 640px;
`;
