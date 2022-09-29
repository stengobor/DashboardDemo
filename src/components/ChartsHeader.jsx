import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className=" mb-10">
    <div>
      <p className="uppercase font-semibold text-lg  dark:text-slate-500 text-black">Chart</p>
      <p className="text-4xl font-extrabold tracking-tight dark:text-slate-900 text-slate-900">{category}</p>
    </div>
    <p className="text-center dark:text-slate-900 text-xl mb-2 mt-3 underline">{title}</p>
  </div>
);

export default ChartsHeader;