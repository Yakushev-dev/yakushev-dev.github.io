import React from 'react';
import './Menu.css'

const Menu = ({ isOpen, onClick }) => {
  return (
    <div className="hamburger-menu" onClick={onClick}>
      <div className={`line line-1 ${isOpen ? 'open' : ''}`} />
      <div className={`line line-2 ${isOpen ? 'open' : ''}`} />
      <div className={`line line-3 ${isOpen ? 'open' : ''}`} />
    </div>
  );
};

export default Menu;