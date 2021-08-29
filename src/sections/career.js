/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import Carousel from 'react-multi-carousel';
import { TiArrowForward } from "react-icons/ti";
import { IconContext } from "react-icons";
import { useEffect, useState } from 'react';
import { useColorMode } from 'theme-ui';

import SectionHeader from 'components/section-header';
// import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import colors from '../theme/index';
import useTranslation from 'hooks/useTranslation';

import ShapeLeft from 'assets/images/shape-left.png';
import ShapeRight from 'assets/images/shape-left2.svg';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  // desktop: {
  //   breakpoint: { max: 3000, min: 1619 },
  //   items: 3,
  //   slidesToSlide: 3, // optional, default to 1.
  // },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
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

export default function CareerCard({ setPlan }) {
  const [ mode ] = useColorMode();
  const [colorPrim, setColorPrim] = useState('');
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      title: t('career', 'n_1_title'),
      section1: t('career', 'n_1_section1'),
      tasks: [
        t('career', 'n_1_job_1'),
        t('career', 'n_1_job_2'),
        t('career', 'n_1_job_3'),
        t('career', 'n_1_job_4'),
        t('career', 'n_1_job_5'),
        t('career', 'n_1_job_6'),
      ],
      section2: t('career', 'n_1_section2'),
      needs: [
        t('career', 'n_1_needs_1'),
        t('career', 'n_1_needs_2'),
        t('career', 'n_1_needs_3'),
      ],
    },
    {
      id: 2,
      title: t('career', 'n_2_title'),
      section1: t('career', 'n_2_section1'),
      tasks: [
        t('career', 'n_2_job_1'),
        t('career', 'n_2_job_2'),
        t('career', 'n_2_job_3'),
        t('career', 'n_2_job_4'),
        t('career', 'n_2_job_5'),
      ],
      section2: t('career', 'n_2_section2'),
      needs: [
        t('career', 'n_2_needs_1'),
        t('career', 'n_2_needs_2'),
        t('career', 'n_2_needs_3'),
      ],
    },
    {
      id: 3,
      title: t('career', 'n_3_title'),
      section1: t('career', 'n_3_section1'),
      tasks: [
        t('career', 'n_3_job_1'),
        t('career', 'n_3_job_2'),
        t('career', 'n_3_job_3'),
        t('career', 'n_3_job_4'),
        t('career', 'n_3_job_5'),
      ],
      section2: t('career', 'n_3_section2'),
      needs: [
        t('career', 'n_3_needs_1'),
        t('career', 'n_3_needs_2'),
        t('career', 'n_3_needs_3'),
      ],
    },
  ];

  useEffect(() => {
    if( mode === 'dark' ) {
      setColorPrim(colors.colors.modes.dark.primary);
    } else {
      setColorPrim(colors.colors.primary);
    }
  }, [mode]);

  const handleClick = () => {
    // window.scrollTo(0, 0);
    setPlan('career');
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section id="career" sx={{ variant: 'section.testimonial' }}>
    {/* <section id="career" > */}
      <Container css={{ textAlign: 'center' }}>
        <SectionHeader 
          slogan={t('career', 'slogan')}
          title={t('career', 'title')}
        />
      </Container>
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
          itemClass="carousel-item"
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
            <Box sx={styles.reviewCard} key={item.id}>
              {/* <Rating rating={item.review} /> */}
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.section}>{item.section1}</Text>
              <ul sx={styles.list}>
                {item.tasks.map((task, index) => (
                  <li sx={styles.item}  key={index}> <p sx={{my:['14px', '12px'],}}> {task} </p> </li>
                ))}
              </ul>
              <Text sx={styles.section}>{item.section2}</Text>
              <ul sx={styles.list}>
                {item.needs.map((need, index) => (
                  <li sx={styles.item} key={index}> <p> {need} </p> </li>
                ))}
              </ul>
              <div className="card-footer">
                <Box sx={styles.apply} onClick={() => handleClick()}>
                  <Heading as="h4" sx={styles.heading}>
                    {t('career', 'button')}
                  </Heading>
                  <IconContext.Provider
                    value={{color:colorPrim, size:'24px'}}
                  >
                    <TiArrowForward/>
                  </IconContext.Provider>
                </Box>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  apply: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    '.carousel-container': {
      mx: -3,
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(40% + 865px)',
      ],
    },
    '.carousel-item': {
      '&:nth-of-type(2n)': {
        '&::after': {
          position: 'absolute',
          content: '""',
          top: '33px',
          right: '22px',
          height: '100%',
          width: '26%',
          zIndex: 1,
          backgroundImage: `url(${ShapeLeft})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: 'top right',
          backgroundSize: '100%',
        },
      },
      '&:nth-of-type(2n-1)': {
        '&::after': {
          position: 'absolute',
          content: '""',
          top: '33px',
          right: '22px',
          height: '100%',
          width: '26%',
          zIndex: 1,
          backgroundImage: `url(${ShapeRight})`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: 'top right',
          backgroundSize: '100%',
        },
      },
    },
  },
  // carouselWrapper: {
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  //   flexDirection: 'column',
  //   alignItems: 'flex-end',
  //   mt: '-30px',
  //   px: '15px',
  //   '.carousel-container': {
  //     width: '100%',
  //     maxWidth: [
  //       '100%',
  //       null,
  //       null,
  //       '750px',
  //       '1000px',
  //       '1180px',
  //       null,
  //       'calc(50% + 865px)',
  //     ],
  //     mr: ['auto', null, null, null, null, null, null, '-220px'],
  //     ml: 'auto',
  //     '.react-multi-carousel-item': {
  //       transition: 'all 0.25s',
  //     },
  //     '.react-multi-carousel-item--active:nth-of-type(4n)': {
  //       opacity: '0.5',
  //       '@media screen and (max-width: 1620px)': {
  //         opacity: 1,
  //       },
  //     },
  //   },
  // },
  reviewCard: {
    backgroundColor: (theme) => theme.colors.background,
    boxShadow: (theme) => theme.colors.cardBoxShadow,
    transition: 'all 0.3s',
    borderRadius: '4px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    textAlign: 'left',
    m: [
      '28px 15px 30px 15px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: (theme) => theme.colors.cardBoxShadowHover,
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  list: {
    lineHeight: '1.25',
    listStyle: 'disc',
    m: 0,
    px: 3,
    py: 1,
  },
  item: {
    my: ['14px', '12px'],
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: 1.25,
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 750,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  section: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: 1.4,
  },
  heading: {
    fontSize: ['14px', null, null, '18px'],
    // fontWeight: 620,
    color: (theme) => theme.colors.primary,
    lineHeight: 1.4,
  },
  designation: {
    color: (theme) => theme.colors.primary,
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
