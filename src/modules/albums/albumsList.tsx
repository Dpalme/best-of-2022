import { AlbumCard } from './album-card';
import albums from './2022-albums.json';

export function AlbumsList() {
  return (
    <div className="xl:max-h-[85vh] xl:w-[85vh] animate-slide-right mt-6">
      <div
        className="grid grid-cols-3 md:grid-cols-4
    xl:grid-cols-6 gap-2 xl:gap-4 mx-auto max-w-6xl xl:ml-0"
      >
        {albums.map((album, i) => (
          <AlbumCard {...album} key={album.name} position={i + 1} />
        ))}
      </div>
    </div>
  );
}
