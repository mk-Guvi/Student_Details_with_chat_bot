import React, { ChangeEvent } from 'react';

export type OptionT = { label: string; value: string };
type SelectOptionProps = {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: OptionT[];
  value: string;
};

export const Select: React.FC<SelectOptionProps> = ({ value, onChange, options }) => {
  return (
    <div className=" flex  flex-col">
      <select
        value={`${value}`}
        onChange={onChange}
        onFocus={(e) => (e.target.size = 5)}
        onBlur={(e) => (e.target.size = 1)}
        className="px-1 py-2  border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        {[{ label: 'Select a Option', value: 'DEFAULT' }, ...options].map((option) => (
          <option
            key={option.value}
            disabled={option.value === 'DEFAULT'}
            className={` hover:cursor-pointer  hover:bg-blue-100 p-1 px-2 mt-1 rounded`}
            value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
