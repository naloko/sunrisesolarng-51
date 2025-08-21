
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TooltipProvider } from '@/components/ui/tooltip'
import './index.css'
import './i18n/config';
import './lib/vitals';

// Performance optimization - preload critical chunks
const prefetchCriticalChunks = () => {
  // Preload router chunk for faster navigation
  import('@/lib/prefetchRoutes');
  
  // Preload UI components that are used frequently
  import('@/components/ui/button');
  import('@/components/ui/card');
};

// Initialize performance optimizations
if (typeof window !== 'undefined') {
  // Use requestIdleCallback for non-critical preloading
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  idleCallback(prefetchCriticalChunks);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider delayDuration={200}>
      <Suspense fallback={<div className="loading-skeleton h-screen w-full" />}>
        <App />
      </Suspense>
    </TooltipProvider>
  </StrictMode>
);

