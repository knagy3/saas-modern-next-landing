/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
// import SectionHeading from 'components/section-heading';
import StatItem from 'components/cards/stat-item';
import { FaExpand, FaUsers } from 'react-icons/fa';
import { GiConcreteBag, GiMetalBar } from "react-icons/gi";
import SectionHeader from 'components/section-header';

const data = {
  stats: [
    {
      id: 1,
      icon: <FaUsers/>,
      value: 62,
      suffix: '',
      title: 'people is employed per year',
    },
    {
      id: 2,
      icon: <GiConcreteBag/>,
      value: 3220,
      suffix: ' m2',
      title: 'of concrete are processed per year',
    },
    {
      id: 3,
      icon: <GiMetalBar/>,
      value: 1250,
      suffix: ' tons',
      title: 'of rebar are installed per year',
    },
    {
      id: 4,
      icon: <FaExpand/>,
      value: 5250,
      suffix: ' m2',
      title: 'of shutter are installed per year',
    },
  ],
};

const Numbers = () => {
  return (
    <Box as="section" id="numbers" sx={styles.section}>
      <Container>
        <SectionHeader
          slogan="Our Services"
          title="Our everyday lives in numbers"
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
