/** @jsx jsx */
import { jsx, Container, Flex, Box, useColorMode, Heading } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import { useRouter } from "next/router";

import Logo from 'components/logo';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import useTranslation from 'hooks/useTranslation';
import {
  FaHome,
  FaSun,
  FaDribbble,
  FaGlobeAmericas,
  FaMoon,
} from 'react-icons/fa';

export default function Header({ className, setUrl }) {
  const [issDefaultPath, setIsDefaultPath] = useState(true);
  const { asPath } = useRouter();
  const [mode, setMode] = useColorMode();
  const { t } = useTranslation();
  const { setLocale, locale } = useTranslation();
  const [isEngish, setIsEngish] = useState(true);

  const menuItems = [
    {
      path: 'home',
      label: t('header', 'h0'),
    },
    {
      path: 'service',
      label: t('header', 'h1'),
    },
    {
      path: 'clients',
      label: t('header', 'h2'),
    },
    {
      path: 'career',
      label: t('header', 'h3'),
    },
    // {
    //   path: 'faq',
    //   label: 'Q&A',
    // },
    {
      path: 'contact',
      label: t('header', 'h4'),
    },
  ];

  useEffect(() => {
    if (asPath.length > 5) {
      setIsDefaultPath(false);
    } else {
      setIsDefaultPath(true);
    }
  }, [asPath])

  const handleLocaleChange = (e) => {
    e.preventDefault();
    if (isEngish) {
      localStorage.setItem('lang', 'hu');
      setLocale('hu');
      setIsEngish(false);
    } else {
      localStorage.setItem('lang', 'en');
      setLocale('en');
      setIsEngish(true);
    }
  };

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo header={true}/>
          { issDefaultPath &&
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label }, i) => (
                <Link
                  activeClass="active"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                >
                  {label}
                </Link>
              ))}
            </Flex>
          }
          <Box sx={styles.social}>  
            <Box sx={styles.social_icon} onClick={() => router.push("/")}>
              <FaHome/>
            </Box>
            { mode === 'dark' 
                ? (   <Box
                        sx={styles.social_icon}
                          onClick={(e) => { const next = mode === 'dark' 
                          ? 'light' : 'dark'
                          setMode(next)}}
                      >
                        <FaSun/>
                    </Box>)
              : (   <Box 
                      sx={styles.social_icon}
                      onClick={(e) => { const next = mode === 'dark' 
                        ? 'light' : 'dark'
                        setMode(next)}}
                    >
                      <FaMoon />
                    </Box>
              )}
              <Heading sx={styles.social_icon} onClick={(e) => handleLocaleChange(e)}>
                {locale === 'hu' ? <>EN</> : <>HU</>}
              </Heading>
          </Box>
          <MobileDrawer setUrl={setUrl}/>
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: (theme) => theme.colors.text,
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: (theme) => theme.colors.background,
      color: (theme) => theme.colors.text,
      boxShadow: (theme) => theme.colors.header_shadow,
      py: 3,
      'nev > a': {
        color: (theme) => theme.colors.text,
      },
    },
  },
  social: {
    display: 'none',
    '@media screen and (min-width: 560px)': {
      display: 'flex',
    },
    mx: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  social_icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'text',
    fontSize: 20,
    mr: '15px',
    transition: 'all 0.25s',
    cursor: 'pointer',
    ':last-child': {
      mr: '0',
    },
    '&:hover': {
      color: (theme) => theme.colors.primary,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
  joinNow: {
    marginLeft: 'auto',
  },
};
