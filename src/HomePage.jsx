import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const title = "Главная  Страница"; 

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div>
      <h1 className={`fade-in ${isVisible ? 'fade-in' : ''}`}>
        {title.split('').map((letter, index) => (
          <span key={index} className="rainbow-letter" style={{ animationDelay: `${index * 0.1}s` }}>
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default HomePage;
