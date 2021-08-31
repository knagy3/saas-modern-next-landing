/** @jsx jsx */
import { rgba } from 'polished';
import { useState, useRef, useEffect } from 'react';
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import { buildImageUrl } from 'cloudinary-build-url';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';

import SectionHeading from 'components/section-heading';
import Progressbar from 'components/progressbar';
import useTranslation from 'hooks/useTranslation';
// import Feature from 'components/cards/feature';
import Image from 'components/image';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const cloud = {
  cloudName: 'dakiep'
};
const transformations = {
  quality: '50',
};
const slide1Url = buildImageUrl('sections/about/slide_1', { cloud, transformations });
const slide2Url = buildImageUrl('sections/about/slide_2', { cloud, transformations });
const slide3Url = buildImageUrl('sections/about/slide_3', { cloud, transformations });
const slide4Url = buildImageUrl('sections/about/slide_4', { cloud, transformations });

const data = {
  gallery: [
    {
      id: 1,
      image: slide1Url,
      title: 'Calgary, Canada',
      desc: 'July 31, 2020',
    },
    {
      id: 2,
      image: slide2Url,
      title: 'New York, USA',
      desc: 'April 2, 2020',
    },
    {
      id: 3,
      image: slide3Url,
      title: 'Hamilton, Canada',
      desc: 'Jan 27, 2018',
    },
    {
      id: 4,
      image: slide4Url,
      title: 'Ahvaz, Iran',
      desc: 'July 17, 2019',
    },
  ],
};

const Featured = () => {
  const isPause = useRef(false);
  const swiperRef = useRef(null);
  const [togglePlay, setTogglePlay] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);
  const { t } = useTranslation();

  let time = 3;
  let tick, percentTime;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef?.current?.swiper?.slideNext();
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }

  useEffect(() => {
    startProgressbar();
  }, []);

  // const handleToggle = () => {
  //   isPause.current = !isPause.current;
  //   setTogglePlay((prev) => !prev);
  // };

  return (
    <Box id="feature" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <SectionHeading
              sx={styles.heading}
              title={t('featured', 'title')}
              description={t('featured', 'description1')}
            />
            <SectionHeading
              sx={styles.heading2}
              description={t('featured', 'description2')}
            />
          </Box>
          <Box sx={styles.rightContent}>
            {/* <Progressbar
              sx={styles.progressbar}
              togglePlay={togglePlay}
              handleClick={handleToggle}
              currentWidth={currentWidth}
            /> */}
            <Swiper
              loop={true}
              effect="fade"
              ref={swiperRef}
              spaceBetween={0}
              slidesPerView={1}
              pagination={true}
            >
              {data?.gallery?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box as="figure" sx={styles.image}>
                    <Image loading="lazy" src={item.image} alt="" />
                    {/* <Box as="figcaption">
                      <Box>
                        <Heading as="h4">{item.title}</Heading>
                        <Text as="p">{item.desc}</Text>
                      </Box>
                    </Box> */}
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Featured;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
  },
  contentWrapper: {
    gap: [null, null, null, null, '30px'],
    display: ['flex', null, null, null, 'grid'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, null],
    gridTemplateColumns: ['unset', null, null, null, 'repeat(2,1fr)'],
  },
  leftContent: {
    m: [0, '30px 0px 0', '30px 50px 0', 0],
  },
  heading: {
    textAlign: ['center', null, null, null, 'left'],
    maxWidth: 490,
    margin: ['0 auto 10px', null, null, null, '0 0 40px'],
    h2: {
      fontSize: [22, null, null, 30, null, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
    },
    p: {
      fontSize: ['15px', null, null, '17px'],
      mt: [3, null, null, 5],
    },
  },
  heading2: {
    textAlign: ['center', null, null, null, 'left'],
    maxWidth: 490,
    margin: ['0 auto 40px', null, null, null, '0 0 80px'],
    h2: {
      fontSize: [22, null, null, 30, null, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
    },
    p: {
      fontSize: ['15px', null, null, '17px'],
      mt: [1, null, null, 2],
    },
  },
  featureWrapper: {
    gap: ['40px 20px', null, null, null, '30px'],
    display: 'grid',
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      null,
      'repeat(3,180px)',
      'repeat(3,1fr)',
    ],
    justifyContent: ['unset', null, null, 'center', 'flex-start'],
  },
  rightContent: {
    position: 'relative',
    mt: [3, null, null, null, 0],
    maxWidth: '100%',
    '.swiper-pagination-bullets': {
      width: ['325', '375px', null, null, '425px','600px'],
      bottom: 20,
    },
    '.swiper-pagination-bullet': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 10,
      height: 10,
      opacity: 1,
      mx: 5,
      ':focus': {
        outline: 0,
      },
    },
    '.swiper-pagination-bullet-active': {
      backgroundColor: 'rgba(255,255,255,1)',
    },
  },
  progressbar: {
    position: 'absolute',
    left: [15, 25],
    top: [46, 53],
    zIndex: 2,
  },
  progressBar: {
    position: 'relative',
    mr: 4,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    padding: 0,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      outline: '0 none',
    },
  },
  image: {
    // borderRadius: 10,
    // overflow: 'hidden',
    // width: ['325px', '375px', null, null, '425px','600px'],
    // height: ['390px', '435px', null, null, '500px','700px'],
    // position: 'relative',
    // display: 'flex',
    // alignItems: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    '> img': {
      borderRadius: 10,
    },
    figcaption: {
      backgroundColor: 'primary',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 30,
      borderRadius: 5,
      color: '#fff',
      padding: ['20px 20px 20px 80px', '25px 25px 25px 90px'],
      h4: {
        lineHeight: 1,
        fontWeight: 'bold',
        fontSize: [14, 18],
        letterSpacing: 'heading',
      },
      p: {
        fontSize: [13, 16],
        fontWeight: 500,
        letterSpacing: 'heading',
        color: rgba('#fff', 0.6),
        marginTop: [2],
      },
    },
  },
};
