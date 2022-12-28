import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LandingPage } from './modules/landing/landingPage';

const AlbumsApp = lazy(async () => import('./modules/albums/albumsApp'));
const TracksApp = lazy(async () => import('./modules/songs/tracksApp'));

export const appRouter = createBrowserRouter(
  [
    {
      path: '',
      element: <LandingPage />,
      action: () => {
        document.body.style.backgroundImage = '';
      },
      children: [
        {
          path: '',
          element: <Navigate to="albums" />,
          loader: () => {
            document.body.style.backgroundImage =
              "url('https://im.vsco.co/aws-us-west-2/cd90ea/155530507/62e8a4662991eb6d3c00001b/51efe608-e0f8-488a-b160-988568a4dd332912422089873860651.jpg')";
            return 0;
          },
        },
        {
          path: 'albums',
          element: <AlbumsApp />,
          loader: () => {
            document.body.style.backgroundImage =
              "url('https://im.vsco.co/aws-us-west-2/cd90ea/155530507/637094b22991eb37dd000007/5b71a94d-23aa-41c6-b42c-92f5f3c16fbf3623677695015032824.jpg')";
            return 0;
          },
        },
        {
          path: 'songs',
          element: <TracksApp />,
          loader: () => {
            document.body.style.backgroundImage =
              "url('https://im.vsco.co/aws-us-west-2/cd90ea/155530507/637094b62991eb37dd000009/416fe35d-2b44-4871-86e2-2344b854084f2409290636463619310.jpg')";
            return 0;
          },
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
