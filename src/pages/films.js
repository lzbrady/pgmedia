import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
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

import { colors } from 'BaseTheme';
import VideoIcon from '@icons/video.svg';
import RocketIcon from '@icons/rocket.svg';
import ReelIcon from '@icons/reel.svg';

export default function Films({}) {
  const data = useStaticQuery(graphql`
    query Films {
      background: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
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
      ]}
    >
      <Player url="https://youtu.be/1RfiO0_PxOc" />

      <SectionHeader text="Needing a Video?" />
      <Text>
        There are many use cases for needing a video, from creating a blockbuster movie, to a 10 second ad for your
        business. We can help you figure out what you need and if we’re the right people for the job.
      </Text>
      <Text>
        If we both think we make a good fit, we’ll work with you every step of the way to make sure your vision comes to
        life. Creating a video is difficult, so we try to make it as simple and easy as possible, so you can focus on
        what you need to do.
      </Text>

      <FilmTypes />

      <SectionHeader text="How It Works" />
      <Text>
        Making a video can be confusing. There’s so much that goes into it: technical details, creative decisions, cost,
        and more. We’ll work with you every step of the way, ensuring you end up with a technically sound, and cost
        effective video. Most importantly, we’ll make sure you end up with a video you’re proud of.
      </Text>
      <Text>
        The first step to take is to contact us today. Before we even start thinking about how much it might cost, we’ll
        get an understanding of what you want, and work with you to get a full understanding of what you want to get out
        of your video.
      </Text>
      <Text>Start your journey to creating your video today by contacting us today.</Text>

      <Button text="Contact Us" linkTo="/contact" containerStyle={{ margin: '80px auto 20px' }} />
      <StyledLink to="/contact">Read more about our process</StyledLink>

      <Examples data={data?.allFilmsJson?.nodes} />
    </Layout>
  );
}

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
