/** @jsx jsx */
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import { motion } from "framer-motion";

import useTranslation from '../../hooks/useTranslation';
import projectItems from './project.data';

export default function Banner({ id }) {
  const { t } = useTranslation();

  return (
    <Box 
      as="div" 
      sx={{ 
        background: `url(${projectItems[id]?.bannerImg}) no-repeat center top / cover`,
        backgroundSize: ['100%', null, null, null, 'cover'],
      }}
    >
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
              {t('project', `pr_${id}_slogan`)}
            </Heading>
            <Text as="p" sx={styles.desc}>
              -{" "}{projectItems[id]?.name}
            </Text>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  // section: {
  //   background: `url(${bannerBg1}) no-repeat center top / cover`,
  //   backgroundSize: ['100%', null, null, null, 'cover'],
  // },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '25vh', '50vh'],
  },
  bannerContent: {
    // display: 'flex',
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
      '30px 50px 60px',
    ],
    borderRadius: 5,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, null],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '20px 40px 20px',
    },
  },
  heroTitle: {
    justifyContent: 'center',
    fontSize: [22, 28, 28, 32, 36, 36],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.1, null, null, null, null, null, 1.2],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 22,
    },
  },
  desc: {
    fontSize: [15, 16, 15, 20],
    lineHeight: [1.53, 1.53, 1.53, 2, 2, 2, 2],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 20],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 12,
    },
  },
};
