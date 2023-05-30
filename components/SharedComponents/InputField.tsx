import React, { InputHTMLAttributes } from 'react';

export const InputField = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="rounded  caret-gray-600 border-0  outline-none ring-[0.11rem] px-2  ring-gray-400 ring-offset-0  w-full h-10     focus:ring-blue-500 "
    />
  );
};
