import { useAudioHook } from '../../shared/context/audioContext';

export const AlbumCard = (props: {
  name: string;
  artist: string;
  thumbnail: string;
  preview_url: string;
  album_link: string;
  position: number;
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
      cursor-pointer hover:overflow-hidden focus:scale-105"
      onClick={setSong}
    >
      <img src={props.thumbnail} alt={props.name + ' ' + props.artist} 
      className="aspect-square w-full" />
      <div
        className="bg-black text-white absolute left-1 bottom-1
        rounded-full w-12 h-12 lg:w-8 lg:h-8 flex justify-center items-center
        text-xl lg:text-base bg-opacity-20 backdrop-blur-sm shadow-md font-light"
      >
        {props.position}
      </div>
      <div
        className="absolute w-full h-full top-0 left-0 focus:opacity-100
        opacity-0 hover:opacity-100 transition-opacity duration-700
        bg-black bg-opacity-80 flex items-center xl:justify-end
        justify-center p-4 text-white flex-col text-center xl:text-left
        scale-[101%] hover:backdrop-blur-sm gap-1 px-3"
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
