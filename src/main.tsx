import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { AudioProvider } from './shared/context/audioContext';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AudioProvider>
      <Suspense
        fallback={
          <div className="w-32 h-32 bg-slate-400 rounded-full animate-ping" />
        }
      >
        <RouterProvider router={appRouter} />
      </Suspense>
    </AudioProvider>
  </React.StrictMode>
);
