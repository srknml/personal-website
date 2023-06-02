import { useState } from "react";
import Utils from "../../Utils/index";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import { useTheme } from "../../context/Theme";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { motions } = Utils;

  const { isDark, toggle } = useTheme();
  // TODO : More Skills Icons
  // TODO : Add More Projects
  // TODO : Add More Blogs
  // TODO : Add Footer
  // TODO : Add RESUME
  return (
    <header
      className={` ${isDark ? "dark" : "light"} header  ${
        isOpen ? "headerOpen" : "items-center"
      }`}
    >
      <Navbar
        motions={motions}
        isDark={isDark}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <Hamburger setIsOpen={setIsOpen} isDark={isDark} isOpen={isOpen} />
      </Navbar>

      <SocialIcons motions={motions} isDark={isDark} />
    </header>
  );
};

export default Header;
