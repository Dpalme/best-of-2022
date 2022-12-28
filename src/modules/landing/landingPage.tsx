import { NavLink, Outlet } from 'react-router-dom';
import { Navbar } from '../../shared/components/navbar';

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
