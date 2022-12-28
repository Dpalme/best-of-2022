import { AlbumCard } from './album-card';
import albums from './2022-albums.json';

export function AlbumsList() {
  return (
    <div className="xl:max-h-[90vh] xl:w-[90vh] animate-slide-right mt-6">
      <div
        className="grid grid-cols-3 md:grid-cols-4
    xl:grid-cols-6 gap-2 xl:gap-4 mx-auto max-w-6xl xl:ml-0"
      >
        {albums.map((album) => (
          <AlbumCard {...album} key={album.name} />
        ))}
      </div>
    </div>
  );
}