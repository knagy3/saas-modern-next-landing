import React from 'react'
import { ThemeProvider } from 'theme-ui';

import Layout from 'components/layout';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Banner from 'components/projects/banner';
import Details from 'components/projects/details';

function Project({props}) {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                <Banner />
                <Details />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    )
}

export default Project;
