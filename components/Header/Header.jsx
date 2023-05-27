import { useState } from "react";
import Utils from "../../Utils/index";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import { useTheme } from '../../context/Theme';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { motions } = Utils;

  const { isDark, toggle } = useTheme();
  console.log(isDark, toggle);
  console.log('Header');


  return (
    <header
      className={` ${isDark ? "dark" : "light"} flex-row-between sticky top-0 items-center w-full max-w-8xl mx-auto z-20 p-5 shadow-sm shadow-slate-700  ${isOpen ? "border-b-orange-500 border-b-2 bg-gray-900" : ""
        }`}
    >
      <Navbar motions={motions} isDark={isDark} isOpen={isOpen} setIsOpen={setIsOpen}>
        <Hamburger setIsOpen={setIsOpen} isDark={isDark} isOpen={isOpen} />
      </Navbar>

      <SocialIcons motions={motions} isDark={isDark} />
    </header>
  );
};

export default Header;
