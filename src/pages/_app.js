import { useEffect } from 'react';
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
// import Router from 'next/router';
import 'react-image-lightbox/style.css';
import 'swiper/swiper-bundle.min.css';
import 'assets/css/slick.min.css';
import 'react-multi-carousel/lib/styles.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import 'react-modal-video/css/modal-video.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/video.css';

import { initGA, logPageView } from 'analytics';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function CustomApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const router= useRouter();

  // const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
  const transition = { duration: 1.3 };
  const transitionInit = { duration: 0.5 };
  const frameVariants = {
    pageInitial: {
      opacity: 0.1, 
      transitionInit
      // scale: 0.9, opacity: 0, 
    },
    pageAnimate: {
      opacity: 1, 
      transition
      // scale: 1, opacity: 1, transition,
    },
    pageExit: {
      // scale: 0.5,
      opacity: 0.1,
      transitionInit
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // useEffect(() => {
  //   initGA();
  //   logPageView();
  //   Router.events.on('routeChangeComplete', logPageView);
  // }, []);

  return (
    <LanguageProvider>
      <AnimatePresence >
        <motion.div key={router.route} 
          initial="pageInitial" animate="pageAnimate" enter="pageEnter" exit="pageExit" 
          variants={frameVariants}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </LanguageProvider>
  ); 
}
