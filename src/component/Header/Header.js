import React from 'react';
import "./Header.css";
import img2 from "../images/img2.png";

export default function Header() {
  return (
    <div className='header'>
      <div className='image'>
        <img src={img2} alt="photo" />
      </div>
    </div>
  )
}
