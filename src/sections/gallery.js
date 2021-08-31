/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';

import SectionHeader from 'components/section-header';
import GalleryCard from 'components/cards/gallery-card';
import { useRouter } from "next/router";

import projectItems from '../components/projects/project.data';
import useTranslation from 'hooks/useTranslation';

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeader
          sx={styles.heading}
          slogan={t('gallery', 'slogan')}
          title={t('gallery', 'title')}
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {projectItems?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
        <Button 
          variant="muted_2" 
          sx={styles.button}
          onClick={() => router.push("/projects/1")}
        >
          {t('gallery', 'button')}
          <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [50, 50, 50, 70, 60, 100],
    pb: [40, 40, 50, 80, 80, 85],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
