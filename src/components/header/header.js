/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import React, { useState, useEffect } from 'react';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import { useColorMode } from 'theme-ui';
import { useRouter } from "next/router";

import Logo from 'components/logo';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className, setUrl }) {
  const [issDefaultPath, setIsDefaultPath] = useState(true);
  const [mode] = useColorMode();
  const color = mode !== 'light';
  const { asPath } = useRouter();

  useEffect(() => {
    if (asPath.length > 5) {
      setIsDefaultPath(false);
    } else {
      setIsDefaultPath(true);
    }
  }, [asPath])

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo white={color} />
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
          {/* <Button
            sx={styles.joinNow}
            variant="primaryMd"
            aria-label="Get Started"
          >
            Get Started
          </Button> */}
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
