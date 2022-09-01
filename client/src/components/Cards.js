import React, { useState } from "react";
import styled from "styled-components";

function Cards({ data }) {
  const [value, setValue] = useState("Track");

  function tracking(event) {
    value === "Tracking" ? setValue("Track") : setValue("Tracking");
    event.currentTarget.classList.toggle("active");
  }

  return (
    <AccountContent>
      <div className="content_left">
        {data.logo > 0 ? <img src={data.logo} alt="logo-img" /> : ""}
        <h4 className="heading">{data.company}</h4>
        <p className="text">{data.website}</p>
      </div>
      <button className="content_right" onClick={tracking} id="trackEle">
        {value}
      </button>
    </AccountContent>
  );
}

const AccountContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .content_left {
    display: -ms-inline-grid;
    align-items: center;
    grid-gap: 1.5rem;
  }

  .content_left img {
    width: 50px;
    height: 50px;
    border-radius: 2px;
  }

  .heading {
    font-weight: 700;
    line-height: 22px;
    margin-left: 0;
  }

  .text {
    font-size: 12px;
    line-height: 16px;
    opacity: 0.5;
    margin-left: 0;
  }
  .content_right {
    width: 53px;
    height: 30px;
    border: 1px solid #ff6059;
    border-radius: 2px;
    text-align: center;
    color: #ff6059;
  }
  .active {
    width: 70px;
    height: 30px;
    border: 1px solid #00ff00;
    border-radius: 2px;
    text-align: center;
    color: #00ff00;
  }
`;

export default Cards;
