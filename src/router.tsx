import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LandingPage } from './modules/landing/landingPage';

const AlbumsApp = lazy(async () => import('./modules/albums/albumsApp'));
const TracksApp = lazy(async () => import('./modules/songs/tracksApp'));

export const appRouter = createBrowserRouter(
  [
    {
      path: '',
      element: <LandingPage />,
      children: [
        {
          path: '',
          element: <AlbumsApp />,
        },
        {
          path: 'songs',
          element: <TracksApp />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
