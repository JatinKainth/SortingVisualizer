import React from "react";

function NavBar({ resetArray }) {
  return (
    <div>
      <button onClick={() => resetArray()}>Generate New Array</button>
    </div>
  );
}

export default NavBar;
