/* eslint-disable */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title] = useState([
    "우유 푸딩 만들기",
    "2023년 푸딩비가 먹은 딸기 음료 모음展",
    "파르페 만들기 도전기",
  ]);
  let [time, setTime] = useState("0000.00.00.00:00");
  let [like, setLike] = useState([0, 0, 0]);
  const modalLetter = {
    0: "우유 푸딩 레시피 재료 - 흑설탕 125g / 우유 400ml / 계란 2개",
    1: "pudding__github--icon.png",
    2: "삐쀼루뺘빰",
  };
  let [bgColor, setBgColor] = useState([
    "lightgoldenrodyellow",
    "lightpink",
    "lightblue",
    "lightcyan",
    "lightsalmon",
  ]);
  let [modal, setModal] = useState(false);
  let [object, setObject] = useState(0);

  const clock = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let day = String(today.getDate()).padStart(2, "0");
    let hour = String(today.getHours()).padStart(2, "0");
    let min = String(today.getMinutes()).padStart(2, "0");

    let nowTime = `${year}.${month}.${day}.${hour}:${min}`;
    setTime(nowTime);
  };

  const currentClock = () => {
    setInterval(clock, 1000);
  };

  currentClock();

  const likeCount = (i) => {
    let likeCopy = [...like];
    likeCopy[i] = likeCopy[i] + 1;
    setLike(likeCopy);
  };

  return (
    <div className="App">
      <header className="blog__header">
        <div className="profile-box">
          <img className="profile-icon" src="./pudding__github--icon.png" />
          <div className="name">
            <span>푸딩비</span>
            <span>코코딩 뿌딩딩</span>
          </div>
        </div>

        <div className="letter-number">
          <h3>전체 글 ({title.length})</h3>
        </div>

        <nav className="hamburger__wrapper">
          <button className="nav__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      {title.map(function (a, i) {
        return (
          <article
            onClick={() => {
              setModal(!modal);
              setObject(i);
            }}
          >
            <h3 className="title"> {title[i]} </h3>
            <div className="subtitle">
              <div className="category-time">
                <span className="category">디저트 </span> <span>| {time} </span>
              </div>
              <div className="like-box">
                <span
                  className="like"
                  onClick={(e) => {
                    likeCount(i);
                  }}
                >
                  🧡 {like[i]}
                </span>{" "}
                &nbsp;
                <FontAwesomeIcon icon={faComment} /* color="gray" */ /> 0
              </div>
            </div>
            <hr />
          </article>
        );
      })}

      {modal == true ? (
        <Modal
          time={time}
          title={title}
          bgColor={bgColor}
          modalLetter={modalLetter}
          object={object}
        />
      ) : null}

      <div className="nav__modal">
        <ul className="nav-title">
          <li className="bold">카테고리 전체</li>
          <li className="bold">디저트</li>
          <li className="bold">레시피</li>
          <li>맛있는 음료</li>
          <li>베이킹</li>
        </ul>
      </div>
    </div>
  );
}

function Modal(props) {
  return (
    <div
      className="letter__modal"
      style={{ backgroundColor: props.bgColor[props.object] }}>
      <span className="category">디저트 </span>
      <h3 className="title letter__modal--title">
        {props.title[props.object]}
      </h3>
      <div className="category-time">
        <span> 푸딩비 | {props.time} </span>
      </div>
      <hr />
      <div className="modal-content">
        {props.modalLetter[Object.keys(props.modalLetter)[props.object]]}
      </div>
    </div>
  );
}

export default App;
