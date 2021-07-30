import { useEffect } from 'react';
import Router from 'next/router';
import 'swiper/swiper-bundle.min.css';
import 'assets/css/slick.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import 'react-modal-video/css/modal-video.min.css';
import '../assets/css/video.css';
import { useRouter } from "next/router";

import { initGA, logPageView } from 'analytics';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function CustomApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  ); 
}
