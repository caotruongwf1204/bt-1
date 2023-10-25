import React from 'react';

const NavLink = ({ href, text }) => {
  return (
    <>
      <a className="nav-link" href={href}>
        {text}
      </a>
    </>
  );
};

export default NavLink;
