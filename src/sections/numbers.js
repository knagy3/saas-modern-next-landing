/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
// import SectionHeading from 'components/section-heading';
import StatItem from 'components/cards/stat-item';
import SectionHeader from 'components/section-header';
import useTranslation from 'hooks/useTranslation';

import workers from 'assets/images/icons/worker.svg';
import mixer from 'assets/images/icons/concrete-mixer.svg';
import beam from 'assets/images/icons/beam.svg';
import square from 'assets/images/icons/square.svg';

import workers_w from 'assets/images/icons/worker-white.svg';
import mixer_w from 'assets/images/icons/concrete-mixer-white.svg';
import beam_w from 'assets/images/icons/beam-white.svg';
import square_w from 'assets/images/icons/square-white.svg';

const Numbers = () => {
  const { t } = useTranslation();

  const data = {
    stats: [
      {
        id: 0,
        icon: workers,
        icon_w: workers_w,
        value: 62,
        suffix: '',
        title: t('numbers', 'n_0_title'),
      },
      {
        id: 1,
        icon: mixer,
        icon_w: mixer_w,
        value: 3220,
        suffix: ' m3',
        title: t('numbers', 'n_1_title'),
      },
      {
        id: 2,
        icon: beam,
        icon_w: beam_w,
        value: 1250,
        suffix: t('numbers', 'tons'),
        title: t('numbers', 'n_2_title'),
      },
      {
        id: 3,
        icon: square,
        icon_w: square_w,
        value: 5250,
        suffix: ' m2',
        title: t('numbers', 'n_3_title'),
      },
    ],
  };

  return (
    <Box as="section" id="numbers" sx={styles.section}>
      <Container>
        <SectionHeader
          slogan={t('numbers', 'slogan')}
          title={t('numbers', 'title')}
        />
        <Grid sx={styles.statsGrid}>
          {data.stats.map((stat) => (
            <TrackVisibility key={stat.id} once >
              <StatItem stat={stat} />
            </TrackVisibility>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Numbers;

const styles = {
  section: {
    pt: [18, null, 18, 20, null, 15],
    pb: [17, null, null, 40, null, 48],
  },
  statsGrid: {
    gap: [6, null, null, '60px 30px', '60px 80px', '60px 110px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 120px)',
      null,
      null,
      'repeat(4, 130px)',
      'repeat(4, 150px)',
    ],
    mt: [10],
  },
};
