import React from 'react';

const Header = ({ category, title, icon }) => (
  <div className="mb-10">
    <p className="text-lg font-semibold text-gray-500 uppercase">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {[title, icon]} 
    </p>

  </div>
);

export default Header;