import { onCLS, onINP, onLCP } from 'web-vitals';

const log = (metric: { name: string; value: number }) => {
  // Keep it simple: log to console for now
  // You can send to analytics later if needed
  console.log(`[WebVitals] ${metric.name}:`, Math.round(metric.value));
};

onLCP(log);
onINP(log);
onCLS(log);

export {};
