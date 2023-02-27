/* eslint-disable */
import { useState } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="blog__header">

        
        <div className='profile-box'>
        <img className='profile-icon' src='./pudding__github--icon.png' />
        <div className='name'>
          <span>푸딩비</span>
          <span>코코딩 뿌딩딩</span>
        </div>
        </div>
    
        <div className='letter-number'>
          <h3>전체 글()</h3>
          </div>

            <div class="hamburger__wrapper">
               <button class="nav__hamburger">
                   <span></span>
                   <span></span>
                  <span></span>
              </button>
            </div>
      </header>



    </div>
  );
}

export default App;
