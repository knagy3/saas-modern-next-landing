/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import PostCard from 'components/post-card.js';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';
import PostThumb1 from 'assets/images/blog/1.png';
import PostThumb2 from 'assets/images/blog/2.png';
import PostThumb3 from 'assets/images/blog/3.png';
import PostThumb4 from 'assets/images/blog/4.jpg';

const data = [
  {
    id: 1,
    imgSrc: PostThumb1,
    altText: 'Marketing',
    postLink: '#',
    title: 'Product Marketing: Monopoly Market',
    authorName: 'Cali Cartel',
    date: 'Oct 20, 2020',
  },
  {
    id: 2,
    imgSrc: PostThumb2,
    altText: 'Creative',
    postLink: '#',
    title: 'Product Marketing: Creative Market',
    authorName: 'James Carter',
    date: 'Oct 20, 2020',
  },
  {
    id: 3,
    imgSrc: PostThumb3,
    altText: 'Startup',
    postLink: '#',
    title: 'Product Marketing: Startup Product Sales',
    authorName: 'Aston Aagar',
    date: 'Oct 20, 2020',
  },
  {
    id: 4,
    imgSrc: PostThumb4,
    altText: 'HardCore',
    postLink: '#',
    title: 'Product Marketing: Creative Market',
    authorName: 'James Daniel',
    date: 'Nov 21, 2021',
  },
];

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
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Blog() {
  return (
    <Box id="blog" as="section" sx={styles.section}>
      <Container>
        <SectionHeader
          slogan="SIMILAR PROJECTS"
          title="Explore our projects for your business solution"
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
            {data.map((item) => (
              <PostCard
                key={item.id}
                src={item.imgSrc}
                alt={item.altText}
                postLink={item.postLink}
                title={item.title}
                authorName={item.authorName}
                date={item.date}
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
