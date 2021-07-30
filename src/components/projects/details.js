import React from 'react'
import { Box, Divider, Grid, Image } from 'theme-ui'

import projectItems from './project.data';

import Pic1 from 'assets/images/projects/1.jpg';
import Pic2 from 'assets/images/projects/2.jpg';
import Pic3 from 'assets/images/projects/3.jpg';
import Pic4 from 'assets/images/projects/4.jpg';

export default function Details({ id }) {
    return (
        <Box sx={styles.section}>
            <Grid  width={[250, 250, 250]} sx={styles.grid}>
                <Box  sx={{marginRight:'auto'}}>
                    <Image src={Pic1} alt="pic1" />
                </Box>
                <Box sx={{margin:'auto'}}>
                    <Image src={Pic2} alt="pic2"/>
                </Box>
                <Box sx={{marginLeft:'auto'}}>
                    <Image src={Pic3} alt="pic3"/>
                </Box>
            </Grid>
            <Grid gap={0} columns={['1fr 2fr']} width={[250, 450]}  sx={styles.grid}>
                <Box sx={styles.heading}>
                    <Box >
                        <h2>DATE</h2>
                        <p>{projectItems[id]?.date}</p>
                    </Box>
                    <Box >
                        <h2>CLIENT</h2>
                        <p>{projectItems[id]?.client}</p>
                    </Box>
                    <Box >
                        <h2>PROJECT TYPE</h2>
                        <p>{projectItems[id]?.project_type}</p>
                    </Box>
                    <Box >
                        <h2>LOCATION</h2>
                        <p>{projectItems[id]?.location}</p>
                    </Box>
                    <Box >
                        <h2>YEAR</h2>
                        <p>{projectItems[id]?.year}</p>
                    </Box>
                </Box>
                <Box sx={styles.imageL} >
                    <Image src={Pic4} alt="pic4" style={{width:'1000px'}}/>
                </Box>
            </Grid>
            <Box sx={styles.description}>
                <h2>Creating a sustainable future through building preservation, 
                green architecture, and smart design</h2>
                <p>Designers think everything done by someone else is awful, and that 
                    they could do it better themselves, which explains why I designed 
                    my own living room carpet, I suppose. the architect represents neither 
                    a Dionysian nor an Apollinian condition: here it is the mighty act of will, 
                    the will which moves mountains, the intoxication of the strong will, which 
                    demands artistic expression. </p>
                <p>Designers think everything done by someone else is awful, and that 
                    they could do it better themselves, which explains why I designed 
                    my own living room carpet, I suppose. the architect represents neither 
                    a Dionysian nor an Apollinian condition: here it is the mighty act of will, 
                    the will which moves mountains, the intoxication of the strong will, which 
                    demands artistic expression. </p>
            </Box>
            <Divider sx={styles.divider}/>
        </Box>
    )
}

const styles = {
    divider: {
        alignSelf: 'center',
        mt: [10, 30],
        mx: 'auto',
        borderColor: (theme) => theme.colors.primary,
        // width: '85%',
        // width: ['85%', '93%'],
    },
    section: {
        mx: 'auto',
        backgroundColor: (theme) => theme.colors.background,
        pt: [30, 30, 40, 50, 60],
        px: [40, 60, 60, 90, 210],
        pb: [20, 20, 30, 40, 40],
        // pb: [60, 60, 60, 90, 80, 85],
    },
    heading: {
        maxWidth: '325px',
        color: (theme) => theme.colors.text,
        h2: {
            m: [0, 0],
            fontSize: [22, 28, '28px'],
            // lineHeight: 1.4,
            letterSpacing: 'heading',
        },
        p: {
            // lineHeight: [2, 3.12],
            mt: [10, 0],
            letterSpacing: 'heading',
            color: (theme) => theme.colors.text,
        },
    },
    imageL: {
        my: 'auto',
        marginLeft: 'auto',
        justifContent: 'center',
        alignSelf: 'center',
    },
    description: {
        textAlign: 'justify',
        alignSelf: 'center',
        // px: [30, 30, 40, 50, 60],
        color: (theme) => theme.colors.text,
        h2: {
            m: [0, 0],
            fontSize: [22, 28, '28px'],
            letterSpacing: 'heading',
        },
        p: {
            // lineHeight: [2, 3.12],
            py: [1, 2],
            fontSize: [16, 18],
            mt: [10, 10],
            letterSpacing: 'heading',
            color: (theme) => theme.colors.text,
        },
    },
    grid: {
        // px: [30, 30, 40, 50, 60],
        py: [1, 1, 2, 3, 4],
        // px: [60, 60, 60, 90, 80, 85],
    },
  };
