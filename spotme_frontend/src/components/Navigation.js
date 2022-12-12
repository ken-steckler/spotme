import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav class="navigation">
      <Link to="../add-exercise" id="navigation">
        <button id="submit">Add an exercise</button>
      </Link>
    </nav>
  );
}

export default Navigation;
