import React from 'react';

import Layout from 'layouts/layout';
import SEO from 'components/seo';
import Text from 'components/Text';
import ContactForm from 'components/contact/ContactForm';

const Contact = () => (
  <Layout>
    <SEO
      title="Contact"
      keywords={[
        `custom`,
        `website`,
        `graphics`,
        `video`,
        `production`,
        `social`,
        `media`,
        `contact`,
        `indiana`,
        `indianapolis`,
      ]}
    />

    <Text h1 center>Contact Us</Text>

    <ContactForm />
  </Layout>
);

export default Contact;
