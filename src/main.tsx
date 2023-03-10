import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { AudioProvider } from './shared/context/audioContext';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './router';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LazyMotion features={domAnimation}>
      <AudioProvider>
        <Suspense
          fallback={
            <div className="w-32 h-32 bg-slate-400 rounded-full animate-ping" />
          }
        >
          <AnimatePresence>
            <RouterProvider router={appRouter} />
          </AnimatePresence>
        </Suspense>
      </AudioProvider>
    </LazyMotion>
  </React.StrictMode>
);
