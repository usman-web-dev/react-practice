import React, { ButtonHTMLAttributes, FC } from 'react';

export const BaseBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => (
  <button
    className={`${className} bg-indigo-600 px-5
      py-2 rounded-lg text-white font-semibold drop-shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2
      transition`}
    {...props}
  >
    {children}
  </button>
);
