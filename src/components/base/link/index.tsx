import React, { ComponentType, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { buildUrl, Path, PathParams } from '../../../global';

type TypedLinkProps<P extends Path> = {
  to: P;
  params: PathParams<P>;
  replace?: boolean;
  component?: ComponentType;
  children?: ReactNode;
};

/**
 * Type-safe version of `react-router-dom/Link`.
 */
export const TypedLink = <P extends Path>({ to, params, replace, component, children }: TypedLinkProps<P>) => {
  return (
    <Link to={buildUrl(to, params)} replace={replace} component={component}>
      {children}
    </Link>
  );
};

<TypedLink to={'home'} params={{ dsad: 'sd' }} />;
