import React from "react";

const Header = ({ updateDisplay, currentTab }) => (
  <header id="header">
    <nav>
      <div
        onClick={() => updateDisplay("add")}
        class={currentTab === "add" ? "header-btn-active" : "header-btn"}
      >
        <div
          class={
            currentTab === "add" ? "img-container-active" : "img-container"
          }
        >
          <img src="../assets/svg/add-white.svg" alt="add-icon" />
        </div>
      </div>

      <div
        onClick={() => updateDisplay("list")}
        class={currentTab === "list" ? "header-btn-active" : "header-btn"}
      >
        <div
          class={
            currentTab === "list" ? "img-container-active" : "img-container"
          }
        >
          <img src="../assets/svg/list-white.svg" alt="list-notes-icon" />
        </div>
      </div>

      <div
        onClick={() => updateDisplay("account")}
        class={currentTab === "account" ? "header-btn-active" : "header-btn"}
      >
        <div
          class={
            currentTab === "account" ? "img-container-active" : "img-container"
          }
        >
          <img src="../assets/svg/account-white.svg" alt="account-icon" />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
