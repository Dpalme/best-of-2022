import { useLayoutEffect, useRef } from 'react';
import { IAlbum, useAudioHook } from '../../shared/context/audioContext';

export const SongCard = (props: { track: IAlbum; index: number }) => {
  const changeSong = useAudioHook(props.track);
  const thisEl = useRef(null);

  useLayoutEffect(() => {}, []);
  return (
    <div
      ref={thisEl}
      className={[
        'transform scale-100 transition-transform md:max-h-[40vh]',
        'cursor-pointer overflow-hidden snap-center h-fit flex flex-col',
        'md:flex-row gap-4 md:gap-8 xl:gap-16 items-center',
      ].join(' ')}
      onClick={() => changeSong()}
    >
      <img
        src={props.track.cover}
        alt={props.track.name + ' ' + props.track.artist}
        className="h-full max-w-[40vh]"
      />
      <div
        className="w-full h-full top-0 left-0 duration-700
            flex items-center md:justify-end
            justify-center p-4 text-white flex-col text-center md:text-left
            scale-[101%] hover:backdrop-blur-sm gap-1 px-3 py-16 mb-16"
      >
        <h2 className="text-4xl tracking-widest w-full leading-none">
          {props.index + 1}. {props.track.name}
          <span
            className="ml-2 text-xl font-light tracking-wide w-full
              xl:leading-none leading-loose block xl:inline"
          >
            {props.track.artist}
          </span>
        </h2>
        <div className="flex flex-row gap-2 justify-start mt-2 w-full">
          <a
            href={props.track.spotify}
            target="_blank"
            className="px-4 py-2 bg-emerald-500 rounded-full"
          >
            Spotify
          </a>
          {!!props.track.tidal && (
            <a
              href={props.track.tidal}
              target="_blank"
              className="px-4 py-2 bg-stone-800 rounded-full"
            >
              Tidal
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
