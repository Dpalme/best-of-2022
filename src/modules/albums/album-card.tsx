import { IAlbum, useAudioHook } from '../../shared/context/audioContext';
import { Variants, m } from 'framer-motion';

const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: '-100%' },
} as Variants;

export const AlbumCard = (
  props: IAlbum & {
    position: number;
  }
) => {
  const setSong = useAudioHook({
    ...props,
    preview_url: props.preview_url,
    spotify: props.spotify,
    cover: props.cover,
    srcSet: props.srcSet,
  });
  return (
    <m.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      className="block
      cursor-pointer"
      onClick={setSong}
    >
      <img
        src={props.cover}
        alt={props.name + ' ' + props.artist}
        srcSet={props.srcSet}
        className="aspect-square w-full"
      />
      <div
        className="bg-black text-white absolute left-1 top-1
        rounded-full w-8 h-8 flex justify-center items-center
        text-sm bg-opacity-20 backdrop-blur-sm shadow-md font-bold
        border border-white border-opacity-50"
      >
        {props.position}
      </div>
      <div
        className="absolute w-full h-full top-0 left-0 focus:opacity-100
        opacity-0 hover:opacity-100 transition-opacity duration-700
        bg-black bg-opacity-80 flex items-center justify-end
        p-4 text-white flex-col text-left
        scale-[101%] hover:backdrop-blur-sm gap-1 px-3"
      >
        <h2 className="text-sm tracking-widest w-full leading-none">
          {props.name}
        </h2>
        <h3 className="text-xs font-light tracking-wide w-full leading-none">
          {props.artist}
        </h3>
      </div>
    </m.div>
  );
};
