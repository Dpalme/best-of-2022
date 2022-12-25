import { AlbumCard } from './album-card';
import albums from './assets/2022-albums.json';

function App() {
  return (
    <div className="xl:max-h-[90vh] xl:w-[90vh]">
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

export default App;
