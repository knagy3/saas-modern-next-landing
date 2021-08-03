/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { useColorMode } from 'theme-ui';

import { Link } from 'components/link';
import logo from 'assets/images/daki.svg';
// import logoWhite from 'assets/images/logo-white.png';
import logowhite from 'assets/images/daki-white.svg';
// import LogoDark from 'assets/images/logo.svg';

export default function Logo({ header=false }) {
  const [mode] = useColorMode();
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        paddingRight: '10px',
        cursor: 'pointer',
      }}
    >
      {
        header
        ? (mode === 'dark'
          ? (<Image sx={{maxHeight:'50px'}} src={logowhite} alt="logo" />) 
          : (<Image sx={{maxHeight:'50px'}} src={logo} alt="logo" />) )
        : (mode !== 'dark'
          ? (<Image sx={{maxHeight:'50px'}} src={logowhite} alt="logo" />) 
          : (<Image sx={{maxHeight:'50px'}} src={logo} alt="logo" />) ) 
      }
    </Link>
  );
}
