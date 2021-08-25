/** @jsx jsx */
import CountUp from 'react-countup';
import { jsx, Box, Text } from 'theme-ui';
import { IconContext } from "react-icons";
import { useColorMode, Image } from 'theme-ui';
import { useEffect, useState } from 'react';

import colors from '../../theme/index';

const StatItem = ({ stat, isVisible }) => {
  const [ mode ] = useColorMode();
  const [colorPrim, setColorPrim] = useState('');

  useEffect(() => {
    if( mode === 'dark' ) {
      setColorPrim(colors.colors.modes.dark.primary);
    } else {
      setColorPrim(colors.colors.primary);
    }
  }, [mode]);

  return (
    <Box sx={styles.item}>
      {/* <IconContext.Provider
        value={{ color: colorPrim ,size: '70px' }}
      >
        {stat.icon}
      </IconContext.Provider> */}
      <Image src={stat.icon} alt='default alt text' sx={styles.img} />
      <Text sx={styles.value}>
        {isVisible && <CountUp end={stat.value} suffix={stat.suffix} />}
      </Text>
      <Text as="p" sx={styles.title}>
        {stat.title}
      </Text>
    </Box>
  );
};

export default StatItem;

const styles = {
  item: {
    textAlign: 'center',
  },
  img: {
    width: ['70px', null, null, '80px', '90px', 'auto'],
    height: 'auto',
    flexShrink: 0,
    // mr: [2, 3, null, null, 4, 5],
    // ml: -2,
  },
  value: {
    color: 'heading',
    fontSize: [23, 24, 24, 28],
    display: 'flex',
    justifyContent: 'center',
    lineHeight: 1.38,
    letterSpacing: ['-0.5px', null, null, '-1px'],
  },
  title: {
    fontSize: [1, null, null, '15px', 17],
    lineHeight: 1.77,
    color: (theme) => theme.colors.heading_tertiary,
    mt: [1],
  },
};
