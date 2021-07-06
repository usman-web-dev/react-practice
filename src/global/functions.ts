import { Path, PathParams } from '.';

export const buildUrl = <P extends Path>(path: P, params: PathParams<P>): string => {
  let url: string = path;

  const paramObj: Record<string, string> = params;

  for (const key of Object.keys(paramObj)) {
    url = url.replace(`:${key}`, paramObj[key]);
  }

  return url;
};
