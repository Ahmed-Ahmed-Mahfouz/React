import React from 'react';

import { Mynavbar } from '../components/Mynavbar';

import { Outlet } from 'react-router-dom';

import { Myfooter } from '../components/Myfooter';

export function SharedLayout() {
  return (
    <>
      <Mynavbar></Mynavbar>
      <Outlet></Outlet>
      <Myfooter></Myfooter>
    </>
  );
}
