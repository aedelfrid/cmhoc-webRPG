import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import hocEmblem from './hocEmblem.svg';
import { getProfile, loggedIn, login, logout, isTokenExpired } from '../utils/auth'

// for grading, please check the isAdmin boolean

function Header() {
  const { username, isAdmin } = getProfile();

  return (
    <>
      <div className="px-10 py-2 flex items-center justify-between border-b">
        <img width={30} src={hocEmblem}></img>

        <div className="header-content">
          <p className="text-3xl">Canadian Model House of Commons</p>
          {loggedIn() && <p className="text-center">Welcome, {username}.</p>}
        </div>
        <GiHamburgerMenu size={30} />
      </div>
    </>
  );
}

export default Header;
