import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';

export default function FilmTypes({}) {
  return (
    <Container>
      <VideoType>
        <Text h2 center>Promotions</Text>
      </VideoType>

      <VideoType>
        <Text h2 center>Ads</Text>
      </VideoType>

      <VideoType>
        <Text h2 center>Music Videos</Text>
      </VideoType>

      <VideoType>
        <Text h2 center>Short Films</Text>
      </VideoType>

      <VideoType>
        <Text h2 center>Documentaries</Text>
      </VideoType>

      <VideoType>
        <Text h2 center>Commercials</Text>
      </VideoType>

      <VideoType>
        <Text h2 center>Whatever you want!</Text>
      </VideoType>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 40px auto 100px;
`;

const VideoType = styled.div`
  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
