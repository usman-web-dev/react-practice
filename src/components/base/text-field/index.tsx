import React, { FC, InputHTMLAttributes } from 'react';

export const BaseTextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`${className} py-2 px-3 border-2 border-gray-300 rounded-lg outline-none focus-within:border-indigo-600 w-[300px] transition`}
    />
  );
};
