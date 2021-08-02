/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/daki.svg';
import logoWhite from 'assets/images/logo-white.png';
// import LogoDark from 'assets/images/logo.svg';

export default function Logo({ white }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        paddingRight: '10px',
        cursor: 'pointer',
      }}
    >
      <Image sx={{maxHeight:'50px'}} src={white ? logoWhite : logo} alt="startup landing logo" />
    </Link>
  );
}
