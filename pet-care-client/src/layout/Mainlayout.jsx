import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../shared/Navber';

const Mainlayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navber></Navber>
      <Outlet />
    </div>
  );
};

export default Mainlayout;
