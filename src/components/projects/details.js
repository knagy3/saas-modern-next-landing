import React, { useState } from 'react'
import { Box, Divider, Grid, Image } from 'theme-ui'
import { buildImageUrl } from 'cloudinary-build-url';

import projectItems from './project.data';
import useTranslation from '../../hooks/useTranslation';
import Lightbox from "react-image-lightbox";

const cloud = {
    cloudName: 'dakiep'
};

export default function Details({ id }) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const handleClose = (e) => {
        e.preventDefault();
        setIsOpen(false);
    };
    const handlePrev = (e) => {
        e.preventDefault();
        setPhotoIndex((photoIndex + images.length - 1) % images.length);
    };
    const handleNext = (e) => {
        e.preventDefault();
        setPhotoIndex((photoIndex + 1) % images.length);
    };
    const openSlideshow = (e, id) => {
        e.preventDefault();
        // console.log(id);
        setPhotoIndex(id);
        setIsOpen(true);
    };

    const img1Url = buildImageUrl(`projects/proj_${id}/1`, { cloud });
    const img2Url = buildImageUrl(`projects/proj_${id}/2`, { cloud });
    const img3Url = buildImageUrl(`projects/proj_${id}/3`, { cloud });
    const img4Url = buildImageUrl(`projects/proj_${id}/4`, { cloud });

    const images = [
        img1Url,
        img2Url,
        img3Url,
        img4Url
    ];

    return (
        <Box sx={styles.section}>
            <Grid  width={[250, 250, 250]} sx={styles.grid}>
                <Box  sx={{cursor:'pointer',marginRight:'auto'}}>
                    <Image src={img1Url} alt="pic1" onClick={(e) => openSlideshow(e, 0)}/>
                </Box>
                <Box sx={{cursor:'pointer',margin:'auto'}}>
                    <Image src={img2Url} alt="pic2" onClick={(e) => openSlideshow(e, 1)}/>
                </Box>
                <Box sx={{cursor:'pointer',marginLeft:'auto'}}>
                    <Image src={img3Url} alt="pic3" onClick={(e) => openSlideshow(e, 2)}/>
                </Box>
            </Grid>
            <Grid gap={0} columns={['1fr 2fr']} width={[250, 450]}  sx={styles.grid}>
                <Box sx={styles.heading}>
                    <Box >
                        <h2>{t('project', 'date')}</h2>
                        <p>{projectItems[id]?.date}</p>
                    </Box>
                    <Box >
                        <h2>{t('project', 'client')}</h2>
                        <p>{projectItems[id]?.client}</p>
                    </Box>
                    <Box >
                        <h2>{t('project', 'type')}</h2>
                        <p>{t('project', `pr_${id}_project_type`)}</p>
                    </Box>
                    <Box >
                        <h2>{t('project', 'location')}</h2>
                        <p>{projectItems[id]?.location}</p>
                    </Box>
                    {/* <Box >
                        <h2>YEAR</h2>
                        <p>{projectItems[id]?.year}</p>
                    </Box> */}
                </Box>
                <Box sx={styles.imageL} >
                    <Image src={img4Url} alt="pic4" style={{cursor:'pointer',width:'1000px'}} 
                        onClick={(e) => openSlideshow(e, 3)}
                    />
                </Box>
            </Grid>
            <Box sx={styles.description}>
                <h2>{t('project', `pr_${id}_header`)}</h2>
                <p>{t('project', `pr_${id}_p1`)}</p>
                <p>{t('project', `pr_${id}_p2`)}</p>
            </Box>
            <Divider sx={styles.divider}/>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={(e) => handleClose(e)}
                    onMovePrevRequest={(e) => handlePrev(e)}
                    onMoveNextRequest={(e) => handleNext(e)}
                />
            )}
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
