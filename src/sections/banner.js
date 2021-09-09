/** @jsx jsx */
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import { motion } from "framer-motion";
import { buildImageUrl } from 'cloudinary-build-url';

import useTranslation from '../hooks/useTranslation';

const bannerUrl = buildImageUrl('sections/banner/banner-bg', {
  cloud: {
    cloudName: 'dakiep',
  },
  transformations: {
    quality: 'auto',
  },
});

export default function Banner() {
  const { t } = useTranslation();
  
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              // borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}
            transition={{
              delay: 2,
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1]
            }}
            sx={styles.bannerContent}
          >
            <Heading as="h1" sx={styles.heroTitle}>
              {t('banner', 'slogan')}
            </Heading>
            <Text as="p" sx={styles.desc}>
              {t('banner', 'text')}
            </Text>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerUrl}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    // backgroundColor: rgba('#fff', 0.93),
    backgroundColor: (theme) => theme.colors.banner,
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 30px 45px',
    },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 32, 36, 36],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: [28, 40],
    },
  },
  desc: {
    fontSize: [16, 16, 16, 17, 19],
    lineHeight: [1.53, 1.53, 1.53, 2, 2, 2,],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
