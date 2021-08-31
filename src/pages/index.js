import React, { useState } from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

// import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import CareerCard from 'sections/career';
// import Faq from 'sections/faq';
import Featured from 'sections/featured';
import Numbers from 'sections/numbers';
import Gallery from 'sections/gallery';
import Service from 'sections/service';
import { StickyProvider } from '../contexts/app/app.provider';
import Subscription from 'sections/subscription';

export default function IndexPage() {
  const [plan, setPlan] = useState('business');

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          {/* <SEO title="Startup Landing 007" /> */}
          <Banner />
          <Service />
          <Numbers />
          <Featured />
          <Clients />
          <Gallery />
          <CareerCard setPlan={setPlan} />
          {/* <Faq /> */}
          <Subscription plan={plan} setPlan={setPlan} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
