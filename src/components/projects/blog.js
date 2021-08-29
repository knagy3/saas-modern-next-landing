/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import Carousel from 'react-multi-carousel';

import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import projectItems from './project.data';
import useTranslation from 'hooks/useTranslation';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1310, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Blog({ setUrl }) {
  const { t } = useTranslation();

  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeader
          slogan={t('project', 'blog_slogan')}
          title={t('project', 'blog_title')}
        />
        <Box sx={styles.carouselWrapper}>
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="carousel-container"
            customButtonGroup={<ButtonGroup />}
            dotListClass="test"
            draggable={true}
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
          >
            {projectItems.map((item) => (
              <PostCard
                key={item.id}
                id={item.id}
                src={item.imgSrc}
                alt={item.altText}
                title={t('project', `pr_${item.id}_project_type`)}
                client={item.client}
                date={item.year}
                setUrl={setUrl}
              />
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    pt: [30, 30, 6],
    pb: [20, 30, 8],
  },
  carouselWrapper: {
    '.carousel-container': {
      mx: -3,
    },
  },
};
