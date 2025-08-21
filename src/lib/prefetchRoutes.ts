export const routeImportMap: Record<string, () => Promise<unknown>> = {
  '/': () => import('@/pages/Index'),
  '/products': () => import('@/pages/Products'),
  '/about': () => import('@/pages/About'),
  '/contact': () => import('@/pages/Contact'),
  '/projects': () => import('@/pages/Projects'),
  '/services': () => import('@/pages/Services'),
  '/services/residential': () => import('@/pages/services/Residential'),
  '/services/commercial': () => import('@/pages/services/Commercial'),
};

export const prefetchRoute = (path: string) => {
  const loader = routeImportMap[path];
  if (loader) {
    // Fire and forget – leverage browser module cache
    loader().catch(() => {
      // Silently fail - prefetching is not critical
    });
  } else if (path.startsWith('/products/')) {
    // Handle dynamic product detail routes
    import('@/pages/ProductDetail').catch(() => {});
  } else if (path.startsWith('/projects/')) {
    // Handle dynamic project detail routes
    import('@/pages/ProjectDetail').catch(() => {});
  }
};

// Batch prefetch multiple routes for better performance
export const prefetchRoutes = (paths: string[]) => {
  // Use requestIdleCallback to avoid blocking main thread
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  idleCallback(() => {
    paths.forEach(prefetchRoute);
  });
};
