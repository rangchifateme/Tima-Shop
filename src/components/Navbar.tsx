import React from 'react';

const Navbar: React.FC = () => {
    // const path = window.location.pathname;
  return (
    <nav className='nav'>
        <a href="/" className="site-title">Site home</a>
      <ul>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
};
function CustomLink({ href, children, ...props }: { href: string; children: React.ReactNode }) {
    const path = window.location.pathname;
    return(
        <li  className={path == href ? 'active' : ''}>
            <a href={href} {...props}>{children}</a>
        </li>
    )
}
export default Navbar;