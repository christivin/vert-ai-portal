export const routes = {
  home: '/',
  products: '/products',
  solutions: '/solutions',
  cases: '/cases',
  resources: '/resources',
  about: '/about',
  fde: '/fde',
} as const;

export type RouteKey = keyof typeof routes;
