/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import Masonry from 'react-masonry-component';

import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';
import { useRouter } from "next/router";

import projectItems from '../components/projects/project.data';

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  const router = useRouter();

  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Working space"
          title="Let’s meet our interior room decoration"
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
          Explore More <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 85],
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
