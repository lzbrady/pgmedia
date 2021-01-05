import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import Layout from 'layouts/layout';
import SEO from 'components/seo';
import PageMap from 'components/PageMap';

import ServicesIcon from '@icons/play.svg';

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
    }
  `);

  return (
    <Layout title={'Films'} subtitle={'the timeless storyteller'} imageData={data.background.childImageSharp.fluid}>
      <PageMap
        sections={[
          {
            title: 'Services',
            link: '#services',
            icon: <ServicesIcon width={24} height={24} />,
          },
          {
            title: 'Get Started',
            link: '#start',
            icon: <ServicesIcon width={24} height={24} />,
          },
          {
            title: 'Our Work',
            link: '#work',
            icon: <ServicesIcon width={24} height={24} />,
          },
        ]}
      />
    </Layout>
  );
}
