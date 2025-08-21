
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import { TooltipProvider } from '@/components/ui/tooltip'
import './index.css'
import './i18n/config';

import './lib/vitals';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider delayDuration={200}>
      <App />
    </TooltipProvider>
  </StrictMode>
);

