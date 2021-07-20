import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Blog from 'sections/blog';
import Clients from 'sections/clients';
import Faq from 'sections/faq';
import FeaturedSpace from 'sections/featured-space';
import Services from 'sections/services';
import Gallery from 'sections/gallery';
import ServiceSection from 'sections/service-section';
import { StickyProvider } from '../contexts/app/app.provider';
import Subscription from 'sections/subscription';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          {/* <SEO title="Startup Landing 007" /> */}
          <Banner />
          <Clients />
          <ServiceSection />
          <FeaturedSpace />
          <Gallery />
          <Services />
          <Blog />
          <Faq />
          <Subscription />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
