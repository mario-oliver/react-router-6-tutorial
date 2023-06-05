import React from 'react';
import { Outlet } from 'react-router-dom';

import StyledNavbar from './StyledNavbar';
export function SharedLayout({}) {
  return (
    <>
      <StyledNavbar></StyledNavbar>
      <Outlet></Outlet>
    </>
  );
}
