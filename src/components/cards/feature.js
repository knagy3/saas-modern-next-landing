/** @jsx jsx */
// import Image from 'components/image';
import { jsx, Box, Heading, Text } from 'theme-ui';
import { IconContext } from "react-icons";
import { useColorMode } from 'theme-ui';
import { useEffect, useState } from 'react';

import colors from '../../theme/index';

const Feature = ({ data: feature }) => {
  const [ mode ] = useColorMode();
  const [colorPrim, setColorPrim] = useState('');

  useEffect(() => {
    if( mode === 'dark' ) {
      setColorPrim(colors.colors.modes.dark.primary);
    } else {
      setColorPrim(colors.colors.primary);
    }
  }, [mode])
  
  return (
    <Box key={feature.id} sx={styles.featureItem}>
      {/* <Image loading="lazy" src={feature.icon} alt={feature.title} /> */}
      <IconContext.Provider
        value={{ color: colorPrim ,size: '60px' }}
      >
        {feature.icon}
      </IconContext.Provider>
      <Heading as="h3">{feature.title}</Heading>
      <Text as="p">{feature.description}</Text>
    </Box>
  );
};

export default Feature;

const styles = {
  featureItem: {
    textAlign: ['center', null, null, null, 'left'],
    h3: {
      lineHeight: 2.5,
      fontWeight: 500,
      letterSpacing: 'heading',
      fontSize: [18, null, null, null, null, 20],
    },
    p: {
      color: (theme) => theme.colors.heading_tertiary,
      fontSize: [null, null, null, null, 14, 15],
      lineHeight: 1.47,
    },
  },
};
