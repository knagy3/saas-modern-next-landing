/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
// import SectionHeading from 'components/section-heading';
import StatItem from 'components/cards/stat-item';
import { FaExpand, FaUsers } from 'react-icons/fa';
import { GiConcreteBag, GiMetalBar } from "react-icons/gi";
import SectionHeader from 'components/section-header';
import useTranslation from 'hooks/useTranslation';


const Numbers = () => {
  const { t } = useTranslation();

  const data = {
    stats: [
      {
        id: 0,
        icon: <FaUsers/>,
        value: 62,
        suffix: '',
        title: t('numbers', 'n_0_title'),
      },
      {
        id: 1,
        icon: <GiConcreteBag/>,
        value: 3220,
        suffix: ' m2',
        title: t('numbers', 'n_1_title'),
      },
      {
        id: 2,
        icon: <GiMetalBar/>,
        value: 1250,
        suffix: ' tons',
        title: t('numbers', 'n_2_title'),
      },
      {
        id: 3,
        icon: <FaExpand/>,
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
