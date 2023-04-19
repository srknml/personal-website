import { useState } from "react";
import Utils from "../../Utils/index";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { motions } = Utils;
  return (
    <header
      className={`flex-row-between sticky top-0 items-center w-full max-w-8xl mx-auto z-20 p-5 ${
        isOpen ? "border-b-orange-500 border-b-2 bg-gray-900" : "bg-inherit "
      }`}
    >
      <Navbar motions={motions} isOpen={isOpen}>
        <Hamburger setIsOpen={setIsOpen} isOpen={isOpen} />
      </Navbar>

      <SocialIcons motions={motions} />
    </header>
  );
};

// Buttons out of div @TODO
// Carousel stops sliding on mobile @TODO
// Hamburber menu needs to be closed on click @TODO

export default Header;
