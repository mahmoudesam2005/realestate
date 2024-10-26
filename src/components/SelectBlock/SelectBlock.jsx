import React, { useState } from 'react';

function SelectBlock({ dataList, icon, control, children }) {


  return (
    <div className="bg-white md:px-3 max-sm:py-3">
      <div className="flex max-sm:flex-col max-sm:items-center">
      <img src={icon} alt={children} className="pr-2" />
      <select
        name={children}
        className="outline-none border-0 md:pr-24 py-3 max-sm:text-center"
        {...control(children)}
      >
        <option value="" disabled selected>{children}</option>
        {dataList?.map((data, index) => (
          <option key={index} value={data}>
            {data}
          </option>
        ))}
      </select>
      </div>
      <p className="md:pl-1 pb-3 max-sm:hidden">Select a {children}</p>
    </div>
  );
}

export default SelectBlock;
