import React from 'react';
import headerImg from 'assets/images/nanny.png';
import { Link } from 'react-router-dom';
import PATH from 'constants/PATH';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 bg-red-300">
      <Link to={PATH.HOME}>
        <div className="flex items-center">
          <img src={headerImg} alt="headerImg" className="w-16" />
          <h1 className="-ml-2 text-2xl font-bold">Yum0 Map</h1>
        </div>
      </Link>
      <nav>{children}</nav>
    </header>
  );
};

Header.defaultProps = {};

export default Header;
