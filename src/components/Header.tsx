import React from "react";
import { FaMoon } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { RiArrowDownSFill } from "react-icons/ri";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <header className="header d-flex justify-content-between align-items-center border-bottom">
        {/* header left */}
        <div className="header__left">
          <ul className="header__left-list list-unstyled d-flex m-0">
            <li className="header__left-item ps-4 ms-4">
              Cryptos: <span style={{ color: "#3057E4" }}>18.542</span>
            </li>
            <li className="header__left-item ps-4">
              Exchanges: <span style={{ color: "#3057E4" }}>484</span>
            </li>
            <li className="header__left-item ps-4">
              Market Cap:{" "}
              <span style={{ color: "#3057E4" }}>$2,175,894,501,400</span>
            </li>
          </ul>
        </div>

        {/* header right */}
        <div className="header__right">
          <ul className="header__right-list list-unstyled d-flex m-0">
            <li className="header__right-item pe-4">
              English <RiArrowDownSFill />
            </li>
            <li className="header__right-item pe-4">
              <AiFillDollarCircle
                style={{ color: "#05C873" }}
                className="mb-1"
              />{" "}
              USD <RiArrowDownSFill />
            </li>
            <li className="header__right-item pe-4 me-4">
              <FaMoon />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
