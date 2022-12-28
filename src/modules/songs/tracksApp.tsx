import { useEffect } from 'react';
import { useAudioHook } from '../../shared/context/audioContext';
import { SongCard } from './songCard';
import songs from './songs.json';

function TracksApp() {
  const reset = useAudioHook(undefined)

  useEffect(reset, [])

  return (
    <div
      className="xl:max-h-[100vh] grid grid-cols-1 gap-16 w-full py-32
        snap-y snap-mandatory overflow-y-auto scrollbar-hide px-8 xl:px-16 max-w-4xl mx-auto"
    >
      {songs.map((props, i) => (
        <SongCard
          track={{
            ...props,
            cover: props.thumbnail,
            preview: props.preview_url,
            spotify: props.album_link,
          }}
          index={i}
          key={i}
        />
      ))}
    </div>
  );
}

export default TracksApp;
