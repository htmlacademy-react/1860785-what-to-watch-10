import {useState, useRef, useEffect} from 'react';

const VIDEO_PLAY_DILAY = 1000;

type CardVideoPlayerProps = {
  previewImage: string;
  previewVideoLink: string;
};

function CardVideoPlayer({previewImage, previewVideoLink}: CardVideoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (!isPlaying) {
      videoRef.current.load();
      return;
    }

    const currentVideoRef = videoRef.current;
    const timeoutID = setTimeout(() => {
      if (currentVideoRef === null) {
        return;
      }
      currentVideoRef.play();
    }, VIDEO_PLAY_DILAY);

    const mouseOutHandler = () => {
      clearTimeout(timeoutID);
      setIsPlaying(!isPlaying);
    };

    currentVideoRef.addEventListener('mouseout', mouseOutHandler);

    return () => {
      if (currentVideoRef === null) {
        return;
      }
      currentVideoRef.removeEventListener('mouseout', mouseOutHandler);
    };
  }, [isPlaying]);

  return (
    <video
      onMouseOver={() => setIsPlaying(!isPlaying)}
      ref={videoRef}
      src={previewVideoLink}
      className="player__video"
      poster={previewImage}
      muted
    >
    </video>
  );
}

export default CardVideoPlayer;
