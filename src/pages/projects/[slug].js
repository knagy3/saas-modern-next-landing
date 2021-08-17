import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'theme-ui';
import { useRouter } from "next/router";

import Layout from 'components/layout';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import Banner from 'components/projects/banner';
import Details from 'components/projects/details';
import Blog from 'components/projects/blog';
import Subscription from 'sections/subscription';

function Project() {
    const { asPath } = useRouter();
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        setUrl(asPath);
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout setUrl={setUrl}>
                    <Banner id={url.substr(-1)}/>
                    <Details id={url.substr(-1)}/>
                    <Blog setUrl={setUrl}/>
                    <Subscription />
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    )
}

export default Project;
