
import React from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <div
      className={`hamburger-menu relative cursor-pointer ${isOpen ? 'open' : ''}`}
      onClick={onClick}
    >
      <div className="bar1 w-6 h-1 bg-gray-800 my-1 transition-transform transform origin-center rotate-0"></div>
      <div className="bar2 w-6 h-1 bg-gray-800 my-1 transition-opacity opacity-100"></div>
      <div className="bar3 w-6 h-1 bg-gray-800 my-1 transition-transform transform origin-center -rotate-0"></div>
    </div>
  );
};

export default HamburgerMenu;
