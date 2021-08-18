import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

// import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import CareerCard from 'sections/career';
// import Faq from 'sections/faq';
import FeaturedSpace from 'sections/featured-space';
import Numbers from 'sections/numbers';
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
          <ServiceSection />
          <Numbers />
          <FeaturedSpace />
          <Clients />
          <Gallery />
          <CareerCard />
          {/* <Faq /> */}
          <Subscription />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
