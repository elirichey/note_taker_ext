import React from "react";
import { ReactSVG } from "react-svg";

export default function HeaderBack(props) {
  let { updateDisplay } = props;
  return (
    <header id="header">
      <nav>
        <div
          onClick={() => updateDisplay("list")}
          className="header-btn-active"
        >
          <div className="back-container">
            <div className="icon">
              <ReactSVG src="/svg/back.svg" />
            </div>
            <p>Back</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
