import React, { useState, useEffect, useContext } from 'react';
import { Box } from 'theme-ui';
import { useColorMode } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import {
  FaHome,
  FaFacebookF,
  FaTwitter,
  FaSun,
  FaDribbble,
  FaGlobeAmericas,
  FaMoon,
} from 'react-icons/fa';
import { useRouter } from "next/router";

import useTranslation from '../../hooks/useTranslation';
import menuItems from './header.data';
import projectItems from '../projects/project.data';

const social = [
  {
    path: '/',
    icon: <FaFacebookF />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
];

const features = [
  {
    path: '/',
    icon: <FaGlobeAmericas />,
  },
];

const MobileDrawer = ({ setUrl }) => {
  const router = useRouter();
  const { asPath } = useRouter();
  const { state, dispatch } = useContext(DrawerContext);
  const { setLocale, locales } = useTranslation();
  const [isEngish, setIsEngish] = useState(true);
  const [mode, setMode] = useColorMode();
  const [issDefaultPath, setIsDefaultPath] = useState(true);
  
  useEffect(() => {
    // if (typeof window === 'undefined') {
    //   return null;
    // }
    if (localStorage.getItem('lang') === "hu") setIsEngish(false);
  }, []);

  useEffect(() => {
    if (asPath.length > 5) {
      setIsDefaultPath(false);
    } else {
      setIsDefaultPath(true);
    }
  }, [asPath]);

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

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="28px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <IoMdClose size="24px" color={(theme) => theme.colors.text} />
      }
      // color={(theme) => theme.colors.text}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          { issDefaultPath 
            ? (<Box sx={styles.menu}>
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
              </Box>) 
            : (<Box sx={styles.menu}>
                {projectItems.map(({ id, name }, i) => (
                  <Box
                    sx={styles.link}
                    key={i}
                    onClick={() => { 
                      router.push(`/projects/${id}`);
                      setUrl(`/projects/${id}`);
                  }}
                  >
                    {name}
                  </Box>
                ))}
              </Box>)
          }
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              <Box as="span" sx={styles.social.icon}>
                <Box onClick={() => router.push("/")}>
                  <FaHome/>
                </Box>
              </Box>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Box >
                    {icon}
                  </Box>
                </Box>
              ))}
              { mode === 'dark' 
                ? ( <Box as="span" sx={styles.social.icon}>
                      <Box onClick={(e) => { const next = mode === 'dark' 
                        ? 'light' : 'dark'
                        setMode(next)}}
                      >
                        <FaSun/>
                      </Box>
                    </Box>)
                : ( <Box as="span" sx={styles.social.icon}>
                      <Box onClick={(e) => { const next = mode === 'dark' 
                        ? 'light' : 'dark'
                        setMode(next)}}
                      >
                        <FaMoon />
                      </Box>
                    </Box>)}
              {features.map(({ icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link onClick={(e) => handleLocaleChange(e)}>{icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '30px',
    '@media screen and (min-width: 1024px)': {
      display: '',
    },
  },
  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: (theme) => theme.colors.background,
    // cursor: 'pointer',
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },
  link: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'text_white',
    py: '15px',
    cursor: 'pointer',
    borderBottom: '1px solid #e8e5e5',
    transition: 'all 0.25s',
    '&:hover': {
      color: 'secondary',
    },
    '&.active': {
      color: 'secondary',
    },
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: (theme) => theme.colors.primary,
      },
      '&.active': {
        color: (theme) => theme.colors.primary,
      },
    },
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },
  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 18,
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
  },
  button: {
    color: (theme) => theme.colors.background,
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
