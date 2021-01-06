import React from 'react';
import styled from 'styled-components';

import Player from 'components/Player';
import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

export default function Examples({ data, title = 'See Our Work' }) {
  return (
    <Container>
      <SectionHeader text="Needing a Video?" text={title} />

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
    </Container>
  );
}

const Container = styled.div`
  max-width: 640px;
  margin-top: 200px;
`;
