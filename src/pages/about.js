import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from 'layouts/Layout';
import SEO from 'components/seo';

import Tagline from 'components/about/Tagline';
import OurTeam from 'components/about/OurTeam';
import Process from 'components/about/Process';
import Examples from 'components/Examples';

import { colors } from 'BaseTheme';
import TeamIcon from '@icons/team.svg';
import ProcessIcon from '@icons/process.svg';

export default function About({}) {
  const data = useStaticQuery(graphql`
    query About {
      background: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2160) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout
      title={'About Us'}
      subtitle={'pretty good media'}
      imageData={data.background.childImageSharp.fluid}
      pageMapSections={[
        {
          title: 'Our Team',
          link: '#team',
          icon: <TeamIcon width={48} height={48} fill={colors.accent} />,
        },
        {
          title: 'Our Process',
          link: '#process',
          icon: <ProcessIcon width={48} height={48} fill={colors.accent} />,
        },
      ]}
    >
      <Tagline />
      <OurTeam />
      <Process />
    </Layout>
  );
}
