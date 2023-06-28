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

export interface IAlbum {
  preview_url: string | null;
  cover: string;
  name: string;
  artist: string;
  spotify: string;
  tidal?: string;
  srcSet: string;
}

const AudioContext = React.createContext<IAudioContext>({} as IAudioContext);

export const AudioProvider = (props: { children: ReactNode }) => {
  const [song, changeSong] = useState<IAlbum | undefined>(undefined);

  return (
    <AudioContext.Provider value={{ currentSong: song, changeSong }}>
      {props.children}
      {!!song && (
        <audio
          src={song.preview_url || ''}
          autoPlay
          crossOrigin="anonymous"
          onLoadStart={(event) => {
            event.currentTarget.volume = 0.2;
          }}
        />
      )}
    </AudioContext.Provider>
  );
};

export const useAudioProvider = () => {
  return React.useContext(AudioContext);
};

export const useAudioHook = (song: IAlbum | undefined) => {
  const { currentSong, changeSong } = useContext(AudioContext);
  return () =>
    changeSong(
      currentSong !== undefined && currentSong?.name == song?.name
        ? undefined
        : song
    );
};
