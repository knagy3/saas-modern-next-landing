/** @jsx jsx */
import { jsx, Box, Flex, Text, Container } from 'theme-ui';
import { useColorMode } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { AiOutlineMail } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { IconContext } from "react-icons";

import { NavLink, Link } from 'components/link';
import Logo from 'components/logo';

const navItems = [
  {
    id: 1,
    path: '/',
    link: 'home',
    title: 'Home',
  },
  {
    id: 2,
    path: '/projects/1',
    link: '#!',
    title: 'Projects',
  },
  {
    id: 3,
    path: '#!',
    link: '#!',
    title: 'Supports',
  },
  {
    id: 4,
    path: '#!',
    link: '#!',
    title: 'Marketing',
  },
  {
    id: 5,
    path: '/',
    link: 'faq',
    title: 'FAQ',
  },
];

export default function Footer() {
  const [mode] = useColorMode();
  const color = mode === 'light';
  const [issDefaultPath, setIsDefaultPath] = useState(true);
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath.length > 5) {
      setIsDefaultPath(false);
    } else {
      setIsDefaultPath(true);
    }
  }, [asPath])

  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Flex sx={styles.content}>
          <Flex sx={styles.copyright}>
            <Logo white={color} />
            <Text as="span">
              All right reserved - D&amp;D by NKR WebDev
            </Text>
            <Flex sx={styles.data}>
              <Box sx={styles.row}>
                <IconContext.Provider value={{size: '30px'}}>
                  <AiOutlineMail/>
                </IconContext.Provider>
                <Text sx={{mx:'10px'}}> dakiepkft@gmail.com </Text>
              </Box>
              <Box sx={styles.row}>
                <IconContext.Provider value={{size: '30px'}}>
                  <MdPlace/>
                </IconContext.Provider>
                <Text sx={{mx:'10px'}}> 9024 Győr, Bartók Béla út 16. </Text>
              </Box>
            </Flex>
          </Flex>
          

          {/* <Flex as="ul" sx={styles.nav}>
            {navItems?.map((item) => (
              <li key={item.id}>
                {!issDefaultPath 
                  ? (<Link sx={{cursor: 'pointer'}} path={item.path}>
                      {item.title}
                    </Link>
                  ) : (
                    <NavLink 
                      sx={{cursor: 'pointer'}} 
                      label={item.title}
                      path={item.link}
                    /> )}
              </li>
            ))}
          </Flex> */}
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: (theme) => theme.colors.background_footer,
  },
  content: {
    alignItems: 'center',
    borderTop: '1px solid',
    borderTopColor: (theme) => theme.colors.background,
    display: ['block', null, null, null, 'flex'],
    justifyContent: 'center',
    paddingTop: '20px',
    paddingBottom: '40px',
    textAlign: ['center', null, null, null],
    '@media only screen and (max-width: 400px)': {
      pb: 50,
    },
  },
  data: {
    my: ['5px', null],
    display: 'flex',
    alignItems: [ 'center', 'flex-start'],
    justifyContent: ['center', null, null, null],
    flexDirection: 'column',
  },
  row: {
    my: ['10px', '2px'],
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: (theme) => theme.colors.background,
  },
  copyright: {
    width: '100%',
    display: ['block', 'flex'],
    alignItems: 'center',
    justifyContent: ['center', null, null, 'space-between'],
    span: {
      fontSize: '14px',
      lineHeight: [1.8, null, null, 1.29],
      color: (theme) => theme.colors.background,
      marginTop: [4, 1],
      display: 'inline-flex',
    },
  },
  nav: {
    listStyle: 'none',
    alignItems: 'center',
    padding: 0,
    // display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, null, null],
    mt: [5, null, null, null, 0],
    li: {
      '+ li': {
        marginLeft: [4],
      },
      '@media only screen and (max-width: 400px)': {
        mb: 4,
      },
      a: {
        color: (theme) => theme.colors.background,
        display: 'inline-flex',
        textAlign: 'right',
        textDecoration: 'none',
      },
    },
  },
};
