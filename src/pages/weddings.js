import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import Layout from 'layouts/Layout';
import SEO from 'components/seo';

import Destination from 'components/weddings/Destination';
import DreamDay from 'components/weddings/DreamDay';
import Examples from 'components/Examples';
import Pricing from 'components/weddings/Pricing';
import Text from 'components/Text';

import {colors} from 'BaseTheme';
import TravelIcon from '@icons/travel.svg';
import PricingIcon from '@icons/pricing.svg';
import ReelIcon from '@icons/reel.svg';

export default function Weddings({}) {
  const data = useStaticQuery(graphql`
    query Weddings {
      background: file(relativePath: {eq: "weddings.jpg"}) {
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
      credit="Jeremy Wong Weddings"
      pageMapSections={[
        {
          title: 'Pricing',
          link: '#pricing',
          icon: <PricingIcon width={48} height={48} fill={colors.accent} />,
        },
        {
          title: 'Travel',
          link: '#travel',
          icon: <TravelIcon width={48} height={48} fill={colors.accent} />,
        },
        {
          title: 'Our Work',
          link: '#work',
          icon: <ReelIcon width={48} height={48} fill={colors.accent} />,
        },
      ]}>
      <Text h3 center margin="20px auto 0px;">
        Wedding films based out of Boston, Massachusetts.
      </Text>
      <Text h3 fontSize={14} center margin="10px auto 40px;">
        Not based out of Boston? No problem, we'll come to you!
      </Text>

      <DreamDay />
      <Pricing />
      <Destination />
      <Examples data={data?.allWeddingsJson?.nodes} />
    </Layout>
  );
}
