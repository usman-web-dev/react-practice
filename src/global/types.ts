type ExtractRouteParams<T> = T extends `${infer _Start}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
  : T extends `${infer _Start}:${infer Param}`
  ? { [k in Param]: string }
  : {};

export type Route = {
  path: '/home';
};

const p = { dd: 'sadd' } as const;
const PATHS = { home: `home`, ...p } as const;

export type Path = typeof PATHS[keyof typeof PATHS];

// Object which has matching parameter keys for a path.
export type PathParams<P extends Path> = ExtractRouteParams<P>;
