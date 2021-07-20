import { useEffect } from 'react';
import Router from 'next/router';
import 'swiper/swiper-bundle.min.css';
import 'assets/css/slick.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import { initGA, logPageView } from 'analytics';
import 'typeface-dm-sans';
import 'react-modal-video/css/modal-video.min.css';
import '../assets/css/video.css';



export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}
