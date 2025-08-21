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
    loader();
  } else if (path.startsWith('/products/')) {
    // Handle dynamic product detail routes
    import('@/pages/ProductDetail');
  }
};
