import React from "react";

const Hamburger = ({ setIsOpen, isOpen, isDark }) => {
  return (
    <div className="block md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isDark ? "dark" : "light"
        } flex items-center px-3 py-2 rounded`}
      >
        <svg
          className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
    </div>
  );
};

export default Hamburger;
