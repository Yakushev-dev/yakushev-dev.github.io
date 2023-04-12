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
        <>
            <div className={`side-menu ${isOpen ? 'show' : ''}`}>
            <ul>
                <li>
                    <a href="#loveStory">
                        Love Story
                    </a>
                </li>
                <li>
                    <a href="#banket">
                        Место встречи
                    </a>
                </li>
                <li>
                    <a href="#dressCode">
                        Dress Code
                    </a>
                </li>
                <li>
                    <a href="#gift">
                        Подарки
                    </a>
                </li>
                <li>
                    <a href="#contacts">
                        Контакты
                    </a>
                </li>
            </ul>
            </div>
            <div
                className={`overlay ${isOpen ? 'show' : ''}`}
                onClick={() => setIsOpen(false)}
            />
        </>
      )}
      <h1>ИГОРЬ & ЕКАТЕРИНА</h1>
      <h3>17.06.2023</h3>
    </div>
  );
};

export default Header;
