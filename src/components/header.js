import React from "react";
import { ReactSVG } from "react-svg";

export default function Header(props) {
  let { updateDisplay, currentTab } = props;
  return (
    <header id="header">
      <nav>
        <div
          onClick={() => updateDisplay("add")}
          className={currentTab === "add" ? "header-btn-active" : "header-btn"}
        >
          <div
            className={
              currentTab === "add" ? "img-container-active" : "img-container"
            }
          >
            <ReactSVG src="/svg/add-white.svg" />
          </div>
        </div>

        <div
          onClick={() => updateDisplay("list")}
          className={currentTab === "list" ? "header-btn-active" : "header-btn"}
        >
          <div
            className={
              currentTab === "list" ? "img-container-active" : "img-container"
            }
          >
            <ReactSVG src="/svg/list-white.svg" />
          </div>
        </div>

        <div
          onClick={() => updateDisplay("account")}
          className={
            currentTab === "account" ? "header-btn-active" : "header-btn"
          }
        >
          <div
            className={
              currentTab === "account"
                ? "img-container-active"
                : "img-container"
            }
          >
            <ReactSVG src="/svg/account-white.svg" />
          </div>
        </div>
      </nav>
    </header>
  );
}
