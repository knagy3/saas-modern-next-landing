import { rgba } from 'polished';

export default {
  // example colors with dark mode
  colors: {
    initialColorModeName: 'light',
    text: '#343D48', // body color and primary color
    text_secondary: '#02073E', // secondary body color
    header_shadow: '0 1px 2px rgba(0, 0, 0, 0.15)',
    heading: '#0F2137', // primary heading color
    heading_secondary: '#343D48', // heading color
    heading_tertiary: rgba('#343D48', 0.75),
    background: '#FFFFFF', // body background color
    background_secondary: '#F9FBFD', // secondary background color
    border_color: '#E9EDF5', // border color
    // primary: '#8D448B', // primary button and link color
    // primary: '#4cd964', // primary button and link color
    primary: 'rgba(43,103,237)',
    // primary: '#0e1037', // primary button and link color
    secondary: '#30c', // secondary color - can be used for hover states
    muted: '#7B8188', // muted color
    accent: '#609', // a contrast color for emphasizing UI
    dark: '#10132D',
    banner: rgba('#fff', 0.85),
    cardBoxShadow: '4px 4px 10px rgba(38,78,118,0.52)',
    cardBoxShadowHover: '0px 5px 20px rgba(38,78,118,0.55)',
    background_footer: '#020718',
    background_subscribe_button: rgba('#fff', 0.08),
    background_subscribe_ph: rgba('#fff', 0.8),

    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        background_secondary: '#FFFFFF',
        background_footer: rgba('#fff', 0.97),
        banner: rgba('#000', 0.85),
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111',
        header_shadow: '0 1px 2px rgba(244, 244, 244, 0.6)',
        heading: '#fff', // primary heading color
        heading_secondary: '#fff', // heading color
        heading_tertiary: rgba('#fff', 0.75),
        cardBoxShadow: '0px 4px 10px rgba(242,244,246,1.12)',
        cardBoxShadowHover: '0px 5px 20px rgba(242,244,246,1.15)',
        background_subscribe_button: rgba('#000', 0.08),
        background_subscribe_ph: rgba('#000', 0.8),
      },
    },
  },
  fonts: {
    body: 'DM Sans',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans, sans-serif',
    // heading: 'Bree Serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 'normal',
    // body: 400,
    heading: 500,
    // heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    // body: 1.5,
    heading: 1.25,
    // heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px',
  },
  space: [0, 4, 8, 12, 16, 32, 48, 64, 96, 128],
  sizes: {},
  breakpoints: [
    '480px',
    '640px',
    '768px',
    '1024px',
    '1200px',
    '1367px',
    '1440px',
  ],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, null, '970px', '1140px', '1380px'],
      paddingLeft: 30,
      paddingRight: 30,
      m: '0 auto',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      // justifyContent: 'space-between',
    },
    main: {},
    sections: {},
  },
  section: {
    banner: {
      borderTop: (t) => `1px solid ${t.colors.border_color}`,
      borderBottom: (t) => `1px solid ${t.colors.border_color}`,
      backgroundColor: 'background_secondary',
      py: [3, 5],
    },
    feature: {
      py: 5,
    },
    workflow: {
      py: 5,
    },
    product: {
      borderTop: (t) => `1px solid ${t.colors.border_color}`,
      borderBottom: (t) => `1px solid ${t.colors.border_color}`,
      backgroundColor: 'background_color',
      py: 5,
    },
    offer: {
      py: 5,
    },
    package: {
      py: 5,
    },
    support: {
      py: 5,
    },
    testimonial: {
      py: 5,
    },
    faq: {
      py: 5,
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary',
      },
    },
    logo: {
      display: 'inline-flex',
      alignItems: 'flex-start',
    },
    learnMore: {
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontWeight: 700,
      color: 'primary',
    },
    nav: {
      display: ['none', null, 'inline-flex'],
      p: 2,
      // transitionProperty: 'background-color',
      // transitionTimingFunction: 'ease-out',
      // transitionDuration: '.2s',
      // borderRadius: 2,
      // '&:hover': {
      //   bg: 'highlight',
      // },
      // '&.active': {
      //   color: 'primary',
      //   bg: 'highlight',
      // },
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: ['block', , , , 'none'],
      svg: {
        width: '32px',
      },
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    default: {
      backgroundColor: 'transparent',
      fontFamily: 'body',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60px',
      padding: '0 30px',
      transition: '0.3s ease-in-out 0s',
      whiteSpace: 'nowrap',
    },
    primary: {
      variant: 'buttons.default',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        bg: 'dark',
      },
    },
    primaryMd: {
      variant: 'buttons.primary',
      minHeight: '50px',
      px: '25px',
      '&:hover': {
        bg: 'none',
      },
    },
    secondary: {
      cursor: 'pointer',
      fontFamily: 'body',
      color: 'text',
      bg: 'secondary',
      transition: '0.3s ease-in-out 0s',
    },
    muted: {
      variant: 'buttons.default',
      backgroundColor: '#EDF0F2',
      color: 'text',
      ':hover': {
        backgroundColor: 'primary',
        color: 'background',
      },
    },
    muted_2: {
      variant: 'buttons.default',
      backgroundColor: '#EDF0F2',
      color: 'black',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
    white: {
      variant: 'buttons.default',
      backgroundColor: 'white',
      color: '#020718',
    },
    text: {
      variant: 'buttons.default',
      color: 'text',
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5,
    },
    featureCard: {
      display: 'flex',
      alignItems: ['center', 'flex-start'],
      flexDirection: ['column', 'row'],
      p: [0, 3],
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },

  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      // color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px',
    },

    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      // color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5,
    },
  },

  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
  },

  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    // h1-h6 Heading styles
    h1: {
      variant: 'text.heading',
      fontSize: 6,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7',
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none',
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important',
    },
  },
};
