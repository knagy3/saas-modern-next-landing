/** @jsx jsx */
import { jsx, Box, Button, Container, Image } from 'theme-ui';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Slider from 'react-slick';
import { useColorMode } from 'theme-ui';

import SectionHeader from 'components/section-header';
import hilti from 'assets/images/clients/hilti.png';
import meva_b from 'assets/images/clients/meva-black.png';
import meva_w from 'assets/images/clients/meva-white.png';
import mobilbox_b from 'assets/images/clients/mobilbox-black.png';
import mobilbox_w from 'assets/images/clients/mobilbox-white.png';
import peri from 'assets/images/clients/peri.png';
// import google from 'assets/images/clients/google.png';

import useTranslation from 'hooks/useTranslation';

const clients = [
  {
    id: 1,
    name: 'hilti',
    logo_b: hilti,
    logo_w: hilti,
  },
  {
    id: 2,
    name: 'mobilbox',
    logo_b: mobilbox_b,
    logo_w: mobilbox_w,
  },
  {
    id: 3,
    name: 'meva',
    logo_b: meva_b,
    logo_w: meva_w,
  },
  {
    id: 5,
    name: 'peri',
    logo_b: peri,
    logo_w: peri,
  },
  // {
  //   id: 4,
  //   name: 'Google',
  //   logo_b: google,
  //   logo_w: google,
  // },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      className={className}
      sx={styles.paginationButton}
      onClick={onClick}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const Clients = () => {
  const [ mode ] = useColorMode();
  const { t } = useTranslation();

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickArrow control="next" />,
    prevArrow: <SlickArrow control="prev" />,
    responsive: [
      {
        breakpoint: 100000,
        settings: 'unslick',
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeader
          slogan={t('clients', 'slogan')}
          title={t('clients', 'title')}
        />
        <Slider sx={styles.clients} {...settings}>
          {clients?.map((client) => (
            <Box key={client.id}  sx={styles.logo}>
              <Image 
                sx={{objectFit: 'contain'}} 
                loading="lazy" 
                src={ mode === 'dark' ? client.logo_w : client.logo_b} 
                alt={client.name} />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [50, 50, 50, 70, 60, 80],
    pb: [30, 40, 50, 60, 50, 80],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    pt: [0, 0, 15, 15, 15, 3],
    '&.slick-slider': {
      marginBottom: '40px',
    },
    '.slick-track': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  logo: {
    maxWidth: ['140px', '195px'],
    maxHeight: ['69px', '99px'],
    display: 'flex !important',
    justifyContent: 'center',
    mx: '10px',
    ':focus': {
      outline: 'none',
    },
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
};
