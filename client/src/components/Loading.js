import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Loader className="loadingio-spinner-bean-eater-qe9z7tcscr9">
      <div className="ldio-ufs9v8dcsg8">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Loader>
  );
}
const Loader = styled.div`
  position: absolute;
  top: 30%;
  left: 35%;
  @keyframes ldio-ufs9v8dcsg8-1 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes ldio-ufs9v8dcsg8-2 {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(225deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(2) {
    transform: translate(-15px, 0);
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(2) div {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 60px;
    height: 30px;
    border-radius: 60px 60px 0 0;
    background: #f8b26a;
    animation: ldio-ufs9v8dcsg8-1 1s linear infinite;
    transform-origin: 30px 30px;
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(2) div:nth-child(2) {
    animation: ldio-ufs9v8dcsg8-2 1s linear infinite;
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(2) div:nth-child(3) {
    transform: rotate(-90deg);
    animation: none;
  }
  @keyframes ldio-ufs9v8dcsg8-3 {
    0% {
      transform: translate(95px, 0);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    100% {
      transform: translate(35px, 0);
      opacity: 1;
    }
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(1) {
    display: block;
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(1) div {
    position: absolute;
    top: 46px;
    left: -4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e15b64;
    animation: ldio-ufs9v8dcsg8-3 1s linear infinite;
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(1) div:nth-child(1) {
    animation-delay: -0.67s;
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(1) div:nth-child(2) {
    animation-delay: -0.33s;
  }
  .ldio-ufs9v8dcsg8 > div:nth-child(1) div:nth-child(3) {
    animation-delay: 0s;
  }
  .loadingio-spinner-bean-eater-qe9z7tcscr9 {
    width: 68px;
    height: 68px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-ufs9v8dcsg8 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.68);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-ufs9v8dcsg8 div {
    box-sizing: content-box;
  }
`;
export default Loading;
