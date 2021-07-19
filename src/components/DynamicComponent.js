/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import ModalVideo from 'react-modal-video';

export default function DynamicComponent({ videoOpen, setVideoOpen }) {

  if (typeof window === 'undefined') {
    console.log("alma")
    return null;
  }

  return (
    <Box >
      <ModalVideo
        style={{width:'100%'}}
        channel="youtube"
        isOpen={videoOpen}
        videoId="ZNA9rmDsYVE"
        onClose={() => setVideoOpen(false)}
      />
    </Box>
  )
}

const styles = {
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};