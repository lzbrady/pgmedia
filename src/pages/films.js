import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Link} from 'gatsby';
import styled from 'styled-components';

import Layout from 'layouts/layout';
import SEO from 'components/seo';

import Button from 'components/Button';
import Examples from 'components/Examples';
import PageMap from 'components/PageMap';
import Player from 'components/Player';
import SectionHeader from 'components/SectionHeader';
import Text from 'components/Text';

import FilmTypes from 'components/films/FilmTypes';

import {colors} from 'BaseTheme';
import VideoIcon from '@icons/video.svg';
import RocketIcon from '@icons/rocket.svg';
import ReelIcon from '@icons/reel.svg';

export default function Films({}) {
  const data = useStaticQuery(graphql`
    query Films {
      background: file(relativePath: {eq: "films.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2160) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      allFilmsJson {
        nodes {
          title
          description
          url
          tags
        }
      }
    }
  `);

  return (
    <Layout
      title={'Films'}
      subtitle={'the timeless storyteller'}
      imageData={data.background.childImageSharp.fluid}
      credit="Pretty Good Media"
      pageMapSections={[
        {
          title: 'Services',
          link: '#services',
          icon: <VideoIcon width={48} height={48} fill={colors.accent} />,
        },
        {
          title: 'Get Started',
          link: '#start',
          icon: <RocketIcon width={48} height={48} fill={colors.accent} />,
        },
        {
          title: 'Our Work',
          link: '#work',
          icon: <ReelIcon width={48} height={48} fill={colors.accent} />,
        },
      ]}>
      <Text h3 center margin="20px auto 0px;">
        Video Production based out of Boston, Massachusetts.
      </Text>
      <Text h3 fontSize={14} center margin="10px auto 40px;">
        Not based out of Boston? No problem, we'll come to you!
      </Text>
      {/* <PlayerContainer>
        <Player url="https://youtu.be/1RfiO0_PxOc" /> TODO: Add highlight reel
      </PlayerContainer> */}

      <SectionHeader text="Services" id="services" />
      <TextContainer>
        <Text margin="0px auto 20px;">
          There are many use cases for needing a video, from creating a blockbuster movie, to a 10 second ad for your business. We can help you figure out what you need and if we’re the right people
          for the job.
        </Text>
        <Text>
          If we both think we make a good fit, we’ll work with you every step of the way to make sure your vision comes to life. Creating a video is difficult, so we try to make it as simple and easy
          as possible, so you can focus on what you need to do.
        </Text>
      </TextContainer>

      <FilmTypes />

      <SectionHeader text="How It Works" id="start" />
      <TextContainer>
        <Text margin="0px auto 20px;">
          Making a video can be confusing. There’s so much that goes into it: technical details, creative decisions, cost, and more. We’ll work with you every step of the way, ensuring you end up with
          a technically sound, and cost effective video. Most importantly, we’ll make sure you end up with a video you’re proud of.
        </Text>
        <Text margin="0px auto 40px;">
          The first step in how to get your video made is contact us! Before we even start thinking about how much it might cost, we’ll get an understanding of what you want and what you're expecting
          out of your video. From there, we can determine if we're the right people for the job, what our pricing would look like, and determine a path forward.
        </Text>
      </TextContainer>

      <Button text="Contact Us" linkTo="/contact" containerStyle={{margin: '40px auto 20px'}} />
      <StyledLink to="/about/#process">Read more about our process</StyledLink>

      <Examples data={data?.allFilmsJson?.nodes} />
    </Layout>
  );
}

const PlayerContainer = styled.div`
  margin-bottom: 40px;
  width: 80%;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  flex: 1;
  margin: 0px 20px;
  text-align: center;
  padding: 6px 0px;
  box-sizing: border-box;
  color: ${colors.accent};

  :hover {
    color: ${colors.accentDark};
  }
`;

const TextContainer = styled.div`
  width: 80%;
  min-width: 280px;
  margin
`;
