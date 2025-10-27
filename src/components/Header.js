import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <button onClick={onDarkModeClick}>
      🌙 Mode
    </button>
  );
}

export default Header;