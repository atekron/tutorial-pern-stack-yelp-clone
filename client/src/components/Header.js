import React from "react";

const Header = ({ text }) => {
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center">
        {text || "Restaurant Finder"}
      </h1>
    </div>
  );
};

export default Header;
