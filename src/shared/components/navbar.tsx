import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div
      className=" px-4 py-2 flex flex-row gap-4 text-white fixed top-0 left-0
    w-full z-10 backdrop-blur-sm bg-slate-400 bg-opacity-50"
    >
      <NavLink to="/" className="">2022</NavLink>
      <NavLink to="albums" className="font-light">
        Albums
      </NavLink>
      <NavLink to="songs" className="font-light">
        Songs
      </NavLink>
    </div>
  );
};
