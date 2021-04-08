import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from 'layouts/layout';
import SEO from 'components/seo';

import Button from 'components/Button';
import Destination from 'components/weddings/Destination';
import DreamDay from 'components/weddings/DreamDay';
import Pricing from 'components/weddings/Pricing';
import Examples from 'components/Examples';

import { colors } from 'BaseTheme';
import TravelIcon from '@icons/travel.svg';
import PricingIcon from '@icons/pricing.svg';
import ReelIcon from '@icons/reel.svg';

export default function Weddings({}) {
  const data = useStaticQuery(graphql`
    query Weddings {
      background: file(relativePath: { eq: "hot-air-balloon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2160) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      allWeddingsJson {
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
      title={'Wedding Videos'}
      subtitle={'to always remember your special day'}
      imageData={data.background.childImageSharp.fluid}
      pageMapSections={[
        {
          title: 'Travel',
          link: '#travel',
          icon: <TravelIcon width={48} height={48} fill={colors.accent} />,
        },
        {
          title: 'Pricing',
          link: '#pricing',
          icon: <PricingIcon width={48} height={48} fill={colors.accent} />,
        },
        {
          title: 'Our Work',
          link: '#work',
          icon: <ReelIcon width={48} height={48} fill={colors.accent} />,
        },
      ]}
    >
      <DreamDay />
      <Pricing />
      <Destination />
      <Examples data={data?.allWeddingsJson?.nodes} />
    </Layout>
  );
}
