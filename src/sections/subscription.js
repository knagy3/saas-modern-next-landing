/** @jsx jsx */
import { jsx, Box, Flex, Container, Input, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { ToastContainer, toast } from 'react-toastify';
import { useColorMode } from 'theme-ui';
import emailjs, { init } from 'emailjs-com';
import { useEffect, useRef, useState } from 'react';

const Subscription = () => {
  const [ mode ] = useColorMode();
  const emailRef = useRef();
  const [template, setTemplate] = useState(true);

  useEffect(() => {
    init("user_wRxlWz2LJqPGZl452bdTJ");
  }, []);

  const sendEmail = () => {
    const templateParams = {
      to_email: emailRef.current.value,
    };
    // emailjs.send(serviceID, templateID, templateParams, userID);
    emailjs.send(
      'service_6o2sfwg', 
      template, 
      templateParams, 
      'user_wRxlWz2LJqPGZl452bdTJ')
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

    if (localStorage.getItem('lang') === "en") {
      setTemplate('template_0wudgxp');
    } else {
      setTemplate('template_fd27i38');
    }

    if (validateEmail(emailRef.current.value)) {
      if (mode === 'dark') {
        toast("We will contact you soon!");
      } else {
        toast.dark("We will contact you soon!");
      }
      sendEmail();
    }
  };

  return (
    <Box id="contact" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.content}>
          <SectionHeading
            sx={styles.heading}
            title="Subscribe to get best offers."
            description="By subscribing with your mail, you will agree with terms"
          />
          <Flex as="form" sx={styles.form} onSubmit={handleSubmit}>
            <Box as="label" htmlFor="email" variant="styles.srOnly">
              Email
            </Box>
            <Input type="email" id="email" ref={emailRef} placeholder="Enter your email" />
            <Button variant="white">Contact us</Button>
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
  heading: {
    color: (theme) => theme.colors.background,
    mb: [30, 30, 50],
    h2: {
      fontSize: [22, 28, '36px'],
      lineHeight: 1.4,
      letterSpacing: 'heading',
    },
    p: {
      lineHeight: [2, 3.12],
      mt: [20, 0],
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
