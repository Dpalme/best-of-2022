import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface IAudioContext {
  currentSong: IAlbum | undefined;
  changeSong: Dispatch<SetStateAction<IAlbum | undefined>>;
}

interface IAlbum {
  preview: string;
  cover: string;
  name: string;
  artist: string;
  spotify: string;
  tidal?: string;
}

const AudioContext = React.createContext<IAudioContext>({} as IAudioContext);

export const AudioProvider = (props: { children: ReactNode }) => {
  const [song, changeSong] = useState<IAlbum | undefined>(undefined);

  return (
    <AudioContext.Provider value={{ currentSong: song, changeSong }}>
      <div
        className="grid grid-cols-1 xl:grid-cols-[95vh_1fr] gap-4
      items-center p-8 w-full"
      >
        {props.children}
        {!!song && (
          <audio src={song.preview} autoPlay crossOrigin="anonymous"></audio>
        )}
        <div
          className={[
            'fixed bottom-8 left-1/2 -translate-x-1/2 backdrop-blur-md p-8',
            'bg-neutral-800 bg-opacity-50 rounded-md shadow-md xl:shadow-none',
            'xl:relative xl:backdrop-blur-none xl:p-0 xl:grow xl:bg-opacity-0',
            'text-left w-auto z-10 box-border min-w-[16rem]',
            !song ? 'hidden' : ''
          ].join(' ')}
          onClick={() => changeSong(undefined)}
        >
          {!!song && (
            <>
              <img className="w-full mb-4 max-w-sm" src={song?.cover}></img>
              <h2 className="text-3xl tracking-widest bg-clip-text drop-shadow-2xl leading-none">
                {song.name}
              </h2>
              <h3 className="text-xl font-light mb-4 tracking-wide leading-none">
                {song.artist}
              </h3>
              <div className="flex flex-row gap-2">
                <a
                  href={song.spotify}
                  target="_blank"
                  className="px-4 py-2 bg-emerald-500 rounded-full"
                >
                  Spotify
                </a>
                {!!song.tidal && (
                  <a
                    href={song.tidal}
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
    </AudioContext.Provider>
  );
};

export const useAudioHook = (song: IAlbum) => {
  const { currentSong, changeSong } = useContext(AudioContext);
  return () => changeSong(currentSong?.name == song.name ? undefined : song);
};
