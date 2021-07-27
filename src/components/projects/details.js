import React from 'react'
import { Box, Grid, Image } from 'theme-ui'

import Pic1 from 'assets/images/projects/1.jpg';
import Pic2 from 'assets/images/projects/2.jpg';
import Pic3 from 'assets/images/projects/3.jpg';

export default function Details() {
    return (
        <Box>
            <h1>Project Name</h1>
            <Grid width={[128, null, 192]}>
                <Box bg="primary">
                    <Image src={Pic1} alt="pic1" />
                </Box>
                <Box bg="muted">
                    <Image src={Pic2} alt="pic1" />
                </Box>
                <Box bg="primary">
                    <Image src={Pic3} alt="pic1" />
                </Box>
            </Grid>
            <Grid gap={3} columns={[2, '1fr 2fr']}>
                <Box bg="primary">
                    Box
                </Box>
                <Box bg="muted">
                    Box
                </Box>
            </Grid>
            
        </Box>
    )
}
