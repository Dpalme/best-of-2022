import { NavLink } from 'react-router-dom';
import { m } from 'framer-motion';

export const Navbar = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
      className=" px-4 py-2 flex flex-row gap-4 text-white fixed top-0 left-0
    w-full z-10 backdrop-blur-sm bg-slate-400 bg-opacity-50"
    >
      <NavLink to="/" className="">
        2022
      </NavLink>
      <NavLink to="/" className="font-light">
        Albums
      </NavLink>
      <NavLink to="songs" className="font-light">
        Songs
      </NavLink>
    </m.div>
  );
};
