import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
          color: (theme) => theme.colors.primary,
          // color: isWhite ? 'white' : 'primary',
          opacity: 1,
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: (theme) => theme.colors.heading,
          // color: isWhite ? 'white' : 'heading',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
