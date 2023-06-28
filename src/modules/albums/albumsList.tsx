import { AlbumCard } from './album-card';
import albums from './2022-albums.json';
import { Variants, m } from 'framer-motion';
import { IAlbum } from '../../shared/context/audioContext';

const variants = {
  visible: {
    x: '0%',
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.02,
      duration: .75,
    },
  },
  hidden: {
    x: '-100%',
    opacity: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.01,
    },
  },
} as Variants;

export function AlbumsList() {
  return (
    <div className="xl:max-h-[85vh] xl:w-[85vh] mt-6">
      <m.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="grid grid-cols-3 md:grid-cols-4
    xl:grid-cols-6 gap-2 xl:gap-4 mx-auto max-w-6xl xl:ml-0"
      >
        {albums.map((album: IAlbum, i) => (
          <AlbumCard {...album} key={album.name} position={i + 1} />
        ))}
      </m.div>
    </div>
  );
}
