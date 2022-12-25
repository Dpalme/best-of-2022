import { useAudioHook } from './audioContext';

export const AlbumCard = (props: {
  name: string;
  artist: string;
  thumbnail: string;
  preview_url: string;
  album_link: string;
}) => {
  const setSong = useAudioHook({
    ...props,
    preview: props.preview_url,
    spotify: props.album_link,
    cover: props.thumbnail,
  });
  return (
    <div
      className="block transform scale-100 hover:scale-105 transition-transform
      cursor-pointer overflow-hidden"
      onClick={setSong}
    >
      <img src={props.thumbnail} alt={props.name + ' ' + props.artist} />
      <div
        className="absolute w-full h-full top-0 left-0
        opacity-0 hover:opacity-100 transition-opacity duration-700
        bg-black bg-opacity-80 flex items-center xl:justify-end
        justify-center p-3 text-white flex-col text-center xl:text-left
        scale-105 hover:backdrop-blur-sm"
      >
        <h2 className="text-sm tracking-widest w-full leading-none">
          {props.name}
        </h2>
        <h3 className="text-xs font-light tracking-wide w-full leading-none">
          {props.artist}
        </h3>
      </div>
    </div>
  );
};
