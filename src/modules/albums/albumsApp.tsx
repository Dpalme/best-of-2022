import { useEffect } from 'react';
import { useAudioProvider } from '../../shared/context/audioContext';
import { AlbumsList } from './albumsList';
import { m } from 'framer-motion';

function AlbumsApp() {
  const { currentSong, changeSong } = useAudioProvider();
  useEffect(() => changeSong(undefined), []);

  return (
    <m.div
      layout
      layoutScroll
      className="grid grid-cols-1 xl:grid-cols-[85vh_1fr] gap-16 xl:h-screen
      items-center p-8 w-full py-8 xl:overflow-hidden bg-cover bg-fixed"
      style={{
        backgroundImage:
          "url('https://im.vsco.co/aws-us-west-2/cd90ea/155530507/637094b22991eb37dd000007/5b71a94d-23aa-41c6-b42c-92f5f3c16fbf3623677695015032824.jpg')",
      }}
    >
      <AlbumsList />
      <m.div
        animate={{
          x: currentSong ? '-50%' : '0%',
          display: currentSong ? 'block' : 'none',
        }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-md p-8
          bg-neutral-800 bg-opacity-50 rounded-md shadow-md xl:shadow-none
          xl:relative xl:backdrop-blur-none xl:p-0 xl:grow xl:bg-opacity-0
          text-left z-10 box-border min-w-[16rem] w-fit @container"
        onClick={() => changeSong(undefined)}
      >
        {!!currentSong && (
          <div className="flex flex-col gap-4 items-center @md:flex-row @md:gap-12">
            <img
              className="w-full mb-4 max-w-sm"
              src={currentSong?.cover}
            ></img>
            <div className="w-full">
              <h2
                className="text-3xl tracking-widest bg-clip-text drop-shadow-2xl
              leading-wider"
              >
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
              {currentSong.preview_url == null && (
                <p
                  className="font-light mt-4 tracking-wide leading-none
                text-white p-4 bg-red-500 rounded-md"
                >
                  No song preview available :(
                </p>
              )}
            </div>
          </div>
        )}
      </m.div>
    </m.div>
  );
}

export default AlbumsApp;
