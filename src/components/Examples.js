import React from 'react';
import styled from 'styled-components';

import Player from 'components/Player';
import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

import {colors} from 'BaseTheme';

export default function Examples({data, title = 'See Our Work'}) {
  return (
    <Container id="work">
      <SectionHeader text={title} />

      <PlayersContainer>
        {data?.map((item, index) => {
          return (
            <React.Fragment key={item.title}>
              <Player containerStyle={{maxWidth: '640px'}} border={index < data.length - 1} key={item.url} title={item.title} description={item.description} tags={item.tags} url={item.url} />

              {index < data.length - 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </PlayersContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 120px;
  width: 100%;
`;

const Divider = styled.div`
  width: calc(100% - 20px);
  height: 1px;
  background-color: ${colors.alpha.accent.replace('x', 0.2)};
  margin: 20px 10px;
`;

const PlayersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
