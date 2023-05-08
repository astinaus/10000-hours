import React from 'react';
import './Header.css';
import img from '../../Assets/Images/title.png';

export default function Header() {
  return (
    <>
      <header className="header">
        <h1>
          <img src={img} alt="1만 시간의 법칙 타이틀" />
        </h1>
      </header>
    </>
  );
}
