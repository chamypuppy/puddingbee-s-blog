/* eslint-disable */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import logo from './logo.svg';
import './App.css';

function App() {
  let [title] = useState(["우유 푸딩 만들기", "2023년 푸딩비가 먹은 딸기 음료 모음展", "파르페 만들기 도전기"]);
  let [time, setTime] = useState("0000.00.00.00:00");
  let [like, setLike] = useState([0, 0, 0])

    const clock = () => {
      let today = new Date();
      let year = today.getFullYear();
      let month = String(today.getMonth()+1).padStart(2, "0");
      let day = String(today.getDate()).padStart(2, "0");
      let hour = String(today.getHours()).padStart(2, "0");
      let min = String(today.getMinutes()).padStart(2, "0");

      let nowTime = `${year}.${month}.${day}.${hour}:${min}`
      setTime(nowTime)
  }
   
  const currentClock = () => {
      setInterval(clock, 1000)
    }
    
  currentClock()

  const likeCount = (i) => {
    let likeCopy = [...like];
    likeCopy[i] = likeCopy[i] + 1;
    setLike(likeCopy)
  }

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
          <h3>전체 글 ({ title.length })</h3>
          </div>

            <nav className="hamburger__wrapper">
               <button className="nav__hamburger">
                   <span></span>
                   <span></span>
                  <span></span>
              </button>
            </nav>
      </header>

      {
          title.map(function (a, i) {
            return (
               <article>
                <h3 className="title"> {title[i]} </h3>
                <div className="subtitle">
                  <div className="category-time">
                    <span className="category">디저트 </span> <span>| {time} </span>
                  </div>
                  <div className="like-box">
                    <span className="like" onClick={(e) => { likeCount(i) }}>🧡 {like[i]}</span> &nbsp;
                    <FontAwesomeIcon icon={ faComment } /* color="gray" */ /> 0
                    </div>
                  </div>
                <hr />
              </article>
            )
          })
          
      }

      <div className="title__modal">
        <span className="category">디저트 </span>
        <h3 className="title"> {title[0]} </h3>
        <div className="category-time">
                     <span> 푸딩비 | {time} </span>
        </div>
        
        <hr />
      </div>
        
    </div>
  );
}

export default App;
