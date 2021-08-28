/** @jsx jsx */
import { jsx, Box, Flex, Container, Input, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { ToastContainer, toast } from 'react-toastify';
import { useColorMode } from 'theme-ui';
import emailjs, { init } from 'emailjs-com';
import { useEffect, useRef } from 'react';
import useTranslation from 'hooks/useTranslation';

const Subscription = ({ plan, setPlan }) => {
  const { t } = useTranslation();
  const [ mode ] = useColorMode();
  const emailRef = useRef();

  useEffect(() => {
    init("user_VkN0zRDmBWvMoyUgzL8uu");
  }, []);

  const sendEmail = (template, object) => {
    const templateParams = {
      to_email: emailRef.current.value,
      object: object,
    };
    // emailjs.send(serviceID, templateID, templateParams, userID);
    emailjs.send(
      'service_9ed0x6r', 
      template, 
      templateParams, 
      'user_VkN0zRDmBWvMoyUgzL8uu')
      .then((result) => {

      }, (error) => {
          console.log(error.text);
      });
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let object = 'Köszönjük a megkeresést';
    let template = 'template_jhsk67p';

    if (validateEmail(emailRef.current.value)) {
      if (localStorage.getItem('lang') === "en") {
        template ='template_qlg8ooj';
        plan !== 'career'
          ? object = 'Thank you for your inquiry'
          : object = 'Thank you for your interest for the position';
      } else {
        if (plan !== 'career') {
          object = 'Köszönjük az érdeklődését a pozíció iránt';
        }
      }
      if (mode === 'dark') {
        toast("We will contact you soon!");
      } else {
        toast.dark("We will contact you soon!");
      }
      sendEmail(template, object);
    } else {
      toast.error("The e-mail address is not valid!");
    }
  };

  return (
    <Box id="contact" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.content}>
          <SectionHeading
            sx={styles.heading}
            title={t('contact', 'title')}
            description={t('contact', 'description')}
          />
          {plan !== 'default' &&
            <Flex sx={styles.priceSwitcher}>
              <Button
                variant="text"
                className={plan === 'business' ? 'active' : ''}
                onClick={() => setPlan('business')}
              >
                {t('contact', 'button1')}
              </Button>
              <Button
                variant="text"
                className={plan === 'career' ? 'active' : ''}
                onClick={() => setPlan('career')}
              >
                {t('contact', 'button2')}
              </Button>
            </Flex>
          }
          <Flex as="form" sx={styles.form} onSubmit={handleSubmit}>
            {/* <Box as="label" htmlFor="email" variant="styles.srOnly">
              Email
            </Box> */}
            <Input type="email" id="email" ref={emailRef} placeholder={t('contact', 'paceholder')} />
            <Button variant="white">{plan !== 'career' ? (<>{t('contact', 'button3')}</>) : (<>{t('contact', 'button4')}</>)}</Button>
          </Flex>
        </Box>
        <ToastContainer
          style={{ color: 'black' }} 
          position="top-center"
          autoClose={5000}
          hideProgressBar
          closeOnClick
          pauseOnHover
        />
      </Container>
    </Box>
  );
};

export default Subscription;

const styles = {
  section: {
    backgroundColor: (theme) => theme.colors.background_footer,
    pt: '60px',
    pb: '70px',
  },
  priceSwitcher: {
    justifyContent: 'space-around',
    borderRadius: '5px',
    border: `1px solid `,
    borderColor: (theme) => theme.colors.background_subscribe_button,
    margin: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 60px'],
    maxWidth: [175, 175, 175, 255],
    p: 2,
    button: {
      backgroundColor: (theme) => theme.colors.background_subscribe_button,
      color: (theme) => theme.colors.background_subscribe_ph,
      minHeight: ['40px', '40px', '40px', '48px'],
      px: ['18px', '18px', '18px', '25px'],
      fontSize: [14, 14, 14, 16],
      fontWeight: 500,
      '&.active': {
        backgroundColor: (theme) => theme.colors.background,
        color: (theme) => theme.colors.text,
      },
      ':focus': {
        outline: '0 none',
      },
      ':hover': {
        color: (theme) => theme.colors.primary,
      },
    },
  },
  heading: {
    color: (theme) => theme.colors.background,
    mb: [30, 30, 50],
    h2: {
      fontSize: [22, 28, '36px'],
      lineHeight: 1.4,
      letterSpacing: 'heading',
    },
    p: {
      // lineHeight: [2, 3.12],
      mt: [20, 30],
      letterSpacing: 'heading',
      color: (theme) => theme.colors.background,
    },
  },
  content: {
    maxWidth: '555px',
    margin: '0 auto',
    textAlign: 'center',
  },
  form: {
    alignItems: 'center',
    display: ['block', 'flex'],
    input: {
      backgroundColor: (theme) => theme.colors.background_subscribe_button,
      borderRadius: '5px',
      borderColor: 'transparent',
      color: (theme) => theme.colors.background_subscribe_ph,
      flexGrow: 1,
      fontFamily: 'body',
      height: 'auto',
      px: '30px',
      py: '0',
      minHeight: [50, 50, 60],
      width: ['100%', 'auto'],
      '::placeholder': {
        color: (theme) => theme.colors.background_subscribe_ph,
      },
    },
    button: {
      backgroundColor: (theme) => theme.colors.background,
      color: (theme) => theme.colors.text,
      minHeight: [50, 50, 60],
      fontSize: [14, 16],
      padding: '0 30px',
      whiteSpace: 'nowrap',
      width: ['100%', 'auto'],
      ml: [0, 3],
      mt: [4, 0],
      ':hover': {
        backgroundColor: (theme) => theme.colors.background,
        color: (theme) => theme.colors.primary,
      },
    },
  },
};
