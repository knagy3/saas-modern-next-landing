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
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import { useRouter } from "next/router";

import useTranslation from '../../hooks/useTranslation';
import projectItems from '../projects/project.data';


const MobileDrawer = ({ setUrl }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { asPath } = useRouter();
  const { state, dispatch } = useContext(DrawerContext);
  const { setLocale, locale } = useTranslation();
  const [mode, setMode] = useColorMode();
  const [issDefaultPath, setIsDefaultPath] = useState(true);

  useEffect(() => {
    if (asPath.length > 5) {
      setIsDefaultPath(false);
    } else {
      setIsDefaultPath(true);
    }
  }, [asPath]);

  const handleLocaleChange = (e) => {
    e.preventDefault();
    if (locale === 'en') {
      localStorage.setItem('lang', 'hu');
      setLocale('hu');
    } else {
      localStorage.setItem('lang', 'en');
      setLocale('en');
    }
  };

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

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
      path: 'gallery',
      label: t('header', 'h2'),
    },
    {
      path: 'career',
      label: t('header', 'h3'),
    },
    {
      path: 'contact',
      label: t('header', 'h4'),
    },
  ];

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
                {projectItems.map(({ id, location }, i) => (
                  <Box
                    sx={styles.link}
                    key={i}
                    onClick={() => { 
                      router.push(`/projects/${id}`);
                      setUrl(`/projects/${id}`);
                  }}
                  >
                    {t('project', `pr_${id}_project_type`)}{" - "}{location}
                  </Box>
                ))}
              </Box>)
          }
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              <Box  
                sx={styles.social.icon}
                onClick={() => router.push("/")}
              >
                <FaHome/>
              </Box>
              { mode === 'dark' 
                ? ( <Box 
                      sx={styles.social.icon}
                      onClick={(e) => { const next = mode === 'dark' 
                        ? 'light' : 'dark'
                        setMode(next)}}
                    >
                      <FaSun/>
                    </Box>)
                : ( < Box 
                      sx={styles.social.icon}
                      onClick={(e) => { const next = mode === 'dark' 
                        ? 'light' : 'dark'
                        setMode(next)}}
                    >
                      <FaMoon />
                    </Box>
              )}
              <Box 
                sx={styles.social.icon}
                onClick={(e) => handleLocaleChange(e)}
              >
                {locale === 'hu' ? <>EN</> : <>HU</>}
              </Box>
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
    '&:hover': {
      color: (theme) => theme.colors.primary,
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
      color: (theme) => theme.colors.primary,
    },
    '&.active': {
      color: (theme) => theme.colors.primary,
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
