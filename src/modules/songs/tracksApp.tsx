import { useEffect } from 'react';
import { useAudioHook } from '../../shared/context/audioContext';
import { SongCard } from './songCard';
import songs from './songs.json';
import { m } from 'framer-motion';

function TracksApp() {
  const reset = useAudioHook(undefined);

  useEffect(reset, []);

  return (
    <m.div
      layoutScroll
      layout
      className="xl:max-h-[100vh] grid grid-cols-1 gap-16 w-full py-32
        snap-y snap-mandatory overflow-y-auto scrollbar-hide px-8
        xl:px-16 bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url('https://im.vsco.co/aws-us-west-2/cd90ea/155530507/637094b62991eb37dd000009/416fe35d-2b44-4871-86e2-2344b854084f2409290636463619310.jpg')",
      }}
    >
      {songs.map((track, i) => (
        <SongCard track={track} index={i} key={i} />
      ))}
      
    </m.div>
  );
}

export default TracksApp;
