import React from 'react';
import { BaseBtn, BaseTextField } from '../../../components';

export const Login = () => (
  <div className="flex items-center justify-center h-screen flex-col space-y-5">
    <h1 className="text-3xl font-bold">
      Hello <span className="text-indigo-600">There!</span>
    </h1>
    <BaseTextField placeholder="Email" />
    <BaseTextField placeholder="Password" />
    <BaseBtn className="w-[300px]">Login</BaseBtn>
  </div>
);
