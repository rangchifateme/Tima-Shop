import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
// import "../App.css";

const Menu = () => {
  return (
    <nav>
      <ul className='nav'>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/items">Products</CustomLink>
        <CustomLink to="/cart">Cart</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }: { to: string; children: React.ReactNode }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path :resolvedPath.pathname, end: true });
    console.log("to:"+ to);
    console.log("is active is:"+ resolvedPath.pathname);
    return(
        <li  className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Menu;