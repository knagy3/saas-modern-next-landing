import React, { useEffect } from 'react'
import { ThemeProvider } from 'theme-ui';
import { useRouter } from "next/router";

import Layout from 'components/layout';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Banner from 'components/projects/banner';
import Details from 'components/projects/details';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';

function Project({  } ) {
    const { asPath } = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <Banner id={asPath.substr(-1)}/>
                    <Details id={asPath.substr(-1)}/>
                    <Blog />
                    <Subscription />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    )
}

export default Project;
