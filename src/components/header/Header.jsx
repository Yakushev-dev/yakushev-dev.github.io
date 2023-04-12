import React, { useState } from 'react';
import Menu from './Menu/Menu.jsx';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Menu isOpen={isOpen} onClick={toggleMenu} />
      {isOpen && (
        <div className="side-menu">
          <ul>
            <li>Love Story</li>
            <li>Место встречи</li>
            <li>Про подарки</li>
            <li>Я с вами!</li>
            <li>Галерея</li>
          </ul>
        </div>
      )}
      <h1>ИГОРЬ & ЕКАТЕРИНА</h1>
      <h3>17.06.2023</h3>
    </div>
  );
};

export default Header;
