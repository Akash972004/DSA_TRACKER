import React, { useState } from "react";
import { Link } from "react-router-dom";
import Status from "./Status";

function Navbar({ mode, setmode }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setmode(mode === "light" ? "dark" : "light");
  };

  const toggleTip = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div className="flex justify-between bg-green-600">
        <div className="text-gray-200 font-lg text-left hover:text-gray-200 m-3 h-8">
          <Link className="pl-2 font-large" to="/">
            DSA TRACKER
          </Link>
        </div>

        <div
          className="flex align-bottom text-base pr-3 text-center cursor-pointer"
          onClick={toggleTip}
        >
          <img className="mt-1 w-8 h-9" src="bulb.png" alt="Hot Tip" />
          <div className="text-gray-200 text-right m-2 h-8">Hot Tip</div>
        </div>
      </div>

      {/* If Status expects Tailwind class, pass it based on isVisible */}
      <Status visi={isVisible ? "visible" : "hidden"} />

      {/* If Status instead should render conditionally, you can do: */}
      {/* {isVisible && <Status />} */}

      {/* Optional: theme toggle button */}
      {/* <button
        onClick={handleClick}
        className="m-2 px-3 py-1 rounded bg-white text-green-700"
      >
        Toggle {mode === "light" ? "Dark" : "Light"} Mode
      </button> */}
    </div>
  );
}

export default Navbar;
