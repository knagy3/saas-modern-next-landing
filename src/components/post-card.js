/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Flex } from 'theme-ui';
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function PostCard({
  id,
  src,
  alt,
  title,
  client,
  date,
  setUrl
}) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${id}`);
    setUrl(`/projects/${id}`);
    // window.scrollTo(0, 0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      // whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.8 }} 
      sx={styles.card} 
    >
        <Box sx={styles.thumbnail}>
          <Image src={src} alt={alt} />
        </Box>

        <Flex sx={styles.postContent}>
          <Heading sx={styles.title} 
            onClick={() => handleClick()}
          >
            {title}
          </Heading>

          <Flex sx={styles.postFooter}>
            <Text sx={styles.postFooter.name}>{client}</Text>
            <Text sx={styles.postFooter.date}>{date}</Text>
          </Flex>
        </Flex>
    </motion.div>
  );
}

const styles = {
  card: {
    backgroundColor: (theme) => theme.colors.background,
    boxShadow: (theme) => theme.colors.cardBoxShadow,
    borderRadius: '7px',
    m: '0 15px 40px',
    transition: 'all 0.3s',
    '&:hover': {
      boxShadow: (theme) => theme.colors.cardBoxShadowHover,
    },
  },

  thumbnail: {
    borderRadius: '7px 7px 0 0',
    overflow: 'hidden',
    display: 'flex',
    maxHeight: '305px',
    img: {
      width: '100%',
    },
  },
  postContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: ['15px 20px', '25px 30px'],
  },
  title: {
    cursor: 'pointer',
    fontSize: [3, null, null, null, null, 4],
    color: 'heading',
    lineHeight: [1.4, 1.5],
    fontWeight: 700,
    mb: [3, 4, 5],
    pr: [0, null, null, null, 5],
    display: 'block',
    px: 0,
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.25s',
    '&:hover': {
      color: 'primary',
    },
  },
  postFooter: {
    width: '100%',
    justifyContent: 'space-between',
    alignItem: 'center',
    name: {
      fontSize: ['14px', null, 2],
      fontWeight: 500,
      color: 'primary',
      lineHeight: 1.4,
    },
    date: {
      fontSize: ['14px', null, 2],
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
};
