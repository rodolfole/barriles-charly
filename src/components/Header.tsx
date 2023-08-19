import { useState } from "react";
import { Link as Scroll } from "react-scroll";

import data from "../data";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const [open, setOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        className={`fixed w-full z-30 text-white top-0 ${
          headerBg ? "bg-[rgba(43,28,21,0.8)]" : "bg-transparent"
        }`}
      >
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <i className={`fa-solid fa-${open ? "xmark" : "bars"}`}></i>
        </div>
        <ul
          className={`absolute md:bg-transparent h-screen md:static md:z-auto z-[-1] flex flex-col md:top-40 md:flex-row justify-evenly items-center md:h-[137px] px-6 transition-all duration-300 ease-in ${
            open ? "right-0 top-0 bg-[rgba(43,28,21,0.8)]" : "right-[-490px]"
          }`}
        >
          {data.ui.header.map((item) =>
            !item.img ? (
              <Scroll
                activeClass="border-b-2 border-b-[#D4DEFF] text-yellow-500"
                className="cursor-pointer"
                key={item.val}
                offset={-136}
                smooth
                spy
                to={item.val!}
              >
                {item.label}
              </Scroll>
            ) : (
              <Scroll
                activeClass="border-b-2 border-b-[#D4DEFF] text-yellow-500"
                className="cursor-pointer"
                key={item.val}
                offset={-136}
                smooth
                spy
                to="hero"
              >
                <img
                  className="w-44 h-32"
                  src={item.img}
                  alt={data.contact.company}
                />
              </Scroll>
            )
          )}
        </ul>
      </nav>
    </>
  );
};

export default Header;
