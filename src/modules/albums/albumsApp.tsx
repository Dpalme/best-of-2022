import { useEffect } from 'react';
import { useAudioProvider } from '../../shared/context/audioContext';
import { AlbumsList } from './albumsList';

function AlbumsApp() {
  const { currentSong, changeSong } = useAudioProvider();
  useEffect(() => changeSong(undefined), []);

  return (
    <div
      className="grid grid-cols-1 xl:grid-cols-[90vh_1fr] gap-16
      items-center p-8 w-full py-8 xl:overflow-hidden transform"
    >
      <AlbumsList />
      <div
        className={[
          'fixed bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-md p-8',
          'bg-neutral-800 bg-opacity-50 rounded-md shadow-md xl:shadow-none',
          'xl:relative xl:backdrop-blur-none xl:p-0 xl:grow xl:bg-opacity-0',
          'text-left w-auto z-10 box-border min-w-[16rem]',
          !currentSong ? 'hidden' : 'animate-slide-left',
        ].join(' ')}
        onClick={() => changeSong(undefined)}
      >
        {!!currentSong && (
          <>
            <img
              className="w-full mb-4 max-w-sm"
              src={currentSong?.cover}
            ></img>
            <h2 className="text-3xl tracking-widest bg-clip-text drop-shadow-2xl leading-none">
              {currentSong.name}
            </h2>
            <h3 className="text-xl font-light mb-4 tracking-wide leading-none">
              {currentSong.artist}
            </h3>
            <div className="flex flex-row gap-2">
              <a
                href={currentSong.spotify}
                target="_blank"
                className="px-4 py-2 bg-emerald-500 rounded-full"
              >
                Spotify
              </a>
              {!!currentSong.tidal && (
                <a
                  href={currentSong.tidal}
                  target="_blank"
                  className="px-4 py-2 bg-stone-800 rounded-full"
                >
                  Tidal
                </a>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AlbumsApp;
